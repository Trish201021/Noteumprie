input.onButtonPressed(Button.A, function () {
    Balls += 1
    basic.showNumber(Balls)
    basic.showLeds(`
        # # # . .
        # # # . .
        # # # . .
        # # # . .
        . . . . .
        `)
})
input.onButtonPressed(Button.AB, function () {
    Balls = 0
    Strike = 0
    basic.showNumber(Balls)
    basic.showNumber(Strike)
})
input.onButtonPressed(Button.B, function () {
    Strike += 1
    basic.showNumber(Strike)
    basic.showLeds(`
        . . # # #
        . . # # #
        . . # # #
        . . . . .
        . . . . .
        `)
})
let Strike = 0
let Balls = 0
Balls = 0
Strike = 0
basic.forever(function () {
	
})
