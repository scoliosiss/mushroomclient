import Config from "../../Config/Config"
import {prefix, mc, RightClick, LeftClick} from "../Utils";

// awesome

register("clicked", (event, event2, event3) => {
    if (Config.cpsmultiplierer) {
        if (Config.cpsmultiplierl) {
            if (event3 == 0) {
                LeftClick.invoke(mc)
            }
        }
        if (Config.cpsmultiplierr) {
            if (event3 == 1) {
                RightClick.invoke(mc)
            }
        }
    }
});