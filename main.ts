basic.forever(function () {
    if (input.lightLevel() > 25) {
        basic.showLeds(`
            . . # . .
            . # # . .
            . . # . .
            . . # . .
            . . # . .
            `)
    }
    if (input.lightLevel() > 50) {
        basic.showLeds(`
            . # # # .
            # . . # .
            . . # . .
            . # . . .
            # # # # .
            `)
    }
    if (input.lightLevel() > 100) {
        basic.showLeds(`
            # # . # .
            . . . . #
            . . # # .
            . . . . #
            # # # # .
            `)
    }
    if (input.lightLevel() > 150) {
        basic.showLeds(`
            # . . # .
            # . . # .
            # # # # .
            . . . # .
            . . . # .
            `)
    }
    if (input.lightLevel() > 200) {
        basic.showLeds(`
            . # # # .
            # . . . .
            . # # . .
            . . . # .
            # # # . .
            `)
    }
})
