import Config from "../../Config/Config"
import {} from "../Utils";
const kbpacket = Java.type("net.minecraft.network.play.server.S12PacketEntityVelocity");

register("step", (event) => {
    if (!Config.antiknockback) return;
    if (event instanceof kbpacket) {
        let motionX = Player.func_149149_c()
        let motionY = Player.func_149144_d()
        let motionZ = Player.func_149147_e()
        Client.sendPacket(Player.func_70016_h(motionX))
        Client.sendPacket(Player.func_70016_h(motionY))
        Client.sendPacket(Player.func_70016_h(motionZ))
    }
});