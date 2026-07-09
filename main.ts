basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P0) < 200) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
})
