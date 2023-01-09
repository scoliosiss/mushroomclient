import Config from "../../Config/Config"
import { BlockClay, BP, C07PacketPlayerDigging, EnumFacing, Jump, lookAt, mc, WalkForward } from "../Utils";
import RenderLib from "../../../RenderLib/index"

// -153, 87, 234
// 
let eatingcum = true
let flyingandthere = false

register("step", () => {
    new Thread(() => {
        if (Config.holeinthywallmacro) {
            if (Player.getX().toFixed(0) + Player.getY().toFixed(0) + Player.getZ().toFixed(0) !== "-15387234" && eatingcum) {
                lookAt(-153, 87, 234);
                WalkForward.setState(true)
            }
            else {
                if (eatingcum) {
                    WalkForward.setState(false)
                    eatingcum = false
                    Jump.setState(true)
                    Thread.sleep(100)
                    Jump.setState(false)
                    Thread.sleep(100)
                    Jump.setState(true)
                    Thread.sleep(50)
                    Jump.setState(false)
                    flyingandthere = true
                }
            }
            if (flyingandthere) {
                for (let x = Player.getX() - 20; x < Player.getX() + 20; x++) { // get block x
                    for (let y = Player.getY() - 4; y < Player.getY() + 4; y++) { // y
                        for (let z = Player.getZ() - 10; z < Player.getZ() + 10; z++) { // z
                            let position = new BP(x, y, z);
                            let block = mc.field_71441_e.func_180495_p(position).func_177230_c();
                            if (block instanceof BlockClay) {
                                bx = x
                            }
                            if (block instanceof BlockAir) {
                            //    RenderLib.drawInnerEspBox(bx, y, z, 0.8, 0.8, 0, 1, 0.3, 0.4, true) // draws green box
                                ChatLib.chat(bx)
                            }
                        }
                    }
                }
            }
        }
    }).start()
});