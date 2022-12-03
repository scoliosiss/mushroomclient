import Config from "../../Config/Config"
import {prefix, mc, swaptoslot, EnumFacing, BlockPoss, Vec3, noscaffoldblock, scaffoldblocks, RightClick} from "../Utils";

const scaffoldtoggle = new KeyBind("Scaffold", Keyboard.KEY_NONE, "Mushroom");

register("step", () => {
    if (Config.scaffoldi) {
    new Thread(() => {
        if (Client.currentGui.get() == null) {
            let position = new BlockPoss(Player.getX(), Player.getY()-1, Player.getZ());
            let block = mc.field_71441_e.func_180495_p(position).func_177230_c();
            if (!noscaffoldblock.includes(block.getRegistryName())) {
                mc.field_71442_b.func_178890_a(Player.getPlayer(), World.getWorld(), mc.field_71439_g.field_71071_by.func_70448_g(), position, EnumFacing.func_176733_a(mc.field_71439_g.field_70177_z), new Vec3(0.0, 0.0, 0.0)); 
            }
        }
    }).start()
}
}).setFps(12)

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
