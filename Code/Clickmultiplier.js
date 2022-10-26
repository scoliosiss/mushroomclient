import Config from "../Config/Config"
import {prefix, mc, RightClick, LeftClick} from "./Utils";

// doesnt work?

const doublerightclick = (action) => {
    if (action.toString() === "RIGHT_CLICK_BLOCK" || action.toString() === "RIGHT_CLICK_AIR") {
        RightClick.invoke(mc);
        RightClick.invoke(mc);
    }
}

        register("Tick", (clickType) => {
            this.clickType = clickType;
            if (Config.cpsmultiplier) {
                if (this.clickType === "right") {
                    RightClick.invoke(mc)
                    RightClick.invoke(mc)
                }
                else if (this.clickType === "left") {
                    LeftClick.invoke(mc)
                    LeftClick.invoke(mc)
                }
            }
        });