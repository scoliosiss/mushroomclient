import { C08PacketPlayerBlockPlacement, BP } from "../Utils";
const bankey = new KeyBind("ACTUAL BANBIND", Keyboard.KEY_NONE, "Mushroom - BAN KEYBIND");

// HYPIXEL PATCHED THIS BANNING??????
// BANNING YOURSELF IS USELESS SO IM NOT FINDING NEW BAN METHOD

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
    //   if (packet.toString().includes("S12") || packet.toString().includes("S14") || packet.toString().includes("S19") || packet.toString().includes("S18") || packet.toString().includes("S20") || packet.toString().includes("S21") || packet.toString().includes("S26") || packet.toString().includes("S1") || packet.toString().includes("S03") || packet.toString().includes("S04") || packet.toString().includes("S0F") || packet.toString().includes("S00") || packet.toString().includes("S29") || packet.toString().includes("S35")) return;
    //    ChatLib.chat(packet)
    banpacket()
        cancel(event)
    }
})

register("command", () => {
    (banmepog = !banmepog)
    ChatLib.chat("beamed")
}).setName("actuallybanme")