import Config from "../../Config/Config"
import {prefix, mc, Vec3, EnumFacing, LeftClick, BP} from "../Utils";

const killaurakey = new KeyBind("Chest aura", Keyboard.KEY_NONE, "Mushroom");

// fixed by ilr again lets go
function distanceToPlayer(x,y,z) {
    let dX = Player.getX() - x
    let dZ = Player.getZ() - z
    let dY = Player.getY() - y
    let dis = Math.sqrt((dX * dX) + (dZ * dZ))
    let dis2 = Math.sqrt((dis * dis) + (dY * dY))
    return dis2
}

let hoekYaw
let hoekPitch
function lookAt(x, y, z) {
    let PlayerAngleYaw = Player.getPlayer().field_70177_z
    let AngleYaw
    PlayerAngleYaw %= 360
    let dX = Player.getX() - x + 0.00001
    let dZ = Player.getZ() - z + 0.00001
    let dY = Player.getY() - y + 0.00001
    let dis = Math.sqrt((dX * dX) + (dZ * dZ))
    if(dX < 0.0 && dZ < 0.0) {
        AngleYaw = radians_to_degrees(Math.atan(dZ/dX)) + 180
    } else if(dZ < 0.0 && dX > 0.0) {
        AngleYaw = radians_to_degrees(Math.atan(dZ/dX)) + 360
    } else if(dZ > 0.0 && dX < 0.0) {
        AngleYaw = radians_to_degrees(Math.atan(dZ/dX)) + 180
    } else if(dZ > 0.0 && dX > 0.0){
        AngleYaw = radians_to_degrees(Math.atan(dZ/dX))
    }
    hoekYaw = AngleYaw - PlayerAngleYaw + 90
    Player.getPlayer().field_70177_z += hoekYaw 
    hoekPitch = radians_to_degrees(Math.atan(dY/dis)) - Player.getPlayer().field_70125_A
    Player.getPlayer().field_70125_A += hoekPitch 
}

//field_73088_d
function radians_to_degrees(radians) {
    var pi = Math.PI;
    return radians * (180/pi);
  }

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

register("step", () => {
    if (!Config.killaura) return;
    let allEntity = World.getAllPlayers()
    for(let i = 0; i < allEntity.length; i++) {
        if(distanceToPlayer(allEntity[i].getX(), allEntity[i].getY(), allEntity[i].getZ()) < 5) {
            if(distanceToPlayer(allEntity[i].getX(), allEntity[i].getY(), allEntity[i].getZ()) > 0.1) {
                lookAt(allEntity[i].getX(), allEntity[i].getY(), allEntity[i].getZ())
                if(distanceToPlayer(allEntity[i].getX(), allEntity[i].getY(), allEntity[i].getZ()) < 5) {
                    let lookingAt = Player.lookingAt();
                    if (lookingAt.getClass() === Block) {
                    World.getWorld().func_175698_g(new BP(lookingAt.getX(), lookingAt.getY(), lookingAt.getZ())); 
                    }  
                    LeftClick.invoke(mc)
                }
            }
        }
    }
}).setFps(12)

register("command", () => {
    ChatLib.chat(`${
        (Config.killaura = !Config.killaura) 
        ? prefix + " >" + "&r&a Killaura" 
        : prefix + " >" + "&r&c Killaura"
    }`
    );
}).setName("ka")
