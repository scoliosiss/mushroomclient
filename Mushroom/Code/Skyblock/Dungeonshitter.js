import request from "requestV2/index"
import Config from "../../Config/Config"
import { prefix } from "../Utils"

register("chat", (shitter, classlevel) => {
    request("https://raw.githubusercontent.com/scoliosiss/mushroomclient/main/dungeonshitters.json").then(stuff => {
        request(`https://api.mojang.com/users/profiles/minecraft/${shitter}`).then(function(stuff2) {
            stuff = JSON.parse(stuff)
            stuff2 = JSON.parse(stuff2.replace(new RegExp("    ", "g"), ""))
            playeruuid = stuff2.id
            if (Object.keys(stuff).includes(stuff2.id)) {
                if (Config.shitterwarning) {
                    new Message(`&9&m${ChatLib.getChatBreak("-")}\n`,
                    new TextComponent(`&9Shitter &3list &b> &a&l${shitter} &2is a shitter because&f&l: ${stuff[playeruuid]["reason"]}`),
                    new TextComponent(`\n&cClick here to kick &4${shitter}&c!`).setClick(
                        "run_command",
                        `/p kick ${shitter}`
                    ).setHover(
                        "show_text",
                        `&aClick to kick this shitter\n&7/p kick ${shitter}`
                    ),
                    `\n&9&m${ChatLib.getChatBreak("-")}`).chat()
                }
                else if (Config.kickshitter) {
                    ChatLib.chat(ChatLib.getChatBreak("&9-"));
                    ChatLib.chat(`&9Shitter &3list &b> &a&l${shitter} &2is a shitter because&f&l: ${stuff[playeruuid]["reason"]}`)
                    ChatLib.command(`p kick ${shitter}`)
                    ChatLib.chat("&4shitter down (rip bozo)");
                    ChatLib.chat(ChatLib.getChatBreak("&9-"));
                }
            }
        })
    }).catch(error => {
        ChatLib.chat(`${prefix} &cError whilst checking for shitter: ${error}`)
    })
}).setCriteria("Dungeon Finder > ${shitter} joined the dungeon group! (${classlevel})")

// i didnt make stuff / stuff2 consts so i just repeated them (most compact code)

register("command", shitman => {shitman;
    request("https://raw.githubusercontent.com/scoliosiss/mushroomclient/main/dungeonshitters.json").then(stuff => {
        request(`https://api.mojang.com/users/profiles/minecraft/${shitman}`).then(function(stuff2) {
            stuff = JSON.parse(stuff)
            stuff2 = JSON.parse(stuff2)
            playeruuid = stuff2.id
            if (Object.keys(stuff).includes(stuff2.id)) {
                ChatLib.chat(`&9Shitter &3list &b> &a&l${shitman} &2is a shitter because&f&l: ${stuff[playeruuid]["reason"]}`)
            }
            else {
                ChatLib.chat(`&9Shitter &3list &b> &a${shitman} &2is &lnot &r&2a shitter! (yet)`)
            }
        })
    })
}).setName("shitcheck")

let checkforshitters = false

// pro code ik!!!!!!!
register("chat", () => {
    ChatLib.say("/pl")
    checkforshitters = true
}).setCriteria("Dungeon Finder > " + Player.getName() + " joined the dungeon group! (${classleve})")

register("chat", (names, restofmessage) => {
    if (!checkforshitters) return;
    names = names.split("●");
    for(let i in names) {
        names[i] = names[i].trim().split(" ")[1];
        if(names[i]==undefined) return;
        request(`https://api.mojang.com/users/profiles/minecraft/${names[i]}`).then(function(stuff2) {
            request("https://raw.githubusercontent.com/scoliosiss/mushroomclient/main/dungeonshitters.json").then(stuff => {
                stuff = JSON.parse(stuff)
                stuff2 = JSON.parse(stuff2)
                playeruuid = stuff2.id
                if (Object.keys(stuff).includes(stuff2.id)) {
                    ChatLib.chat(`&9Shitter &3list &b> &a&l${stuff2.name} &2is a shitter because&f&l: ${stuff[playeruuid]["reason"]}`)
                    checkforshitters = false
                }
            })
        })
    }
}).setCriteria("Party Members: ${restofmessage}")