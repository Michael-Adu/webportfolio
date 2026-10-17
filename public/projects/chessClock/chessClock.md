![image](/projects/chessClock/images/render6.png)

# **Chess Clock**

**Project Date**: 2023

**Project Duration**: 1 month

<div style="display: flex; flex-direction: row; gap: 5px;">
<a className="skillChips"> C/C++ </a>
<a className="skillChips"> PIC18F </a>
<a className="skillChips"> Flutter </a>
<a className="skillChips"> UART </a>
<a className="skillChips"> Git </a>
</div>

<a href="https://github.com/Michael-Adu/Chess-Clock" target="_blank">GitHub Repository</a>

---

This project is a physical chess clock paired with an Android application for configuring and viewing a game. The embedded prototype uses a PIC18F4520 microcontroller, five buttons, an HC-06 Bluetooth module and a 16×2 LCD. The hardware manages each player's remaining time, while the mobile app provides access to timing options and displays the current clock values over Bluetooth.

## Hardware and controls

The LCD displays the selected timing mode, player times and current state of the match. On startup, the microcontroller initialises its timer interrupt, buttons, display and serial communication before presenting the menu.

<div style="display: flex;">

![image](/projects/chessClock/images/live.png)

![image](/projects/chessClock/images/app1.png)

![image](/projects/chessClock/images/app2.png)

</div>

One button cycles through preset timing modes. Two others adjust the time to create a custom mode, which is shown on the LCD and sent over serial communication. A final menu button starts the match. The Flutter app provides a companion view of the timing options and each player's current time, communicating with the clock through Bluetooth.

## Timing and gameplay

The PIC18F4520's timer interrupt provides the regular timing reference for the match. The program checks the timer flag at hundredth-of-a-second intervals to keep time deductions responsive. The displayed times are refreshed once per second and sent to connected serial devices.

White starts each game. When a player presses the turn button, control switches to the other player, and an LED indicates whose turn it is: illuminated for Black and off for White. The match can be paused and resumed with the pause button; changing the timing mode stops the current match and returns the clock to mode selection.

When a player's remaining time falls below five seconds, a buzzer sounds once per second as a warning. When their time reaches zero, the display shows a victory screen indicating the winning colour.

![image](/projects/chessClock/images/render7.png)

## Project focus

The build brought together embedded timing, button handling, an LCD menu, serial communication and a Bluetooth-connected mobile interface. It was a practical exercise in coordinating hardware peripherals and keeping the physical clock and companion app in sync during a game.
