import Config from "../../Config/Config"
import {mc, RightClick} from "../Utils";

// works now (ilr saves the day again)

let delay = Date.now();

register("playerInteract", (action) => {
    if (Date.now() - delay > 100) {
        if (Config.cpsmultiplier) {
            if (action.toString() === "RIGHT_CLICK_BLOCK" || action.toString() === "RIGHT_CLICK_EMPTY") {
                new Thread(() => {
                    Thread.sleep(1);
                    RightClick.invoke(mc);
                    delay = Date.now();
                }).start()
                }
            }
        }
});
