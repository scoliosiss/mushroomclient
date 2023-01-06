import Config from "../../Config/Config"
import { BP, C07PacketPlayerDigging, EnumFacing, mc } from "../Utils";

// not really fast break just breaks blocks in 1 click, still useful and fast

register("clicked", (event, event2, event3, event4) => {
    if (event3 == 0) {
    if (!event4) return;
    if (Config.fatbreak) {
        new Thread(() => {
            if (Client.currentGui.get() == null) { // make sure not in gui
                let lookingAt = Player.lookingAt(); 
                if (lookingAt.getClass() === Block) {
                    funnylook = new BP(lookingAt.getX(), lookingAt.getY(), lookingAt.getZ())
                    Client.sendPacket(new C07PacketPlayerDigging(C07PacketPlayerDigging.Action.START_DESTROY_BLOCK, funnylook, EnumFacing.func_176733_a(Client.getMinecraft().field_71439_g.field_70177_z)));
                    Thread.sleep(1)
                    Client.sendPacket(new C07PacketPlayerDigging(C07PacketPlayerDigging.Action.STOP_DESTROY_BLOCK, funnylook, EnumFacing.func_176733_a(Client.getMinecraft().field_71439_g.field_70177_z)));
                }
            }
        }).start()
    }
}
});