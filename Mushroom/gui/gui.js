// yes im using vigilances code for the gui
// all credit to gui goes to FalseHonesty
// https://www.chattriggers.com/modules/v/Vigilance
// ^^ very cool gui i just wantted to make it look better

const VigilantClass = Java.type("gg.essential.vigilance.Vigilant");
const PropertyCollector = Java.type("gg.essential.vigilance.data.PropertyCollector");
const PropertyValue = Java.type("gg.essential.vigilance.data.PropertyValue");
const CallablePropertyValue = Java.type("gg.essential.vigilance.data.CallablePropertyValue");
const PropertyAttributesExt = Java.type("gg.essential.vigilance.data.PropertyAttributesExt");
const SortingBehavior = Java.type("gg.essential.vigilance.data.SortingBehavior");
const PropertyType = Java.type("gg.essential.vigilance.data.PropertyType");
const PropertyData = Java.type("gg.essential.vigilance.data.PropertyData");
const Unit = Java.type("kotlin.Unit").INSTANCE;

const configs = [];

const JSBackedPropertyValue = (config, propName, isIntegerDesired, isFloatDesired) => ({
    getPropName() {
        return propName;
    },
    getValue() {
        if (isIntegerDesired)
            return new java.lang.Integer(config[propName]);
        if (isFloatDesired)
            return new java.lang.Float(config[propName]);
        return config[propName];
    },
    setValue(newValue) {
        config[propName] = newValue;
    }
});

const JSFunctionCallableValue = (config, funcName) => ({
    invoke() {
        config[funcName]();
    }
})

const DecoratorCollector = config => ({
    collectProperties(instance) {
        const props = [];
        const clazz = config.__proto__;
        Object.getOwnPropertyNames(clazz.__config_props__).forEach(prop => {
            const attributes = clazz.__config_props__[prop];
            const isIntegerDesired = attributes.type === PropertyType.SLIDER || attributes.type === PropertyType.SELECTOR;
            const isFloatDesired = attributes.type === PropertyType.DECIMAL_SLIDER || attributes.type === PropertyType.PERCENT_SLIDER;
            props.push(new PropertyData(
                attributes,
                new JavaAdapter(PropertyValue, JSBackedPropertyValue(config, prop, isIntegerDesired, isFloatDesired)),
                instance
            ));
        });

        Object.getOwnPropertyNames(clazz.__config_functions__).forEach(func => {
            props.push(new PropertyData(
                clazz.__config_functions__[func],
                new JavaAdapter(CallablePropertyValue, JSFunctionCallableValue(config, func)),
                instance
            ));
        });
        return props;
    }
});

export function createPropertyAttributesExt(propertyType, configObj) {
    return new PropertyAttributesExt(
        propertyType,
        configObj.name,
        configObj.category,
        configObj.subcategory ?? "",
        configObj.description ?? "",
        configObj.min ?? 0,
        configObj.max ?? 0,
        configObj.minF ?? 0,
        configObj.maxF ?? 0,
        configObj.decimalPlaces ?? 1,
        configObj.increment ?? 1,
        configObj.options ?? new java.util.ArrayList(),
        configObj.allowAlpha ?? true,
        configObj.placeholder ?? "",
        configObj.protected ?? false,
        configObj.triggerActionOnInitialization ?? true,
        configObj.hidden ?? false,
    );
}

export decorator @Vigilant(
    moduleName,
    guiTitle = "Settings",
    sortingBehaviorSettings = {}
) {
    @wrap((clazz) => {
        clazz.prototype.__config_props__ = {};
        clazz.prototype.__config_functions__ = {};
        clazz.prototype.initialize = instance => {
            // TODO: If the @initialize decorator becomes a thing, put this code there.
            const collector = new JavaAdapter(PropertyCollector, DecoratorCollector(instance));
            const sortingBehavior = new JavaAdapter(SortingBehavior, sortingBehaviorSettings);
            const config = new JavaAdapter(
                VigilantClass, {},
                new java.io.File(`./config/ChatTriggers/modules/Mushroom/Config/config.toml`),
                guiTitle,
                collector,
                sortingBehavior
            );
            config.initialize();

            const findProp = propName => {
                const prop = collector.getProperties().find(prop => prop.attributes.name === propName)

                if (prop === undefined) {
                    throw new Error(`Property not found with name ${propName}`);
                }

                return prop;
            }

            instance.getConfig = () => config;
            instance.openGUI = () => GuiHandler.openGui(config.gui());
            instance.registerListener = (name, func) => {
                findProp(name).action = newValue => {
                    func(newValue);
                    return Unit;
                };
            };
            instance.registerProperty = (propertyData) => {
                config.registerProperty(propertyData);
            };
            instance.addDependency = (dependentName, dependencyName) => {
                const dependent = findProp(dependentName);
                const dependency = findProp(dependencyName);

                if (dependency.attributesExt.type !== PropertyType.SWITCH && dependency.attributesExt.type !== PropertyType.CHECKBOX) {
                    throw new Error(`Dependencies must be a boolean data type but ${dependencyName} is a ${dependency.attributesExt.type}`);
                }

                dependency.setHasDependants(true);
                dependent.setDependsOn(dependency);
            };
            instance.hideProperty = (propertyName) => {
                findProp(propertyName).attributesExt.hidden = true;
            };
            instance.hidePropertyIf = (propertyName, condition) => {
                if (typeof condition === "function") {
                    if (condition()) {
                        instance.hideProperty(propertyName);
                    }
                }
                if (typeof condition === "boolean") {
                    if (condition) {
                        instance.hideProperty(propertyName);
                    }
                }
            };
            instance.setCategoryDescription = (categoryName, description) => {
                config.setCategoryDescription(categoryName, description);
            };
            instance.setSubcategoryDescription = (categoryName, subcategoryName, description) => {
                config.setSubcategoryDescription(categoryName, subcategoryName, description);
            };
            instance.save = () => {
                config.markDirty();
                config.writeData();
            }
            configs.push(config);
        };
        return clazz;
    })
}

export decorator @SwitchProperty(config) {
    @register((target, propertyKey) => {
        target.__config_props__[propertyKey] = createPropertyAttributesExt(PropertyType.SWITCH, config);
    })
}

export decorator @CheckboxProperty(config) {
    @register((target, propertyKey) => {
        target.__config_props__[propertyKey] = createPropertyAttributesExt(PropertyType.CHECKBOX, config);
    })
}

export decorator @TextProperty(config) {
    @register((target, propertyKey) => {
        target.__config_props__[propertyKey] = createPropertyAttributesExt(PropertyType.TEXT, config);
    })
}

export decorator @ParagraphProperty(config) {
    @register((target, propertyKey) => {
        target.__config_props__[propertyKey] = createPropertyAttributesExt(PropertyType.PARAGRAPH, config);
    })
}

export decorator @PercentSliderProperty(config) {
    @register((target, propertyKey) => {
        target.__config_props__[propertyKey] = createPropertyAttributesExt(PropertyType.PERCENT_SLIDER, config);
    })
}

export decorator @SliderProperty(config) {
    @register((target, propertyKey) => {
        target.__config_props__[propertyKey] = createPropertyAttributesExt(PropertyType.SLIDER, config);
    })
}

export decorator @DecimalSliderProperty(config) {
    @register((target, propertyKey) => {
        target.__config_props__[propertyKey] = createPropertyAttributesExt(PropertyType.DECIMAL_SLIDER, config);
    })
}

export decorator @NumberProperty(config) {
    @register((target, propertyKey) => {
        target.__config_props__[propertyKey] = createPropertyAttributesExt(PropertyType.NUMBER, config);
    })
}

export decorator @ColorProperty(config) {
    @register((target, propertyKey) => {
        target.__config_props__[propertyKey] = createPropertyAttributesExt(PropertyType.COLOR, config);
    })
}

export decorator @SelectorProperty(config) {
    @register((target, propertyKey) => {
        target.__config_props__[propertyKey] = createPropertyAttributesExt(PropertyType.SELECTOR, config);
    })
}

export decorator @ButtonProperty(config) {
    @register((target, propertyKey) => {
        target.__config_functions__[propertyKey] = createPropertyAttributesExt(PropertyType.BUTTON, config);
    })
}

register("gameUnload", () => {
    configs.forEach(config => {
        config.markDirty();
        config.writeData();
    });
});

export const Color = Java.type("java.awt.Color");
