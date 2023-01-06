import Config from "../../Config/Config"
import {prefix, mc, WalkForward, WalkBackward, WalkLeft, WalkRight, Jump, Sprint, Shift} from "../Utils";

// ill fix it requiring specific keys soon

let addyaw = Player.getPlayer().field_70177_z
let addpitch = Player.getPlayer().field_70125_A
let movexrn = Client.getMouseX().toFixed(1)
let moveyrn = Client.getMouseY().toFixed(1)
let followmouse = false
register("tick", () => {
    if (Config.invwalk) {
    new Thread(() => {
        if (Client.currentGui.get() !== null) {
            if (Keyboard.isKeyDown(Keyboard.KEY_W)) {        
                WalkForward.setState(true)
            }
            if (!Keyboard.isKeyDown(Keyboard.KEY_W)) {        
                WalkForward.setState(false)
            }
            if (Keyboard.isKeyDown(Keyboard.KEY_S)) {        
                WalkBackward.setState(true)
            }
            if (!Keyboard.isKeyDown(Keyboard.KEY_S)) {        
                WalkBackward.setState(false)
            }
            if (Keyboard.isKeyDown(Keyboard.KEY_A)) {        
                WalkLeft.setState(true)
            }
            if (!Keyboard.isKeyDown(Keyboard.KEY_A)) {        
                WalkLeft.setState(false)
            }
            if (Keyboard.isKeyDown(Keyboard.KEY_D)) {        
                WalkRight.setState(true)
            }
            if (!Keyboard.isKeyDown(Keyboard.KEY_D)) {        
                WalkRight.setState(false)
            }
            if (Keyboard.isKeyDown(Keyboard.KEY_SPACE)) {        
                Jump.setState(true)
            }
            if (!Keyboard.isKeyDown(Keyboard.KEY_SPACE)) {        
                Jump.setState(false)
            }
            if (Keyboard.isKeyDown(Keyboard.KEY_LSHIFT)) {        
                Sprint.setState(true)
            }
            if (!Keyboard.isKeyDown(Keyboard.KEY_LSHIFT)) {        
                Sprint.setState(false)
            }
            if (Keyboard.isKeyDown(Keyboard.KEY_CAPITAL)) {        
                Shift.setState(true)
            }
            if (!Keyboard.isKeyDown(Keyboard.KEY_CAPITAL)) {        
                Shift.setState(false)
            }
            if (followmouse) {
                Player.getPlayer().field_70177_z = addyaw + Client.getMouseX()-movexrn
                Player.getPlayer().field_70125_A = addpitch + Client.getMouseY()-moveyrn
            }
        }
    }).start()
}
});

register("clicked", (event, event2, event3, event4) => {
    if (event3 == 1) {
        if (event4 == true) {
            followmouse = true
            movexrn = Client.getMouseX().toFixed(1)
            moveyrn = Client.getMouseY().toFixed(1)
            addyaw = Player.getPlayer().field_70177_z
            addpitch = Player.getPlayer().field_70125_A
        }
        if (event4 == false) {
            followmouse = false
            movexrn = Client.getMouseX().toFixed(1)
            moveyrn = Client.getMouseY().toFixed(1)
            addyaw = Player.getPlayer().field_70177_z
            addpitch = Player.getPlayer().field_70125_A
        }
    }
});