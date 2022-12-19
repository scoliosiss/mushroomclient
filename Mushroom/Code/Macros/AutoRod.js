import Config from "../../Config/Config"
import { distanceToPlayer, lookAt, mc, RightClick, swaptoslot } from "../Utils";
let rodnow = true

register("tick", () => {
    if (!Config.rodaimbottoggle) return;
    new Thread(() => {
    if (!rodnow) return;
    allEntity = World.getAllPlayers()
    for(let i = 0; i < allEntity.length; i++) {
        if(distanceToPlayer(allEntity[i].getX(), allEntity[i].getY(), allEntity[i].getZ()) < 5) {
            if(distanceToPlayer(allEntity[i].getX(), allEntity[i].getY(), allEntity[i].getZ()) > 4) {
                rodnow = false
                for (let l = 0; l < 9; l++) {
                    if (Player.getInventory().getStackInSlot(l).getName().includes("Fishing")) {
                        lookAt(allEntity[i].getX(), allEntity[i].getY(), allEntity[i].getZ())
                        Client.sendPacket(new swaptoslot(l));
                        Thread.sleep(100)
                        RightClick.invoke(mc)
                        Thread.sleep(200)
                        Client.sendPacket(new swaptoslot(Player.getInventory().getInventory().field_70461_c));
                    }
                }
            }
        }
    }
}).start()
})

register("step", () => {
    if (!rodnow) {
        rodnow = true
    }
}).setDelay(1)