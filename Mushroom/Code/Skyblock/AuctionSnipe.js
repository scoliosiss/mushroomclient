import Config from "../../Config/Config"

const ahsnipekey = new KeyBind("Auction Snipe", Keyboard.KEY_NONE, "Mushroom");

// omg mid code!?!?

const ahsnipe = () => {
    new Thread(() => {
        let inv = Player.getOpenedInventory()
        if (inv.getName().includes("BIN")) {
        inv.click(31, false, "LEFT");
        Thread.sleep(200)
        let newinv = Player.getOpenedInventory()
        if (newinv.getName().includes("Confirm")) {
        newinv.click(11, false, "LEFT");
        }
        }
    }).start()
} 

register("step", () => {
    if (Config.ahsniper) {
        ahsnipe();
    }
}).setFps(5)


const ahsnipe2 = () => {
    new Thread(() => {
        let inv = Player.getOpenedInventory()
        if (inv.getName().includes("Confirm")) {
            inv.click(11, false, "LEFT");
        }
    }).start()
} 

register("step", () => {
        if (Config.ahsniper2) {
            ahsnipe2();
    }
}).setFps(5)