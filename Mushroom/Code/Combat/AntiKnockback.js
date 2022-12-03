import Config from "../../Config/Config"
import {} from "../Utils";

register("packetReceived", (packet, event) => {
    if (Config.antiknockback) {
        if (packet.toString().includes("net.minecraft.network.play.server.S12PacketEntityVelocity")) {
            cancel(event)
        }
    }
})