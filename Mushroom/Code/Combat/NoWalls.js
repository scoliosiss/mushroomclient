// hit through walls!
// i think u can send an hit packets to the entity instead
import Config from "../../Config/Config";
import { BP, EnumFacing, LeftClick, mc, Vec3 } from "../Utils";

const hitthroughwalls = () => {
        new Thread(() => {
            let lookingAt = Player.lookingAt(); 
            if (lookingAt.getClass() === Block) {
                let lookingAt2 = (new BP(lookingAt.getX(), lookingAt.getY(), lookingAt.getZ()))
                World.getWorld().func_175698_g(lookingAt2);
                Thread.sleep(10)
                LeftClick.invoke(mc);
                mc.field_71442_b.func_178890_a(Player.getPlayer(), World.getWorld(), mc.field_71439_g.field_71071_by.func_70448_g(), lookingAt2, EnumFacing.func_176733_a(mc.field_71439_g.field_70177_z), new Vec3(0.0, 0.0, 0.0));
            }
        }).start()
};

register("clicked", (event, event2, event3) => {
    if (Config.nowalls) {
        if (event3 == 0) {
            hitthroughwalls()
        }
    }
});

export {hitthroughwalls}