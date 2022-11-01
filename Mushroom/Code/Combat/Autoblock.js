import {prefix, RightClick, LeftClick, mc} from "../Utils";
import Config from "../../Config/Config"

const autoblocktoggle = new KeyBind("Autoblock", Keyboard.KEY_NONE, "Mushroom");


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

const autoblockcode = () => {
                new Thread(() => {
                    LeftClick.invoke(mc);
                    Thread.sleep(Config.yourping / 5);
                    RightClick.invoke(mc);
                }).start()
    };

register("step", () => {
    if (Config.autoblockpog) {
        if (Player.getHeldItem() !== null) {
            if (Player.getHeldItem().getName().includes("Sword")) {
                if (Client.currentGui.get() == null) {
                    autoblockcode();
                }
            }
        }
    }
}).setFps(8);

