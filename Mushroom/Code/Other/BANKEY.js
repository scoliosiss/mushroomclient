import { C08PacketPlayerBlockPlacement, BP } from "../Utils";
const bankey = new KeyBind("ACTUAL BANBIND", Keyboard.KEY_NONE, "Mushroom - BAN KEYBIND");

const banpacket = () => {
            for (let i = 0; i < 9; i++) { // sends a 25 block higher reach packet (no wonder it flags)
                Client.sendPacket(new C08PacketPlayerBlockPlacement(new BP(-1, -1, -1), 255, Player.getInventory().getStackInSlot(i).getItemStack(), 0, 25, 0));
                break;
            }
        }

register("tick", () => {
    if (bankey.isPressed()) {
        banpacket();
        ChatLib.chat("&4you will be banned in about 10 seconds! :)")
    }
});
