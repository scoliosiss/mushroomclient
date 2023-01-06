import Config from "../../Config/Config"
import {prefix, swaptoslot, RightClick, mc} from "../Utils"
const swapmacro = new KeyBind("Gun Swap macro", Keyboard.KEY_NONE, "Mushroom");
let zs = false;

// ILL UPDATE THIS SOON ;)

register("step", () => {
    if (zs) {
        new Thread(() => {
            Client.sendPacket(new swaptoslot(1));
            Thread.sleep(Config.Zombiesgunmacrospeed);
            RightClick.invoke(mc);
        }).start()
    }
});


register("tick", () => {
    if (swapmacro.isPressed()) {
        ChatLib.chat(`${
            (zs = !zs) 
            ? prefix + " >" + "&r&a Swap macro" 
            : prefix + " >" + "&r&c Swap macro"
        }`
        );
    }
});