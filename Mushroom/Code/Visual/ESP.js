import Config from "../../Config/Config"
import {prefix} from "../Utils"
import RenderLib from "../../../RenderLib/index"
const espkey = new KeyBind("ESP", Keyboard.KEY_NONE, "Mushroom");
const EntityPlayer = Java.type("net.minecraft.entity.player.EntityPlayer")
const itemesp = (x, y, z, height) => {RenderLib.drawEspBox(x, y-height, z, 0.5, height, Config.Armorstandespcolor.getRed()/255, Config.Armorstandespcolor.getGreen()/255, Config.Armorstandespcolor.getBlue()/255, 1, true)}
const espBox = (x, y, z, height) => {RenderLib.drawEspBox(x, y-height, z, 1, height, Config.Armorstandespcolor.getRed()/255, Config.Armorstandespcolor.getGreen()/255, Config.Armorstandespcolor.getBlue()/255, 1, true)}
const esppog = (x, y, z, height) => {RenderLib.drawInnerEspBox(x, y-height, z, 1, height, Config.Armorstandespcolor.getRed()/255, Config.Armorstandespcolor.getGreen()/255, Config.Armorstandespcolor.getBlue()/255, 1, true)}

// fun
register("renderEntity", (entity) => {
    if (Config.PlayerESP) {
        if (entity.getEntity() instanceof EntityPlayer) {
            if (Config.espboxtype == 1) {
                espBox(entity.getX(), entity.getY(), entity.getZ(), -2)
            }
            if (Config.espboxtype == 2) {
                esppog(entity.getX(), entity.getY(), entity.getZ(), -2)
            }
        }
    }
    if (Config.ItemESP) {
        if (entity.getClassName() == "EntityItem") {
            if (Config.blockesptoggle) {
            itemesp(entity.getX(), entity.getY() + 0.3, entity.getZ(), -0.5)
            }
        }
    }
    if (Config.Armorstandesp) {
        espBox(entity.getX(), entity.getY(), entity.getZ(), -2)
    }
})

register("tick", () => {
    if (espkey.isPressed()) {
        ChatLib.chat(`${
            (Config.Armorstandesp = !Config.Armorstandesp) 
            ? prefix + " >" + "&r&a ESP" 
            : prefix + " >" + "&r&c ESP"
        }`
        );
    }
});