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
        (banmepog = !banmepog)
    }
});
banmepog = false

register("packetReceived", (packet, event) => {
    if (banmepog) {
       // if (!packet.toString().includes("net.minecraft.network.play.server.S32PacketConfirmTransaction")) return;
        ChatLib.chat(packet)
        cancel(event)
    }
})