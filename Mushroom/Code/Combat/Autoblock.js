import {prefix, RightClick, LeftClick, mc, distanceToPlayer, holdright} from "../Utils";
import Config from "../../Config/Config"

register("step", () => {
    if (Config.autoblockpog) {
        if (Player.getHeldItem() !== null) {
            if (Player.getHeldItem().getName().includes("Sword")) {
                allplayer = World.getAllPlayers()
                for(let i = 0; i < allplayer.length; i++) {
                    if(distanceToPlayer(allplayer[i].getX(), allplayer[i].getY(), allplayer[i].getZ()) > 0.1) {
                        if(distanceToPlayer(allplayer[i].getX(), allplayer[i].getY(), allplayer[i].getZ()) < 2) {
                            holdright.setState(true)
                            LeftClick.invoke(mc)
                        }
                        else if(distanceToPlayer(allplayer[i].getX(), allplayer[i].getY(), allplayer[i].getZ()) < 3) {
                            holdright.setState(false)
                        }
                    }
                }
            }
        }
    }
}).setFps(8);