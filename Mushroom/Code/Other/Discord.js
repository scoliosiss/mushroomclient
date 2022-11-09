import Config from "../../Config/Config"
const DiscordRPC = Java.type("net.arikia.dev.drpc.DiscordRPC")
const DiscordEventHandlers = Java.type("net.arikia.dev.drpc.DiscordEventHandlers")
const DiscordRichPresence = Java.type("net.arikia.dev.drpc.DiscordRichPresence")

class Discord {
    constructor() {
        this.initialize()
        this.reset()

        register("tick", () => {

            if (!Config.discordrpc) return this.reset()
            this.details = `${Config.discordrpctext}`
            this.state = `${Config.discordrpctext2}`
                
            let scoreboardLines = Scoreboard.getLines().map(line => line.getName().removeFormatting().toLowerCase());
                scoreboardLines.forEach(line => {
                    if (!Config.discordrpcskyblock) return;
                    if (line.includes("village") || line.includes("auction house")) {
                        this.details = "in hub!"
                    }
                    if (line.includes("bank")) {
                        this.details = "stealing coops coins (in bank)"
                    }
                    if (line.includes("farm")) {
                        this.details = "farming in hub"
                    }
                    if (line.includes("the barn")) {
                        this.details = "in the barn"
                    }
                    if (line.includes("desert" || "oasis" || "glowing" || "overgrown" || "archaelogical site" || "mushroom")) {
                        this.details = "MUSHROOM DESERT"
                    }
                    if (line.includes("howl") || line.includes("castle")) {
                        this.details = "killing wolfs"
                    }
                    if (line.includes("spider")) {
                        this.details = "killing spiders"
                    }
                    if (line.includes("coal") || line.includes("graveyard")) {
                        this.details = "killing zombies"
                    }
                    if (line.includes("end") || line.includes("drag") || line.includes("void")) {
                        this.details = "killing endermen"
                    }
                    if (line.includes("your")) {
                        this.details = "afking / building island"
                    }
                    if (line.includes("gold")) {
                        this.details = "speaking to rusty"
                    }
                    if (line.includes("cata")) {
                        this.details = "carrying in dungeons"
                    }
                    if (line.includes("f7")) {
                        this.details = "killing necron"
                    }
                    if (line.includes("mines")) {
                        this.details = "mining mithril?!?!??!"
                    }
                    if (line.includes("crystal")) {
                        this.details = "mining gemstones?!?!??!"
                    }
                    if (line.includes("deep")) {
                        this.details = "deep caverns!"
                    }
                    if (line.includes("gunpowder")) {
                        this.details = "in gunpowder mines? (why)"
                    }
                    if (line.includes("mist")) {
                        this.details = "killing ghosts"
                    }
                    if (line.includes("purse")) {
                        this.details = "playing skyblock"
                    }
                    let playername = Player.getName().replace("CatgirlScale", "pee").replace("OhTeddy", "beamed bozo").replace("Unif", "IM A RATTER")
                    this.state = `ign: ${playername}`
                })

            this.bigImage = ""
            this.bigImageText = "hi"

            if (Config.discordrpcpic == 0) this.bigImage = "rat"
            else if (Config.discordrpcpic == 1) this.bigImage = "rat2"
            else if (Config.discordrpcpic == 2) this.bigImage = "rat3"
            else if (Config.discordrpcpic == 3) this.bigImage = "badlion"
            else if (Config.discordrpcpic == 4) this.bigImage = "apex"
            else if (Config.discordrpcpic == 5) this.bigImage = "valorant"
            else if (Config.discordrpcpic == 6) this.bigImage = "minecraft"
            else if (Config.discordrpcpic == 7) this.bigImage = "mushroom"
            else if (Config.discordrpcpic == 8) this.bigImage = "visualstudio"
            else if (Config.discordrpcpic == 9) this.bigImage = "dancingrat"
            this.update()
        })
    }
    reset() {
        DiscordRPC.discordClearPresence()
        this.state = null
        this.details = null
        this.bigImage = null
    }
    initialize() {
        const handler = new DiscordEventHandlers.Builder().build()
        DiscordRPC.discordInitialize("992168977532989492", handler, true)
    }
    update() {
        // ChatLib.chat("Updating!")
        let presence = new DiscordRichPresence.Builder(this.state)
        if (this.details) presence.setDetails(this.details)
        if (this.bigImage) presence.setBigImage(this.bigImage, this.bigImageText)
        DiscordRPC.discordUpdatePresence(presence.build())
    }

    setState(state) { this.state = state }
    setDetails(details) { this.details = details }
    setBigImage(image) { this.bigImage = image }
    setBigImageText(text) { this.bigImageText = text }
}
export default new Discord()
