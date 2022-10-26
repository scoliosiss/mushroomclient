import Config from "../Config/Config"
import {LeftClick, prefix, RightClick, mc} from "./Utils";
const autoClicker = new KeyBind("Autoclicker right", Keyboard.KEY_NONE, "Mushroom");
const lcautoClicker = new KeyBind("Autoclicker left", Keyboard.KEY_NONE, "Mushroom");
let ac = false;
let lc = false;

// i enjoy easy code

const autoclicker = (ac) => {
            if (ac) {
                RightClick.invoke(mc);
                }
            }

const leftclickac = (lc) => {
            if (lc) {
                LeftClick.invoke(mc);
                }
            }
register("step", () => {
    if (ac) {
        autoclicker(ac);
    }
}).setFps(Config.autoclickerspeed);

register("step", () => {
    if (lc) {
        leftclickac(lc);
    }
}).setFps(Config.leftclickacspeed);
register("tick", () => {
    if (autoClicker.isPressed()) {
        ChatLib.chat(`${
            (ac = !ac) 
            ? prefix + " >" + "&r&a Autoclicker right" 
            : prefix + " >" + "&r&c Autoclicker right"
        }`
        );
    }
});

register("tick", () => {
    if (lcautoClicker.isPressed()) {
        ChatLib.chat(`${
            (lc = !lc) 
            ? prefix + " >" + "&r&a Autoclicker left" 
            : prefix + " >" + "&r&c Autoclicker left"
        }`
        );
    }
});

register("command", () => {
    ChatLib.chat(`${
        (ac = !ac) 
        ? prefix + " >" + "&r&a Autoclicker right" 
        : prefix + " >" + "&r&c Autoclicker right"
    }`
    );
}).setName("arc")

register("command", () => {
    ChatLib.chat(`${
        (lc = !lc) 
        ? prefix + " >" + "&r&a Autoclicker left" 
        : prefix + " >" + "&r&c Autoclicker left"
    }`
    );
}).setName("alc")