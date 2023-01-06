import Config from "../../Config/Config"
import {distanceToPlayer, lookAt, WalkBackward, WalkLeft, WalkRight} from "../Utils";

let arrowspos = 0
// gaming
// please someone teach me serverside rotations T-T
register("step", () => {
    if (!Config.dodgearrowers) return;
    new Thread(() => {
        allEntity = World.getAllEntities()
        for(let i = 0; i < allEntity.length; i++) {
        if(allEntity[i].getClassName() == "EntityArrow") {
            if(distanceToPlayer(allEntity[i].getX(), allEntity[i].getY(), allEntity[i].getZ()) < 10) {
                if(distanceToPlayer(allEntity[i].getX(), allEntity[i].getY(), allEntity[i].getZ()) > 0.1) {
                    lookAt(allEntity[i].getX(), allEntity[i].getY(), allEntity[i].getZ())
                    WalkRight.setState(true)
                    Thread.sleep(500)
                    WalkRight.setState(false)
                }
                }
            }
        }
    }).start()
});

