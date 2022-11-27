import Config from "../../Config/Config"
import {prefix, mc, Vec3, EnumFacing, LeftClick, BP, radians_to_degrees, distanceToPlayer, lookAt} from "../Utils";
import { hitthroughwalls } from "./NoWalls";
const killaurakey = new KeyBind("Chest aura", Keyboard.KEY_NONE, "Mushroom");

// fixed by ilr again lets go
register("step", () => {
    if (!Config.killaura) return;
    let allEntity = World.getAllPlayers()
    for(let i = 0; i < allEntity.length; i++) {
        if(distanceToPlayer(allEntity[i].getX(), allEntity[i].getY(), allEntity[i].getZ()) < 5) {
            if(distanceToPlayer(allEntity[i].getX(), allEntity[i].getY(), allEntity[i].getZ()) > 0.1) {
                lookAt(allEntity[i].getX(), allEntity[i].getY(), allEntity[i].getZ())
                if(distanceToPlayer(allEntity[i].getX(), allEntity[i].getY(), allEntity[i].getZ()) < 5) {
                    hitthroughwalls()
                    LeftClick.invoke(mc)
                }
            }
        }
    }
}).setFps(12)

register("tick", () => {
    if (killaurakey.isPressed()) {
        ChatLib.chat(`${
            (Config.killaura = !Config.killaura) 
            ? prefix + " >" + "&r&a Killaura" 
            : prefix + " >" + "&r&c Killaura"
        }`
        );
    }
});
