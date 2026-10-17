<model-viewer src="/models/headphones.glb" auto-rotate style="width: 100%;"></model-viewer>

# **Arctis Sonar GUI**

**Project Date**: 2026

**Project Duration**: 2 months

<div style="display: flex; flex-direction: row; gap: 5px;">
<a className="skillChips"> Python</a>
<a className="skillChips"> Linux/Ubuntu</a>
<a className="skillChips"> Git</a>
</div>

---

Arctis Sonar GUI is a desktop application for Linux that brings a visual interface to the game-and-chat audio mixing available on supported SteelSeries headsets. It was built for Pop!_OS and Bazzite, with the aim of making the chatmix setup easier to see and manage without relying on SteelSeries GG.

![](/projects/arctisSonarGUI/images/homePage.png)

## Why I built it

After moving to Linux for most of my day-to-day use, I missed the chatmix feature I had become used to on my Arctis 7X headset. SteelSeries GG wasn't available natively, but I found two useful open-source projects that provided much of the underlying functionality: [HeadsetControl](https://github.com/Sapd/HeadsetControl), which communicates with supported headsets, and [Linux-Arctis-7-Plus-ChatMix](https://github.com/awth13/Linux-Arctis-7-Plus-ChatMix), which sets up separate game and chat audio sinks.

Those tools handled the important audio functionality, but I wanted a graphical way to see the current mix and whether the service was running. That became the starting point for this project: a small GUI inspired by the layout and feel of SteelSeries GG, built around the existing Linux tools rather than replacing them.

The moving chatmix slider is mostly a visual indicator rather than a control, but it makes the current balance easier to understand at a glance. What began as a solution to a personal annoyance also became an opportunity to explore Linux desktop integration and build something other headset users can adapt.

## Using the application

The home screen displays the selected headset and its current chatmix levels. The sliders are currently visual indicators and cannot be adjusted directly in the GUI; the application reads the mix through the headset tooling.

![](/projects/arctisSonarGUI/images/settingsPage.png)

The settings page lists supported chatmix devices and remembers the selected settings. Vendor and product IDs are shown alongside each device to help identify hardware and troubleshoot compatibility. The **Enable Arctis GUI** toggle disables the application’s integration by removing the virtual audio sinks and stopping its HeadsetControl listener.

Logs are saved in `Documents/ArctisSonar GUI/AppLogFiles` and can also be viewed from the settings page. An additional option enables logging of the chatmix calculations for debugging.

Closing the window minimises the application to the system tray, where it can be reopened. There is a current limitation on some Wayland setups: hiding the tray icon completely can make it unavailable to reopen.

## Further development

There is room to improve the documentation and make the code easier for others to extend. The project also contains some groundwork for themes, and could be developed further with contributions from people using different Linux distributions and compatible headsets.

The project is open for anyone who wants to fork it, adapt it, or help improve it.

## Acknowledgements

This application builds on the work behind [Linux-Arctis-7-Plus-ChatMix](https://github.com/awth13/Linux-Arctis-7-Plus-ChatMix) and [HeadsetControl](https://github.com/Sapd/HeadsetControl). The interface also takes inspiration from SteelSeries GG and its chatmix controls.
