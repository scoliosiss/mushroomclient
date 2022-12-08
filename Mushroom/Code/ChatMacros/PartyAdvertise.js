import Config from "../../Config/Config"
import { distanceToPlayer, holdright, LeftClick, lookAt, mc, prefix, RightClick, stripRank, WalkForward } from "../Utils";

let timetospam = false
let timetospam2 = false
let sayed = false
let timercountdown = Date.now()
let time = ((timercountdown - Date.now()) / 1000 + Config.failsafetim).toFixed(1)

register("command", () => {
    ChatLib.chat(`${
        (timetospam = !timetospam) 
        ? prefix + " >" + "&r&a Party Advertise" 
        : prefix + " >" + "&r&c Party Advertise"
    }`
    );
    ChatLib.say(`/warp ${Config.islandto}`)
}).setName("partyadtime")
// -11, 70, -70
register("step", (mesa) => {
    new Thread(() => {
        if (timetospam) {
            time = ((timercountdown - Date.now()) / 1000 + Config.failsafetim).toFixed(1)
            for(let l = 0; l < allEntity.length; l++) {
                if(allEntity[l].toString().includes("Hub Selector")) {
                    if (timetospam2) {
                        timetospam2 = false
                        if (Config.chatspamtype == 0) {
                            lookAt(allEntity[l].getX(), allEntity[l].getY(), allEntity[l].getZ())
                        }
                        if (Config.chatspamtype == 1) {
                            let scoreboardInfoData = Scoreboard.getLines()
                            let scoreboardInfo = scoreboardInfoData.join()             
                            if (scoreboardInfo.includes("Village")) {
                                lookAt(allEntity[l].getX(), allEntity[l].getY(), allEntity[l].getZ());
                                WalkForward.setState(true)
                                Thread.sleep(1500)
                                ChatLib.say(Config.publicspam)
                            }
                            if (!scoreboardInfo.includes("Village")) {
                                Thread.sleep(500);   
                                lookAt(-39, 119, 11);
                                WalkForward.setState(true)
                                ChatLib.say(Config.publicspam)
                            }
                        }
                    } 
                    if (time <= 2) {
                        if (Client.currentGui.get() == null) {
                            let inv = Player.getOpenedInventory()
                            inv.click(10, false, "LEFT"); 
                        }
                    }
                    if (time <= 0) {
                        ChatLib.chat(prefix + " > &cFailsafe activating")
                        RightClick.invoke(mc)
                        timercountdown = Date.now()
                        Thread.sleep(2000)
                        ChatLib.say("/warp " + Config.islandto)
                    }
                }
            }
        }
    }).start()
}).setFps(1)

register("chat", (players) => {
    if (timetospam) {
    new Thread(() => {
        Thread.sleep(1000)
        ChatLib.say("/play sb")
    }).start();
}
}).setChatCriteria("disconnect.spam")

register("chat", (players) => {
    if (timetospam) {
        if (sayed) return; // grammar
        new Thread(() => {
            Thread.sleep(200)
            ChatLib.say(Config.publicspam + " /////////////////////")
            sayed = true
        }).start();
    }
}).setChatCriteria("You cannot say the same message twice!")

register("chat", (mesa) => {
    let mes = ChatLib.getChatMessage(mesa);
    if (mes.includes("Warping") || mes.includes("Sending")) {
        timetospam2 = true
        timercountdown = Date.now()
    }
});

register("chat", (startofmessage, player, restofmessage) => {
    if (timetospam) {
    if (Config.chatspamtype == 1) {
    let joinplayer = stripRank(player)
    ChatLib.say("/p join " + joinplayer)
    }
}
}).setChatCriteria("-${startofmessage}-${player} has invited you to join their party!${restofmessage}")

register("chat", (players) => {
    if (timetospam) {
    if (Config.chatspamtype == 1) {
    new Thread(() => {
        Thread.sleep(500)
        ChatLib.say("/pc " + Config.cspammessage)
        Thread.sleep(500)
        ChatLib.say("/p leave")
    }).start();
}
}
}).setChatCriteria("You have joined ${players} party!")

register("tick", () => {
    new Thread(() => {
        if (timetospam) {
            if (Client.currentGui.get() == null) {
            allEntity = World.getAllEntities()
            for(let l = 0; l < allEntity.length; l++) {
                if(allEntity[l].toString().includes("Hub Selector")) {
                    if(distanceToPlayer(allEntity[l].getX(), allEntity[l].getY(), allEntity[l].getZ()) < 3) {
                        lookAt(allEntity[l].getX(), allEntity[l].getY(), allEntity[l].getZ())
                        WalkForward.setState(false)
                        RightClick.invoke(mc)
                    }
                    }
                }
            }
            else {
                let inv = Player.getOpenedInventory()
                for (let i = 0; i < 54; i++) {
                    if (inv.getName().includes("Hub")) {
                        let item = inv.getStackInSlot(i);
                        if (item.getDamage() == 14 || item.getStackSize() == 28) {
                            if (item.getStackSize() == 7 || item.getStackSize() == 14 || item.getStackSize() == 21) {
                                i = i+2
                            }
                            if (item.getStackSize() == 28) {
                                inv.click(10, false, "LEFT");
                            }
                            else {
                                i = i+1
                            }
                            inv.click(i, false, "LEFT");
                            sayed = false
                        }
                    }
                }
            }    
        }
    }).start()
});