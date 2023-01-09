import Config from "../../Config/Config"
import {prefix, swaptoslot, RightClick, mc} from "../Utils"
const swapmacro = new KeyBind("Gun Swap macro", Keyboard.KEY_NONE, "Mushroom");
let zs = false;

// ILL UPDATE THIS SOON ;)

register("step", () => {
    if (zs) {
        new Thread(() => {
            for (let i = 1; i < 9; i++) {
                if (Player.getInventory().getStackInSlot(i) !== null) {
                if (Player.getInventory().getStackInSlot(i).getNBT().toString().includes("RIGHT-CLICK")) {
                    Client.sendPacket(new swaptoslot(i));
                    Thread.sleep(Config.Zombiesgunmacrospeed);
                    RightClick.invoke(mc);
                    break;
                }
                }
            }
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