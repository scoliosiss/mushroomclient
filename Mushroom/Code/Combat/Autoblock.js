import {prefix, RightClick, LeftClick, mc} from "../Utils";
import Config from "../../Config/Config"

const autoblocktoggle = new KeyBind("Autoblock", Keyboard.KEY_NONE, "Mushroom");

register("step", () => {
    if (Config.autoblockpog) {
        if (Player.getHeldItem() !== null) {
            if (Player.getHeldItem().getName().includes("Sword")) {
                if (Client.currentGui.get() == null) {
                    new Thread(() => {
                        LeftClick.invoke(mc);
                        Thread.sleep(50);
                        RightClick.invoke(mc);
                    }).start()
                }
            }
        }
    }
}).setFps(8);

register("tick", () => {
    if (autoblocktoggle.isPressed()) {
        ChatLib.chat(`${
            (Config.autoblockpog = !Config.autoblockpog) 
            ? prefix + " >" + "&r&a Autoblock" 
            : prefix + " >" + "&r&c Autoblock"
        }`
        );
    }
});

register("command", () => {
    ChatLib.chat(`${
        (Config.autoblockpog = !Config.autoblockpog) 
        ? prefix + " >" + "&r&a Autoblock" 
        : prefix + " >" + "&r&c Autoblock"
    }`
    );
}).setName("ab")