/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Sophia
 * Created on: Feb 20
 * This program will show the temperatue
*/

basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {
    const temperature = input.temperature()
    basic.clearScreen()
    basic.showString("the temperature is:" + temperature + " C.")
})
