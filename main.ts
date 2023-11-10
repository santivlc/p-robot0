input.onButtonPressed(Button.A, function () {
    cuteBot.colorLight(cuteBot.RGBLights.ALL, 0xffff00)
    basic.pause(1000)
    cuteBot.colorLight(cuteBot.RGBLights.ALL, 0x000000)
})
input.onButtonPressed(Button.B, function () {
    cuteBot.colorLight(cuteBot.RGBLights.ALL, 0xff0000)
    cuteBot.moveTime(cuteBot.Direction.forward, 20, 1)
    basic.pause(1000)
    cuteBot.colorLight(cuteBot.RGBLights.ALL, 0x000000)
})
basic.showIcon(IconNames.Heart)
basic.pause(1000)
basic.clearScreen()
// esquiva la mano
// 
basic.forever(function () {
    if (cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters) < 3) {
        cuteBot.moveTime(cuteBot.Direction.backward, 15, 1)
    }
})
