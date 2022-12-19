import { distanceToPlayer, LeftClick, mc } from "../Utils"
import Config from "../../Config/Config"

register("tick", () => {
    if (!Config.triggerbottoggle) return;
    allplayer = World.getAllPlayers()
    for(let i = 0; i < allplayer.length; i++) {
        if(distanceToPlayer(allplayer[i].getX(), allplayer[i].getY(), allplayer[i].getZ()) > 0.1) {
            if (distanceToPlayer(allplayer[i].getX(), allplayer[i].getY(), allplayer[i].getZ()) < 5) {
                let lookingAt = Player.lookingAt(); 
                if (lookingAt.getClass() == Entity) {
                    LeftClick.invoke(mc)
                }
            }
        }
    }
});