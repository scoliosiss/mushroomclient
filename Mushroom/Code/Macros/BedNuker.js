import { ArrayLists, BlockBed, BP, C07PacketPlayerDigging, EnumFacing, LeftClick, lookAt, mc } from "../Utils";
import Config from "../../Config/Config"

let alreadyClicked = new ArrayLists;

register("step", () => {
    if (Config.bednuker) {
    new Thread(() => {
        if (Client.currentGui.get() == null) { // make sure not in gui
            for (let x = Player.getX() - 10; x < Player.getX() + 10; x++) { // get block x
                for (let y = Player.getY() - 10; y < Player.getY() + 10; y++) { // y
                    for (let z = Player.getZ() - 10; z < Player.getZ() + 10; z++) { // z
                        let position = new BP(x, y, z); // get positions in coordinates
                        let block = mc.field_71441_e.func_180495_p(position).func_177230_c(); // get block at position
                        if (!alreadyClicked.contains(position) && mc.field_71439_g.func_70011_f(position.func_177958_n(), position.func_177956_o() - mc.field_71439_g.func_70047_e(), position.func_177952_p()) < 5) { /*make sure blocks within reach + not alr clicked*/
                            if (block instanceof BlockBed) { // checks if the block is a chest
                                //ChatLib.chat("cum")
                        //        lookAt(x-0.5,y-1.8,z+0.5)
                                Client.sendPacket(new C07PacketPlayerDigging(C07PacketPlayerDigging.Action.START_DESTROY_BLOCK, position, EnumFacing.func_176733_a(Client.getMinecraft().field_71439_g.field_70177_z)));
                                Thread.sleep(1)
                                Client.sendPacket(new C07PacketPlayerDigging(C07PacketPlayerDigging.Action.STOP_DESTROY_BLOCK, position, EnumFacing.func_176733_a(Client.getMinecraft().field_71439_g.field_70177_z)));
                                alreadyClicked.add(position); // adds coordinate to arraylist to check if the coords alr clicked
                            }
                        }           
                    }
                }
            }
        }
    }).start()
}
}).setDelay(1)