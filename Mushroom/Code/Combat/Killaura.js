import Config from "../../Config/Config"
import {prefix, mc, Vec3, EnumFacing, LeftClick, BP, radians_to_degrees, distanceToPlayer, lookAt} from "../Utils";
import { hitthroughwalls } from "./NoWalls";
const killaurakey = new KeyBind("Chest aura", Keyboard.KEY_NONE, "Mushroom");
const holdright = new KeyBind(mc.field_71474_y.field_74313_G);

// gaming
register("step", () => {
    if (!Config.killaura) return;
    allEntity = World.getAllPlayers()
    for(let i = 0; i < allEntity.length; i++) {
    if (Config.killauramobs) {
        allEntity = World.getAllEntities()
        if(allEntity[i].getClassName() === "EntityXPOrb" || allEntity[i].getClassName() === "EntitySnowball" || allEntity[i].getClassName() === "EntityItemFrame" || allEntity[i].getClassName() === "EntityEgg" || allEntity[i].getClassName() === "EntityItem" || allEntity[i].getClassName() === "EntityArmorStand") return;
    }
        if(distanceToPlayer(allEntity[i].getX(), allEntity[i].getY(), allEntity[i].getZ()) < 5) {
            if(distanceToPlayer(allEntity[i].getX(), allEntity[i].getY(), allEntity[i].getZ()) > 0.1) {
                if (!Config.killauramobs) {
                    lookAt(allEntity[i].getX(), allEntity[i].getY(), allEntity[i].getZ())
                }
                if (Config.killauramobs) {
                    lookAt(allEntity[i].getX(), allEntity[i].getY()-1.5, allEntity[i].getZ())
                }
                if (Config.killaurathroughwalls) {
                    hitthroughwalls()
                }
                if (Config.killauraautoblock) {
                    if(distanceToPlayer(allEntity[i].getX(), allEntity[i].getY(), allEntity[i].getZ()) < 3) {
                        holdright.setState(true)
                    }
                    else {
                        holdright.setState(false)
                    }
                }
                LeftClick.invoke(mc)
            }
        }
    }
}).setFps(12)