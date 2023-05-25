let chicas = 0
let mensaje = ""
let chicos = 0
input.onButtonPressed(Button.A, function () {
    chicas += 1
    basic.showLeds(`
        . # # . #
        . # # # .
        # . # . .
        . # # # .
        # # . # #
        `)
    edubitMotors.runMotor(MotorChannel.M1, MotorDirection.Forward, 138)
    edubitTrafficLightBit.setLed(LedColor.Green, edubitTrafficLightBit.digitalStatePicker(DigitalIoState.Off))
    edubitTrafficLightBit.setLed(LedColor.Red, edubitTrafficLightBit.digitalStatePicker(DigitalIoState.On))
})
input.onButtonPressed(Button.AB, function () {
    mensaje = "Chicas " + chicas + "" + " Chicos " + chicos + " Total " + (chicas + chicos)
    basic.showString(mensaje)
    chicas = 0
    chicos = 0
})
input.onButtonPressed(Button.B, function () {
    chicos += 1
    basic.showLeds(`
        # . # . .
        . # # # .
        . . # . #
        . # . # .
        # . . . #
        `)
    edubitTrafficLightBit.setLed(LedColor.Green, edubitTrafficLightBit.digitalStatePicker(DigitalIoState.On))
    edubitTrafficLightBit.setLed(LedColor.Red, edubitTrafficLightBit.digitalStatePicker(DigitalIoState.Off))
    edubitMotors.brakeMotor(MotorChannel.M1)
})
basic.forever(function () {
    basic.showLeds(`
        . . # . .
        . . # . .
        # # # # #
        . . # . .
        . . # . .
        `)
    basic.showLeds(`
        . # . . .
        . . # . #
        . # # # .
        # . # . .
        . . . # .
        `)
    basic.showLeds(`
        . # . . .
        . # . # #
        . . # . .
        # # . # .
        . . . # .
        `)
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    basic.showLeds(`
        . . . # .
        # # . # .
        . . # . .
        . # . # #
        . # . . .
        `)
    basic.showLeds(`
        . . . # .
        # . # . .
        . # # # .
        . . # . #
        . # . . .
        `)
})
