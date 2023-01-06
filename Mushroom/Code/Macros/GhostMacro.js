import { distanceToPlayer, LeftClick, lookAt, mc, prefix, RightClick, Shift, Sprint, swaptoslot, WalkForward } from "../Utils"
import Config from "../../Config/Config"
import RenderLib from "../../../RenderLib/index"
const esppog = (x, y, z, height) => {RenderLib.drawInnerEspBox(x, y-height, z, 1, height, 50,250,200, 1, true)}

// not sure if this works, it might idk, also tell me good ideas for failsafes

runcommand = false
register("tick", () => {
    new Thread(() => {
    if (!Config.ghostmacrotoggle) return;
    if (runcommand) return;
    players = World.getAllPlayers()
    creeper = World.getAllEntities()
    for(let i = 0; i < creeper.length; i++) {
        let scoreboardLines = Scoreboard.getLines().map(line => line.getName().removeFormatting().toLowerCase());
        scoreboardLines.forEach(line => {
            if (line.includes("the mist")) {
                if(creeper[i].getClassName() == "EntityCreeper") {
                    if(distanceToPlayer(creeper[i].getX(), creeper[i].getY(), creeper[i].getZ()) < 20) {
                        lookAt(creeper[i].getX(), creeper[i].getY(), creeper[i].getZ())
                        Sprint.setState(true)
                        WalkForward.setState(true)
                    }
                    for(let l = 0; l < players.length; l++) {
                        if(distanceToPlayer(players[l].getX(), players[l].getY(), players[l].getZ()) < 5) {
                            if(distanceToPlayer(players[l].getX(), players[l].getY(), players[l].getZ()) > 0.1) {
                                if (!runcommand) {
                                    runcommand = true
                                        for(let s = 0; s < players.length; s++) {
                                            ChatLib.chat(prefix + " > &4Failsafe Activating")
                                            if (Player.getInventory().getStackInSlot(s).getName().includes("Aspect of the ")) {
                                                Client.sendPacket(new swaptoslot(s));
                                                Thread.sleep(3000)
                                                lookAt(161, 92, 38)
                                                Thread.sleep(300)
                                                Shift.setState(true)
                                                Thread.sleep(300)
                                                RightClick.invoke(mc)
                                                Shift.setState(false)
                                                Thread.sleep(1000)
                                                ChatLib.say("bruh")
                                                Thread.sleep(500)
                                                ChatLib.say("/is")
                                                Thread.sleep(1000)
                                                runcommand = false
                                            }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        })
    }
}).start()
})

register("tick", () => {
    if (Config.ghostmacrotoggle) {
    creeper = World.getAllEntities()
    for(let i = 0; i < creeper.length; i++) {
        if(creeper[i].getClassName() == "EntityCreeper") {
            if(distanceToPlayer(creeper[i].getX(), creeper[i].getY(), creeper[i].getZ()) < 3) {
                lookAt(creeper[i].getX(), creeper[i].getY(), creeper[i].getZ())
                LeftClick.invoke(mc)
                WalkForward.setState(false)
            }
        }
        }
    }
})

register("renderEntity", (entity) => {
    if (!Config.ghostmacrotoggle) return;
    if (entity.getClassName() == "EntityCreeper") {
        esppog(entity.getX(), entity.getY(), entity.getZ(), -1.8)
    }
})