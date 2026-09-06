<model-viewer src="/models/handsign.glb" camera-orbit="125deg 90deg 10m" auto-rotate style="width: 100%;"></model-viewer>

# **automated sign language detection device**

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

## Introduction


--- 
With the general communication difficulty in society between the hearing impaired and the non-impaired, the aim of the project was to develop an automated sign language translation system using physical hand gesture detection. Utilising multiple piezoelectric sensing elements, a wearable system was created. This system is worn on the wrist and detects changes in muscle deformation in the wrist with each gesture made. The data is sent to a computer trained with a large gesture dataset to predict the gesture made. By establishing a clear correlation between the gestures and the signal data from the piezoelectric sensing elements, the theory of gesture 
detection with sensors only attached to the wrist and not the fingers was confirmed. 

## Project Objectives

1. Create a wearable system which reads wrist data.
2. Collect wrist data for multiple gestures and signs (5 gestures).
3. Train a model to recognize the signs and gestures.

![image](/projects/automatedSignLanguage/images/automatedSignLanguage_1.png)


## Results

![image](/projects/automatedSignLanguage/images/automatedSignLanguage_2.png)

The system accurately predicted certain gestures better than others. The five gesture was more easily recognized as compared to the thumbs up or two gesture. While it is difficult to pinpoint the exact cause of this, it seems unlikely that the model required more data sets to increase the accuracy. With a reduced data set, the accuracy of the model stayed relatively stagnant. Making modifications to the training, validation and testing dividends made resulted in little change to the model, with some iterations degrading the accuracy of the model.

![image](/projects/automatedSignLanguage/images/automatedSignLanguage_6.png)

The rotation of the hand, as well as the velocity, played a role in gesture detection, with both affecting the signal output by hindering specific signals and introducing noise. To ensure that the signals stay consistent, the hand was suspended in the same orientation for every reading and kept as still as possible. Another factor to take into consideration was the position of the wrist strap system, where positioning the wrist strap further down along the arm resulted in a loss in signal voltage. The tightness of the strap also factors into the amplitude of the signal from the piezoelectric transducers.