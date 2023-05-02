joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P14, joystickbit.ButtonType.down, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        # # # # #
        `)
    if (arrow == 3) {
        basic.showIcon(IconNames.Yes)
        points += 1
    } else {
        basic.showIcon(IconNames.No)
        lives += -1
    }
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P15, joystickbit.ButtonType.down, function () {
    basic.showLeds(`
        . . . . #
        . . . . #
        . . . . #
        . . . . #
        . . . . #
        `)
    if (arrow == 1) {
        basic.showIcon(IconNames.Yes)
        points += 1
    } else {
        basic.showIcon(IconNames.No)
        lives += -1
    }
})
function arrow_speed () {
    if (points >= 10 && points == 19) {
        basic.pause(2000)
    } else if (points >= 20 && points == 29) {
        basic.pause(1000)
    } else if (points >= 30) {
        basic.pause(500)
    } else {
        basic.pause(2000)
        basic.pause(1000)
    }
}
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P13, joystickbit.ButtonType.down, function () {
    basic.showLeds(`
        # # # # #
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    if (arrow == 4) {
        basic.showIcon(IconNames.Yes)
        points += 1
    } else {
        basic.showIcon(IconNames.No)
        lives += -1
    }
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P12, joystickbit.ButtonType.down, function () {
    basic.showLeds(`
        # . . . .
        # . . . .
        # . . . .
        # . . . .
        # . . . .
        `)
    if (arrow == 2) {
        basic.showIcon(IconNames.Yes)
        points += 1
    } else {
        basic.showIcon(IconNames.No)
        lives += -1
    }
})
let stop = 0
let select = 0
let points = 0
let arrow = 0
joystickbit.initJoystickBit()
let radio2 = 1
let lives = 3
basic.forever(function () {
    if (radio2 >= 27) {
        radio2 = 1
    } else {
        radio.setGroup(radio2)
        select = randint(1, 7)
        if (select == 1) {
            radio.sendValue("A", 1)
        } else if (select == 2) {
            radio.sendValue("B", 1)
        } else if (select == 3) {
            radio.sendValue("AB", 1)
        } else if (select == 4) {
            radio.sendValue("C", 1)
        } else if (select == 5) {
            radio.sendValue("D", 1)
        } else if (select == 6) {
            radio.sendValue("E", 1)
        } else {
            radio.sendValue("F", 1)
        }
        radio2 += 2
    }
})
basic.forever(function () {
    if (stop == 0) {
        arrow = randint(1, 4)
        if (arrow == 1) {
            basic.showArrow(ArrowNames.East)
            arrow_speed()
        } else if (arrow == 2) {
            basic.showArrow(ArrowNames.West)
            arrow_speed()
        } else if (arrow == 3) {
            basic.showArrow(ArrowNames.South)
            arrow_speed()
        } else {
            basic.showArrow(ArrowNames.North)
            arrow_speed()
        }
    }
})
basic.forever(function () {
    if (lives == 0) {
        stop = 1
        basic.showString("game over")
        basic.showString("score:" + points)
        points = 0
        stop = 0
        lives = 3
    }
})
