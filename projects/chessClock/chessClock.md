
![image](/projects/chessClock/images/render6.png)

# **chess clock**

**Project Date**: 2023

**Project Duration**: 1 month

<div style="display: flex; flex-direction: row; gap: 5px;">
<a className="skillChips"> C/C++ </a>
<a className="skillChips"> PIC18F </a>
<a className="skillChips"> Flutter </a>
<a className="skillChips"> UART </a>
<a className="skillChips"> Git </a>
</div>

<a href="https://github.com/Michael-Adu/Chess-Clock" target="_blank">Github Repo</a>

---

In the world of professional chess, each player is assigned a set amount of time to make their move for a match. This time can be as little as 3 minutes to sev eral hours. When a player has made their move, their time stops decreasing, and the opponent's time starts to decrease as well. The change is done by the player who finishes their turn. 

Most digital chess clocks have at least six buttons, 4 for setting and pausing/playing the match and two for the players to interact with during the match. The two buttons that the players use switch the current player, decreasing the time for the opponent of the user. These clocks can be customized to add or reduce the time of each player before the beginning of the match.

A prototype was created using the PIC18F4520, five buttons, an HC-06 Bluetooth module, and a 16x2 LCD. The PIC18F4520 is equipped with an internal timer interrupt, multiple GPIO ports and USART ports that can be used for both the Bluetooth module and serial communication with a computer. The LCD would display the current modes and times of the chess clock. The device, on startup, was programmed to initialize the timer as an interrupt, as well as a dedicated button to be used to switch between players. The LCD and USART are initialized as well, and the modes are set. After initialization, the menu is shown. A mobile application was created for an android phone to show the timing options and the current times of the players. The clock behaves as programmed, with the mobile application interfacing with the clock via Bluetooth.

<div style="display: flex;">

![image](/projects/chessClock/images/live.png)

![image](/projects/chessClock/images/app1.png)

![image](/projects/chessClock/images/app2.png)

</div>

One button is used to cycle through the preset modes, which were programmed as a struct/class in the microprocessor. Two buttons were used to increase and decrease the time of the current mode, creating a custom mode which is displayed on the LCD and transmitted via serial communication. The last menu button is used to start the match. After starting the match, the interrupt flag for the timer is constantly checked to reduce the time of the current player. This flag is called every 100th of a second to ensure that the time deducted from the player is precise and does not lag. At the beginning of each match, the player is white. After a full second, the display is updated, as well as the serial communication devices, with the current time for White and Black. When the button interrupt is triggered, the current player is switched, with an LED indicating whose turn it is to play. If the LED is on, the current player is Black. If it is off, the current player is White.

The match can be paused and played at any point in the match by pressing the pause button. At this point, the timer no longer decreases the time of any of the players, and a message is shown that the match has been paused. The match can continue by pressing the same button. The match can also be stopped by changing the mode of the chess clock by pressing the change mode button. When any player has less than 5 seconds left, the buzzer beeps once per second to let the players know that there is not much time left to make a move. After a player's time runs out, a victory screen is displayed with the winner's colour.

![image](/projects/chessClock/images/render7.png)