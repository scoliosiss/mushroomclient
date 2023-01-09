import { prefix } from "../Utils"


// more like freecam on hypixel
// works if no anticheat
// also doesnt flag on hypixel????
// i afked with it on in skyblock for an hour and no ban so maybe?

let flytoggle = false

register("command", () => {
    (flytoggle = !flytoggle)
    ? prefix + " >" + "&r&a FLY" 
    : prefix + " >" + "&r&c FLY"
    x = Player.getX()
    y = Player.getY()
    z = Player.getZ()
}).setName("fly")

register("packetReceived", () => {
    if (flytoggle) {
        if (Keyboard.isKeyDown(Keyboard.KEY_SPACE)) {        
            y = Player.getY() + 0.1
        }
        if (Keyboard.isKeyDown(Keyboard.KEY_LSHIFT)) {        
            y = Player.getY() - 0.1
        }
        if (Keyboard.isKeyDown(Keyboard.KEY_W)) {        
            x = x+0.1
        }
        if (Keyboard.isKeyDown(Keyboard.KEY_S)) {        
            x = x-0.1
        }
        if (Keyboard.isKeyDown(Keyboard.KEY_A)) {        
            z = z+0.1
        }
        if (Keyboard.isKeyDown(Keyboard.KEY_D)) {        
            z = z-0.1
        }
        Player.getPlayer().func_70107_b(x, y, z)
    }
})