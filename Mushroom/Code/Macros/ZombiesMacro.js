import Config from "../../Config/Config"
import {prefix, swaptoslot, RightClick, mc} from "../Utils"
const swapmacro = new KeyBind("Gun Swap macro", Keyboard.KEY_NONE, "Mushroom");
let zs = false;

register("step", () => {
    if (zs) {
        zombiesmacroswap(zs);
    }
}).setFps(40);

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
let swap_time = Date.now();

const zombiesmacroswap = (zs) => {
    if (zs) {
            if (Date.now() - swap_time > Config.Zombiesgunmacrospeed) {
                new Thread(() => {
                    Thread.sleep(Config.Zombiesgunmacrospeed);
                    Client.sendPacket(new swaptoslot(1));
                    RightClick.invoke(mc);
                    Thread.sleep(Config.Zombiesgunmacrospeed);
                    Client.sendPacket(new swaptoslot(2));
                    RightClick.invoke(mc);
                    Thread.sleep(Config.Zombiesgunmacrospeed);
                    Client.sendPacket(new swaptoslot(3));
                    RightClick.invoke(mc);
                    swap_time = Date.now();
                }).start()
            }
        }
    };
