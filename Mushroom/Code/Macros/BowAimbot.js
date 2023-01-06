import Config from "../../Config/Config"
import { distanceToPlayer, holdright, lookAt, mc, RightClick } from "../Utils";

let aimnow = false
let funnyx = 0
let funnyy = 0
let funnyz = 0
let newdisx = 0
//let newdisy = 0
let newdisz = 0
let extray = 0
// gaming
register("clicked", (event, event2, event3, event4) => {
    new Thread(() => {
        if (!Config.bowaimbo) return;
        if (Player.getHeldItem() == null) return;
        if (Player.getHeldItem().getID() == 261) {
            allEntity = World.getAllEntities()
            for(let i = 0; i < allEntity.length; i++) {
                if(allEntity[i].getClassName() == "EntityCreeper") {
                    if(distanceToPlayer(allEntity[i].getX(), allEntity[i].getY(), allEntity[i].getZ()) < 75) {
                        if(distanceToPlayer(allEntity[i].getX(), allEntity[i].getY(), allEntity[i].getZ()) > 0.1) {
                            if (event3 == 1) {
                                if (event4) {
                                    holdright.setState(true)
                                }
                                if (!event4) {
                                    holdright.setState(true)
                                    lookingatrightnow = Player.getPlayer().field_70177_z
                                    lookingatpitch = Player.getPlayer().field_70125_A
                                    if (distanceToPlayer(allEntity[i].getX(), allEntity[i].getY(), allEntity[i].getZ()) > 25) {
                                        extray = distanceToPlayer(allEntity[i].getX(), allEntity[i].getY(), allEntity[i].getZ()) / 20
                                        if (distanceToPlayer(allEntity[i].getX(), allEntity[i].getY(), allEntity[i].getZ()) > 50) {
                                            extray = distanceToPlayer(allEntity[i].getX(), allEntity[i].getY(), allEntity[i].getZ()) / 10
                                            if (distanceToPlayer(allEntity[i].getX(), allEntity[i].getY(), allEntity[i].getZ()) > 75) {
                                                extray = distanceToPlayer(allEntity[i].getX(), allEntity[i].getY(), allEntity[i].getZ()) / 5
                                            }
                                        }
                                    }
                                    else if (distanceToPlayer(allEntity[i].getX(), allEntity[i].getY(), allEntity[i].getZ()) < 25) {
                                        extray = 0
                                    }
                                    funnyx = allEntity[i].getX()
                                    funnyy = allEntity[i].getY() + extray
                                    funnyz = allEntity[i].getZ()
                                    lookAt(funnyx, funnyy, funnyz)
                                    Thread.sleep(1)
                                    holdright.setState(false)
                                    Thread.sleep(100)
                                    Player.getPlayer().field_70177_z = lookingatrightnow
                                    Player.getPlayer().field_70125_A = lookingatpitch
                                    /*
                                    if (Player.getX().toString().includes("-")) {
                                        funnyx = allEntity[i].getX() - newdisx
                                    }
                                    else {
                                        funnyx = allEntity[i].getX() + newdisx
                                    }
                                    if (Player.getZ().toString().includes("-")) {
                                        funnyz = allEntity[i].getX() - newdisz
                                    }
                                    else {
                                        funnyz = allEntity[i].getX() + newdisz
                                    }
                                        distoplax = allEntity[i].getX()
                                        distoplay = allEntity[i].getY()
                                        distoplaz = allEntity[i].getZ()
                                        Thread.sleep(100)
                                        distoplayx = allEntity[i].getX()
                                        distoplayy = allEntity[i].getY()
                                        distoplayz = allEntity[i].getZ()
                                        peestain = Player.getX() - allEntity[i].getX()
                                        peestainz = Player.getZ() - allEntity[i].getZ()
                                        newdisx = (((distoplax - distoplayx) * 10) / (peestain * 10))
                                    //    newdisy = (distoplay - distoplayy)
                                        newdisz = (((distoplaz - distoplayz) * 10) / (peestainz * 10))*/
                                }
                            }
                        }
                    }
                }
            }
        }
    }).start()
});
/*
register("clicked", (event, event2, event3, event4) => {
    if (Config.bowaimbo) {
        if (event3 == 1) {
            if (event4) {
                aimnow = true
            }
            if (!event4) {
                aimnow = false
            }
        }
    }
});*/