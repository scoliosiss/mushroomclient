import { distanceToPlayer, Sprint, WalkForward } from "../Utils"
import Config from "../../Config/Config"

register("step", () => {
    if (!Config.autowtaptoggle) return;
    if (Keyboard.isKeyDown(Keyboard.KEY_W)) {
        Sprint.setState(true)
        WalkForward.setState(false)
        WalkForward.setState(true)
    }
})