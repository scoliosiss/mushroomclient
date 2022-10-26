import Config from "../Config/Config"
import {prefix, swaptoslot, RightClick, mc} from "./Utils";
const snowtoggle = new KeyBind("Auto snowball toggle", Keyboard.KEY_NONE, "Mushroom");
const rodtoggle = new KeyBind("Auto rod toggle", Keyboard.KEY_NONE, "Mushroom");

register("tick", () => {
    if (snowtoggle.isPressed()) {
        ChatLib.chat(`${
            (Config.snowballswap = !Config.snowballswap) 
            ? prefix + " >" + "&r&a Auto snowball" 
            : prefix + " >" + "&r&c Auto snowball"
        }`
        );
    }
});

register("command", () => {
    ChatLib.chat(`${
        (Config.snowballswap = !Config.snowballswap) 
        ? prefix + " >" + "&r&a Auto snowball" 
        : prefix + " >" + "&r&c Auto snowball"
    }`
    );
}).setName("as")

const snowballmacro = () => {
    new Thread(() => {
            for (let i = 0; i < 9; i++) {
                if (Config.snowballswap) {
                if (Player.getInventory().getStackInSlot(i) !== null && Player.getInventory().getStackInSlot(i).getName().includes("Snowball")) {
                    Client.sendPacket(new swaptoslot(i));
                    RightClick.invoke(mc);
                    Client.sendPacket(new swaptoslot(Player.getInventory().getInventory().field_70461_c));
                    break;
                }
            }
        }
    }).start();
}

register("tick", () => {
    if (rodtoggle.isPressed()) {
        ChatLib.chat(`${
            (Config.fishingrodswap = !Config.fishingrodswap) 
            ? prefix + " >" + "&r&a Auto rod" 
            : prefix + " >" + "&r&c Auto rod"
        }`
        );
    }
});

register("command", () => {
    ChatLib.chat(`${
        (Config.fishingrodswap = !Config.fishingrodswap) 
        ? prefix + " >" + "&r&a Auto rod" 
        : prefix + " >" + "&r&c Auto rod"
    }`
    );
}).setName("ar")

const fishingrod = () => {
    new Thread(() => {
            for (let i = 0; i < 9; i++) {
                if (Config.fishingrodswap) {
                if (Player.getInventory().getStackInSlot(i) !== null && Player.getInventory().getStackInSlot(i).getName().includes("Fishing")) {
                    Client.sendPacket(new swaptoslot(i));
                    RightClick.invoke(mc);
                    Thread.sleep(200);
                    Client.sendPacket(new swaptoslot(Player.getInventory().getInventory().field_70461_c));
                    break;
                }
            }
        }
    }).start();
}

register("clicked", () => {
    if (Client.currentGui.get() == null) {
        if (Player.getHeldItem() !== null) {
            if (Player.getHeldItem().getName().includes("Sword")) {
                snowballmacro();
            }
        }
    }
});

register("clicked", () => {
    if (Client.currentGui.get() == null) {
        if (Player.getHeldItem() !== null) {
            if (Player.getHeldItem().getName().includes("Sword")) {
                fishingrod();
            }
        }
    }
});
