import {prefix} from "../Utils";
import Config from "../../Config/Config"

const Note = function(slot) {
    this.slot = slot
    this.clicked = false
    this.delay = 0
}
const notes = [new Note(37), new Note(38), new Note(39), new Note(40), new Note(41), new Note(42), new Note(43)]

register('tick', () => {
    if (!Config.autoharp) return
    let inv = Player.getContainer()
    if (inv === undefined) return
    if (inv.getName().indexOf('Harp') !== 0) return

    notes.forEach(note => {
        if (note.delay > 0)
            note.delay--

        const item = inv.getStackInSlot(note.slot)
        if (item?.getID() === 159 || 0) {
            note.clicked = false
            note.delay = 0
        }
        if (item?.getID() === 155 || 0) {
            if (note.clicked || note.delay !== 0) return
            if (inv.getStackInSlot(note.slot - 9).getID() === 35) note.delay = 7
            else note.clicked = true
            inv.click(note.slot, false)
        }

    })
})


