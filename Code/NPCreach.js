import { C08PacketPlayerBlockPlacement, BP } from "./Utils";
const wolbing = new KeyBind("Wool Weaver", Keyboard.KEY_NONE, "Mushroom - NPC Reach");

const woolweaver = () => {
            for (let i = 0; i < 9; i++) {
                Client.sendPacket(new C08PacketPlayerBlockPlacement(new BP(-1, -1, -1), 255, Player.getInventory().getStackInSlot(i).getItemStack(), 0, 0, 0));
                break;
            }
        }

register("tick", () => {
    if (wolbing.isPressed()) {
        woolweaver();
        ChatLib.chat("cum")
    }
});
