import Config from "../../Config/Config"
import { ArrayLists, BlockAir, BlockChest, BP, Jump, lookAt, mc, Sprint, WalkForward } from "../Utils";

// DOESNT WORK AS INTENDED RN ILL FIX IF SOMEONE WANTS ME TOO

let pathfindtoarray = new ArrayLists;

register("tick", () => {
    if (Config.parkormacro) {
        new Thread(() => {
            if (Client.currentGui.get() == null) { // make sure not in gui
                for (let x = Player.getX() - 10; x < Player.getX() + 10; x++) { // get block x
                    for (let y = Player.getY() - 10; y < Player.getY() + 10; y++) { // y
                        for (let z = Player.getZ() - 10; z < Player.getZ() + 10; z++) { // z
                            let position = new BP(x, y, z); // get positions in coordinates
                            let playercoords = new BP(Player.getX(), Player.getY()-1, Player.getZ())  
                            block = mc.field_71441_e.func_180495_p(position).func_177230_c(); // get block at position
                            if (mc.field_71439_g.func_70011_f(position.func_177958_n(), position.func_177956_o() - mc.field_71439_g.func_70047_e(), position.func_177952_p()) < 7) { /*make sure blocks within reach + not alr clicked*/
                            pathfindtoarray.add(playercoords)
                            if (!pathfindtoarray.contains(position)) {
                                if (!block.toString().includes("air")) { // checks if the block is air
                                    pathfindtoarray.add(position)
                                    ChatLib.chat(position)
                                    lookAt(x,y,z)
                                    Sprint.setState(true)
                                    WalkForward.setState(true)
                                }
                                block2 = mc.field_71441_e.func_180495_p(playercoords).func_177230_c(); // get block at position
                                if (block2.toString().includes("air")) {
                                    Jump.setState(true)
                                    Thread.sleep(1)
                                    Jump.setState(false)
                                }
                            }       
                        }    
                        }
                    }
                }
            }
        }).start()
    }
});