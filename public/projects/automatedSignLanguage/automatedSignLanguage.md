<model-viewer src="/models/handsign.glb" camera-orbit="125deg 90deg 10m" auto-rotate style="width: 100%;"></model-viewer>

# **Automated Sign Language Gesture Detection**

**Project Date**: 2023

**Project Duration**: 3 months

<div style="display: flex; flex-direction: row; gap: 5px;">
<a className="skillChips"> C/C++</a>
<a className="skillChips"> Python</a>
<a className="skillChips"> PIC18</a>
<a className="skillChips"> Oscilloscopes</a>
<a className="skillChips"> UART</a>
<a className="skillChips"> Git</a>
</div>

---

![image](/projects/automatedSignLanguage/images/automatedSignLanguage_4.png)
![image](/projects/automatedSignLanguage/images/automatedSignLanguage_5.png)

## Overview

This project explored whether wrist-mounted sensors could be used to recognise a small set of hand gestures, without placing sensors directly on the fingers. The prototype used multiple piezoelectric sensing elements in a wearable wrist strap to measure changes associated with muscle movement. The resulting signals were sent to a computer, where a machine-learning model was trained to classify five gestures.

The work brought together wearable hardware, signal measurement, data collection and model training. It also provided a way to investigate how consistently wrist signals correspond to different hand movements.

## System design

The project was developed around three main tasks:

1. Build a wearable system to capture wrist movement signals.
2. Collect and label sensor readings for five gestures.
3. Train and evaluate a model to recognise the gestures from the collected data.

![image](/projects/automatedSignLanguage/images/automatedSignLanguage_1.png)

## Results and observations

![image](/projects/automatedSignLanguage/images/automatedSignLanguage_2.png)

The model recognised some gestures more reliably than others. The five gesture was generally easier to identify than the thumbs-up and two gestures. Changes to the size of the dataset and to the training, validation and testing splits produced limited improvements; in some trials, accuracy decreased instead.

These results suggested that the challenge was not simply a matter of collecting more samples. The quality and consistency of the sensor signals also had a significant effect on classification.

![image](/projects/automatedSignLanguage/images/automatedSignLanguage_6.png)

During testing, hand orientation and movement speed affected the signals, sometimes weakening particular features or introducing noise. Keeping the hand in a consistent orientation and minimising movement helped make readings more comparable. The position and tightness of the wrist strap also mattered: placing it further down the arm reduced the measured signal voltage, while strap tension changed the amplitude recorded by the piezoelectric elements.

## What the project demonstrated

The prototype provided evidence that wrist-mounted piezoelectric sensors can capture information useful for distinguishing a limited set of hand gestures. It also highlighted the practical constraints of this approach, particularly sensor placement, movement artefacts and the consistency of the data used to train the model. Further work would be needed to test a broader gesture vocabulary and improve reliability across different users and wearing conditions.
