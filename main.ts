input.onButtonPressed(Button.A, function () {
    erzekeny += -50
    if (erzekeny <= 0) {
        erzekeny = 0
        music.playTone(185, music.beat(BeatFraction.Half))
    }
    input.setSoundThreshold(SoundThreshold.Loud, erzekeny)
    music.playTone(277, music.beat(BeatFraction.Eighth))
    for (let index = 0; index <= erzekeny / 50 - 1; index++) {
        led.plot(index, 0)
    }
    basic.pause(1000)
    basic.clearScreen()
})
input.onSound(DetectedSound.Loud, function () {
    if (lampa == 0) {
        lampa = 1
        led.plot(2, 2)
    } else {
        lampa = 0
        basic.clearScreen()
    }
    radio.sendValue("lentizaj", 1)
})
input.onButtonPressed(Button.B, function () {
    erzekeny += 50
    if (erzekeny >= 255) {
        erzekeny = 255
        music.playTone(659, music.beat(BeatFraction.Half))
    }
    input.setSoundThreshold(SoundThreshold.Loud, erzekeny)
    music.playTone(932, music.beat(BeatFraction.Eighth))
    for (let index = 0; index <= erzekeny / 50 - 1; index++) {
        led.plot(index, 0)
    }
    basic.pause(1000)
    basic.clearScreen()
})
let lampa = 0
let erzekeny = 0
radio.setGroup(1)
led.setBrightness(5)
basic.showIcon(IconNames.Yes)
basic.pause(500)
erzekeny = 127
basic.clearScreen()
lampa = 0
