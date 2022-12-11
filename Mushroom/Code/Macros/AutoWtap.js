import { distanceToPlayer, WalkForward } from "../Utils"
import Config from "../../Config/Config"

register("step", () => {
    if (!Config.autowtaptoggle) return;
    allplayer = World.getAllPlayers()
    for(let i = 0; i < allplayer.length; i++) {
        if(distanceToPlayer(allplayer[i].getX(), allplayer[i].getY(), allplayer[i].getZ()) > 0.1) {
            if (distanceToPlayer(allplayer[i].getX(), allplayer[i].getY(), allplayer[i].getZ()) < 2.9) {
                WalkForward.setState(false)
            }
            else if(distanceToPlayer(allplayer[i].getX(), allplayer[i].getY(), allplayer[i].getZ()) < 5) {
                WalkForward.setState(true)      
            }
        }
    }
})