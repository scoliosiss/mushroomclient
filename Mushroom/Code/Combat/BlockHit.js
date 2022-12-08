import { LeftClick, mc } from "../Utils";
import Config from "../../Config/Config"

register("clicked", (event, event2, event3, event4) => {
    if (Config.blockhit) {
        if (event3 == 0) {
            LeftClick.invoke(mc)
        }
    }
});