import { distanceToPlayer, LeftClick, lookAt, mc, WalkForward } from "../Utils"
import Config from "../../Config/Config"
import RenderLib from "../../../RenderLib/index"
const esppog = (x, y, z, height) => {RenderLib.drawInnerEspBox(x, y-height, z, 1, height, 50,50,50, 1, true)}


register("step", () => {
    if (!Config.ghostmacrotoggle) return;
    creeper = World.getAllEntities()
    for(let i = 0; i < creeper.length; i++) {
        if(creeper[i].getClassName() == "EntityCreeper") {
            if(distanceToPlayer(creeper[i].getX(), creeper[i].getY(), creeper[i].getZ()) < 50) {
                lookAt(creeper[i].getX(), creeper[i].getY(), creeper[i].getZ())
                WalkForward.setState(true)
                if(distanceToPlayer(creeper[i].getX(), creeper[i].getY(), creeper[i].getZ()) < 3) {
                    LeftClick.invoke(mc)
                    if(distanceToPlayer(creeper[i].getX(), creeper[i].getY(), creeper[i].getZ()) < 2) {
                        WalkForward.setState(false)
                    }
                }
            }
        }
    }
}).setFps(8)

register("renderEntity", (entity) => {
    if (entity.getClassName() == "EntityCreeper") {
        esppog(entity.getX(), entity.getY(), entity.getZ(), -1.8)
    }
})