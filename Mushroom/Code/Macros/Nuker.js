import Config from "../../Config/Config"
import { BP, C07PacketPlayerDigging, EnumFacing, mc } from "../Utils";

register("step", () => {
    if (Config.nukenoww) {
        new Thread(() => {
            if (Client.currentGui.get() == null) { // make sure not in gui
                for (let x = Player.getX() - 10; x < Player.getX() + 10; x++) { // get block x
                    for (let y = Player.getY() - 10; y < Player.getY() + 10; y++) { // y
                        for (let z = Player.getZ() - 10; z < Player.getZ() + 10; z++) { // z
                            let position = new BP(x, y, z); // get positions in coordinates
                            block = mc.field_71441_e.func_180495_p(position).func_177230_c(); // get block at position
                            if (mc.field_71439_g.func_70011_f(position.func_177958_n(), position.func_177956_o() - mc.field_71439_g.func_70047_e(), position.func_177952_p()) < 6) { /*make sure blocks within reach + not alr clicked*/
                                if (!block.toString().includes("air")) { // checks if the block is air   
                                Client.sendPacket(new C07PacketPlayerDigging(C07PacketPlayerDigging.Action.START_DESTROY_BLOCK, position, EnumFacing.func_176733_a(Client.getMinecraft().field_71439_g.field_70177_z)));
                                Thread.sleep(1)
                                Client.sendPacket(new C07PacketPlayerDigging(C07PacketPlayerDigging.Action.STOP_DESTROY_BLOCK, position, EnumFacing.func_176733_a(Client.getMinecraft().field_71439_g.field_70177_z)));
                                }    
                            }
                        }
                    }
                }
            }
        }).start()
    }
});