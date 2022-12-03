import Config from "../../Config/Config"

register("packetReceived", (packet, event) => {
    if (Config.freezeme) {
        cancel(event)
    }
})