import Config from "../../Config/Config"
import {prefix, mc, RightClick, LeftClick} from "../Utils";

// awesome
let delay = Date.now();

register("playerInteract", (action) => {
    if (Date.now() - delay > 50) {
        if (Config.cpsmultiplierer) {
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
