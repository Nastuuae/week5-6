import {GameView, clickToTail, canvas} from "./gameview.js"
import {move} from "./game.js"

const initialState = [
    [5, 1, 3],
    [4, 8, 0],
    [7, 6, 2]]

let s1 = initialState
new GameView(s1)

canvas.addEventListener('click', moveView)


function moveView(event)
{
    const [i, j] = clickToTail(event.offsetX, event.offsetY)
    s1 = move(s1, i, j)
    new GameView(s1)
}

  


