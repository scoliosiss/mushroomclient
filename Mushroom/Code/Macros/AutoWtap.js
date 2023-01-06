import { distanceToPlayer, Sprint, WalkForward } from "../Utils"
import Config from "../../Config/Config"

// if you want i can make it actually look like ur w tapping aswell instead of just reducing kb

register("step", () => {
    if (!Config.autowtaptoggle) return;
    if (Keyboard.isKeyDown(Keyboard.KEY_W)) {
        Sprint.setState(true)
        WalkForward.setState(false)
        WalkForward.setState(true)
    }
})