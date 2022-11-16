import { prefix } from "../Utils";

const bonzomaskkey = new KeyBind("Bonzo mask", Keyboard.KEY_NONE, "Mushroom");
/*
const autobonzomask = () => {
    new Thread(() => {
        if (Keyboard.isKeyDown(Keyboard.KEY_J)) {
            for (let i = 0; i < 102; i++) {
                ChatLib.chat(prefix)
                let inv = Player.getOpenedInventory() // makes inv into variable
                let item = Player.getOpenedInventory().getStackInSlot(i);
                if (item.getName().includes("Bonzo")) {
                    inv.click(i, true, "LEFT");
                    inv.click(5, true, "LEFT")
                }
                }
            }
    }).start()
}


register("tick", () => {
        autobonzomask();
});
*/