import request from "requestV2/index"
import {prefix} from "../Utils";
import Config from "../../Config/Config"

let checked = false
register("step", () => {
    if (checked) return
    if (!Config.ComingSoon) return;
    checked = true
    request("https://raw.githubusercontent.com/scoliosiss/mushroomclient/main/MushroomclientAPI.json").then(stuff => {
        stuff = JSON.parse(stuff.replace(new RegExp("    ", "g"), ""))
        let metadata = JSON.parse(FileLib.read("Mushroom", "metadata.json"))

        if (metadata.version !== stuff.latestVersion) {
            new Message(`&9&m${ChatLib.getChatBreak(" ")}\n`,
            new TextComponent(`&aA new version of ${prefix}&a is available! (&c${stuff.latestVersion}&a) Click to go to the Github page! `).setClick(
                "open_url",
                "https://github.com/scoliosiss/mushroomclient"
            ).setHover(
                "show_text",
                "&aClick to open\n&7https://github.com/scoliosiss/mushroomclient"
            ),
            new TextComponent(`&7(Changelog)`).setHover(
                "show_text",
                `&6&nChangeLog for ${stuff.latestVersion}:\n &7- ` + stuff.changelog.join("\n &7- ")
            ),
            `\n&9&m${ChatLib.getChatBreak(" ")}`).chat()
        }
    }).catch(error => {
        ChatLib.chat(`${prefix} &cError whilst checking for update: ${error}`)
    })
})

register("command", translatepls => { translatepls;
    request("https://translate.google.co.uk/?sl=en&tl=es&text=" + translatepls).then(stuff => {
        stuff = JSON.parse(stuff.replace(new RegExp("    ", "g"), ""))
        ChatLib.chat(translatepls)
    })
}).setName("translatecheck");