radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        if (Reverse_speed == 0) {
            Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor1, Kitronik_Robotics_Board.MotorDirection.Forward, motor_speed + 10)
            motor_speed += 10
        }
        if (motor_speed == 0) {
            Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor1, Kitronik_Robotics_Board.MotorDirection.Reverse, Reverse_speed - 10)
            Reverse_speed += -10
        }
    }
    if (receivedNumber == 2) {
        if (Reverse_speed == 0) {
            Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor1, Kitronik_Robotics_Board.MotorDirection.Forward, motor_speed - 10)
            motor_speed += -10
        }
        if (motor_speed == 0) {
            Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor1, Kitronik_Robotics_Board.MotorDirection.Reverse, Reverse_speed + 10)
            Reverse_speed += 10
        }
    }
    if (receivedNumber == 3) {
        Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo1, 0)
    }
    if (receivedNumber == 4) {
        Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo1, 180)
    }
    basic.showIcon(IconNames.Yes)
    basic.clearScreen()
})
let Reverse_speed = 0
let motor_speed = 0
radio.setGroup(15)
motor_speed = 0
Reverse_speed = 0
basic.forever(function () {
    if (motor_speed > 100) {
        motor_speed = 100
    }
    if (Reverse_speed > 100) {
        Reverse_speed = 100
    }
})
