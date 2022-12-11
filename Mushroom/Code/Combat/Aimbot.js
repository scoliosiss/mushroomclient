import Config from "../../Config/Config"
import { distanceToPlayer, lookAt } from "../Utils";

register("tick", () => {
    if (!Config.aimbottoggle) return;
    allEntity = World.getAllPlayers()
    for(let i = 0; i < allEntity.length; i++) {
        if(distanceToPlayer(allEntity[i].getX(), allEntity[i].getY(), allEntity[i].getZ()) < 5) {
            if(distanceToPlayer(allEntity[i].getX(), allEntity[i].getY(), allEntity[i].getZ()) > 0.1) {
                lookAt(allEntity[i].getX(), allEntity[i].getY(), allEntity[i].getZ())
            }
        }
    }
});