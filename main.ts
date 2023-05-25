input.onButtonPressed(Button.A, function () {
    chicas += 1
})
input.onButtonPressed(Button.AB, function () {
    mensaje = "Total " + chicas + " Chicas " + "" + " Chicos " + chicos + (chicas + chicos)
    basic.showString(mensaje)
})
input.onButtonPressed(Button.B, function () {
    chicos += 1
})
let chicos = 0
let mensaje = ""
let chicas = 0
basic.showLeds(`
    . # . # .
    . . . . .
    # . . . #
    # . . . #
    . # # # .
    `)
basic.forever(function () {
    basic.showLeds(`
        . # . # .
        . . . . .
        # . . . #
        # . . . #
        . # # # .
        `)
    basic.showLeds(`
        . # . # .
        . . . . .
        # . . . #
        # . . . #
        . # # # .
        `)
})
