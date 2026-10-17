![image](projects/roboticsChallenge/robot_car_driving_render.gif)

# **Line Following Robotics Challenge**

**Project Date**: 2023

**Project Duration**: 1 month

<div style="display: flex; flex-direction: row; gap: 5px;">
<a className="skillChips"> C/C++</a>
<a className="skillChips"> PIC18</a>
<a className="skillChips"> UART</a>
</div>

---

Line-following robots are a classic embedded systems challenge, and for good reason. The goal was simple: build a robot capable of following a black tape track across a contrasting surface, using infrared sensors to detect the line and a PIC18 microcontroller to control its movement.

The robot brought together a PIC18 development board, infrared sensors, 5V motors and a battery supply. The firmware used the sensor readings to guide the robot along the track, turning those inputs into motor control decisions.

![image](projects/roboticsChallenge/line_following_top_view.gif)

Once the initial following was done, the goal was to increase the speed of the robot! I think setting the speed from 30% to 100% would be adequate. Absolutely nothing can go wrong with this decision a couple of days to the competition.

<video  width="100%" height="auto" autoplay loop controls src="projects/roboticsChallenge/a_good_idea0001-0153.mp4" title="Something about Ikarus and a sun?"></video>

## Project focus

This project was a practical introduction to embedded control, sensor integration and the trade-offs involved in tuning a physical system. Increasing the speed made it clear that getting a robot to follow a line reliably is about more than simply detecting it — the control logic, motor response and available time to react all matter.

It was also a useful lesson in balancing performance against reliability, particularly when making last-minute changes before a competition.
