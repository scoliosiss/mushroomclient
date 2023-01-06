import Config from "../../Config/Config"
import {prefix, mc, Vec3, EnumFacing, LeftClick, BP, radians_to_degrees, distanceToPlayer, lookAt, holdright, WalkRight, WalkLeft, Sprint} from "../Utils";

let inrange = true
// not gaming, kinda odd to use
register("tick", () => {
    if (!Config.autostrafer) return;
    new Thread(() => {
        allEntity = World.getAllPlayers()
        for(let i = 0; i < allEntity.length; i++) {
            if(distanceToPlayer(allEntity[i].getX(), allEntity[i].getY(), allEntity[i].getZ()) < 5) {
                if(distanceToPlayer(allEntity[i].getX(), allEntity[i].getY(), allEntity[i].getZ()) > 0.1) { 
                    inrange = true
                    randomnum = Math.random()
                    if (randomnum < 0.5) {
                        Sprint.setState(true)
                        WalkRight.setState(true)
                        WalkLeft.setState(false)
                    }
                    if (randomnum > 0.5) {
                        Sprint.setState(true)
                        WalkLeft.setState(true)
                        WalkRight.setState(false)
                    }
                    Thread.sleep(500)
                }
            }
            else {
                if (inrange) {
                    inrange = false
                    WalkLeft.setState(false)
                    WalkRight.setState(false)
                }
            }
        }
    }).start()
});