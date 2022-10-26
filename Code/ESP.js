import Config from "../Config/Config"
import {prefix} from "./Utils"
import RenderLib from "../../RenderLib/index"
const espkey = new KeyBind("ESP", Keyboard.KEY_NONE, "Mushroom");

// fun

register("renderEntity", (entity) => {
    if (Config.Armorstandesp) {
        const espBox = (x, y, z, height) => {RenderLib.drawEspBox(x, y-height, z, 1, height, Config.Armorstandespcolor.getRed()/255, Config.Armorstandespcolor.getGreen()/255, Config.Armorstandespcolor.getBlue()/255, 1, false)}
        espBox(entity.getX(), entity.getY(), entity.getZ(), -2)
    }
})

register("command", () => {
    ChatLib.chat(`${
        (Config.Armorstandesp = !Config.Armorstandesp) 
        ? prefix + " >" + "&r&a ESP" 
        : prefix + " >" + "&r&c ESP"
    }`
    );
}).setName("esp")

register("tick", () => {
    if (espkey.isPressed()) {
        ChatLib.chat(`${
            (Config.Armorstandesp = !Config.Armorstandesp) 
            ? prefix + " >" + "&r&a ESP" 
            : prefix + " >" + "&r&c ESP"
        }`
        );
    }
});

