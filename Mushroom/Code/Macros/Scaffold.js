import Config from "../../Config/Config"
import {prefix, mc, swaptoslot, EnumFacing, BlockPoss, Vec3, noscaffoldblock, scaffoldblocks, RightClick} from "../Utils";

const scaffoldtoggle = new KeyBind("Scaffold", Keyboard.KEY_NONE, "Mushroom");

const scaffolding = () => {
    new Thread(() => {
        if (Client.currentGui.get() == null) {
                        let position = new BlockPoss(Player.getX(), Player.getY()-1, Player.getZ());
                        let block = mc.field_71441_e.func_180495_p(position).func_177230_c();
                                if (!noscaffoldblock.includes(block.getRegistryName())) {
                                    for (let i = 0; i < 9; i++) {
                                        if (Player.getInventory().getStackInSlot(i) !== null && Player.getInventory().getStackInSlot(i).getName().includes("Wool") || Player.getInventory().getStackInSlot(i) !== null && Player.getInventory().getStackInSlot(i).getName().includes("Stone") || Player.getInventory().getStackInSlot(i) !== null && Player.getInventory().getStackInSlot(i).getName().includes("Plank")) {
                                            Client.sendPacket(new swaptoslot(i));
                                            mc.field_71442_b.func_178890_a(Player.getPlayer(), World.getWorld(), mc.field_71439_g.field_71071_by.func_70448_g(), position, EnumFacing.func_176733_a(mc.field_71439_g.field_70177_z), new Vec3(0.0, 0.0, 0.0));
                                            Client.sendPacket(new swaptoslot(Player.getInventory().getInventory().field_70461_c));    
                    }
                }
            }
        }
    }).start()
}

register("tick", () => {
    if (scaffoldtoggle.isPressed()) {
        ChatLib.chat(`${
            (Config.scaffoldi = !Config.scaffoldi) 
            ? prefix + " >" + "&r&a Scaffold" 
            : prefix + " >" + "&r&c Scaffold"
        }`
        );
    }
});

register("step", () => {
    if (Config.scaffoldi) {
        scaffolding();
    }
}).setFps(12)
