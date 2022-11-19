import {prefix} from "../Utils"
import Config from "../../Config/Config"

register("chat", (event, bridgebotrank, rank, username, message) => {
    if (!Config.guildbridge) return;
    cancel(event)
    ChatLib.chat(`&2[Bridge] ${username}&f: ${message}`)
}).setCriteria("Guild > [${bridgebotrank}] ${Config.guildbotsname} ${rank}: ${username}: ${message}")