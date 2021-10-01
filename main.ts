input.onButtonPressed(Button.A, function () {
    serial.writeString("LAST_POS:")
    serial.writeLine("" + (lastPos))
    while (lastPos == pos) {
        pos = randint(min, max)
    }
    serial.writeString("POS:")
    serial.writeLine("" + (pos))
    tmp = lastPos
    for (let index = 0; index < Math.abs(pos - lastPos); index++) {
        if (lastPos < pos) {
            tmp += 1
        } else {
            tmp += -1
        }
        pins.servoWritePin(AnalogPin.P9, tmp)
        serial.writeString("TMP:")
        serial.writeLine("" + (tmp))
        if (count < 8) {
            basic.pause(0)
        } else {
            basic.pause(0)
        }
    }
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P9, 0)
    lastPos = pos
    count += 1
})
let tmp = 0
let lastPos = 0
let pos = 0
let count = 0
let max = 0
let min = 0
let initPos = 81
let d = 35
min = initPos - d
max = initPos + d
count = 0
pos = 90
lastPos = 90
tmp = 90
basic.showIcon(IconNames.Heart)
pins.servoWritePin(AnalogPin.P9, 0)
basic.pause(1000)
pins.servoWritePin(AnalogPin.P9, 180)
basic.pause(1000)
pins.servoWritePin(AnalogPin.P9, initPos)
basic.pause(500)
pins.digitalWritePin(DigitalPin.P9, 0)
basic.clearScreen()
basic.forever(function () {
	
})
