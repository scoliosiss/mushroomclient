import Config from "../../Config/Config"
import {prefix, mc, BlockLever, BP, EnumFacing, Vec3, ArrayLists} from "../Utils";

const leverauratoggle = new KeyBind("Lever aura", Keyboard.KEY_NONE, "Mushroom");

let alreadyClicked = new ArrayLists;

register("tick", () => {
    if (Config.leverer) {
    new Thread(() => {
        if (Client.currentGui.get() == null) {
            for (let x = Player.getX() - 10; x < Player.getX() + 10; x++) {
                for (let y = Player.getY() - 10; y < Player.getY() + 10; y++) {
                    for (let z = Player.getZ() - 10; z < Player.getZ() + 10; z++) {
                        let position = new BP(x, y, z);
                        let block = mc.field_71441_e.func_180495_p(position).func_177230_c();
                        if (!alreadyClicked.contains(position) && mc.field_71439_g.func_70011_f(position.func_177958_n(), position.func_177956_o() - mc.field_71439_g.func_70047_e(), position.func_177952_p()) < Config.leverreach) {
                            if (block instanceof BlockLever) {
                                Thread.sleep(0);
                                mc.field_71442_b.func_178890_a(Player.getPlayer(), World.getWorld(), mc.field_71439_g.field_71071_by.func_70448_g(), position, EnumFacing.func_176733_a(mc.field_71439_g.field_70177_z), new Vec3(0.0, 0.0, 0.0));
                                alreadyClicked.add(position);
                            }
                        }           
                    }
                }
            }
        }
    }).start()
}
});

register("tick", () => {
    if (leverauratoggle.isPressed()) {
        ChatLib.chat(`${
            (Config.leverer = !Config.leverer) 
            ? prefix + " >" + "&r&a Lever aura" 
            : prefix + " >" + "&r&c Lever aura"
        }`
        );
    }
});

register("command", () => {
    ChatLib.chat(`${
        (Config.leverer = !Config.leverer) 
        ? prefix + " >" + "&r&a Lever aura" 
        : prefix + " >" + "&r&c Lever aura"
    }`
    );
}).setName("la")