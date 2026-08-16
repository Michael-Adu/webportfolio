import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";

import "../App.scss";
import Tooltip from "@mui/material/Tooltip";

class Skill {
  private name: string;
  private url: string;
  private description: string;

  public constructor(name: string, description: string, url: string = "") {
    this.name = name;
    this.url = url;
    this.description = description;
  }

  public getName(): string {
    return this.name;
  }

  public getURL(): string {
    return this.url;
  }

  public getDescription(): string {
    return this.description;
  }
}

const programmingSkills = [
  new Skill("C/C++", "", ""),
  new Skill("Python", "", ""),
  new Skill("Lua", "", ""),
  new Skill("JavaScript", "", ""),
  new Skill("Flutter/Dart", "", ""),
  new Skill("ReactJS", "", ""),
  new Skill("PHP", "", ""),
  new Skill("VHDL", "", ""),
];

const osSkills = [
  new Skill("Linux/Ubuntu", "Unix-like Operating System", "https://ubuntu.com/"),
  new Skill("QNX", "Unix-like RTOS", "https://qnx.software/en"),
  new Skill("ROS", "Open-source Robotics middleware", "https://www.ros.org/"),
];

const microcontrollerSkills = [
  new Skill("Raspberry Pi", "", "https://www.raspberrypi.com/"),
  new Skill("PIC18", "8-bit microcontroller", ""),
  new Skill("KL25Z", "Freedom Board KL25Z", ""),
  new Skill("Arduino", "", "https://www.arduino.cc/"),
  new Skill("STM32", "32-bit microcontroller", "https://www.st.com/en/microcontrollers-microprocessors/stm32-32-bit-arm-cortex-mcus.html"),
  new Skill("ESP32", "Low-cost microcontroller", "https://www.espressif.com/en/products/socs/esp32"),
];

const systemTestingSkills = [
  new Skill("Oscilloscopes", "", ""),
  new Skill("Logic Analysers", "", ""),
];

const communicationProtocolsSkills = [
  new Skill("UART", "", ""),
  new Skill("CAN", "", ""),
  new Skill("Serial Peripheral Interface (SPI)", "", ""),
  new Skill("I2C", "", ""),
  new Skill("UDP", "", ""),
  new Skill("TCP", "", ""),
];

const projectManagementSkills = [
  new Skill("Git", "", ""),
  new Skill("Jira", "", "")
];

const hmiSkills = [
  new Skill(
    "Kanzi",
    "Automotive HMI Framework",
    "https://rightware.com/product/kanzi-automotive-hmi-framework/"
  ),
  new Skill("QT", "Application Development Framework", "https://www.qt.io/"),
];

const SkillChips = () => {
  const handleClick = (url: string) => {
    if (url != "") {
      window.open(url, "_blank");
    }
  };

  return (
    <div className="skillChips">
      <div className="skillRow">
        <h3>Programming Skills</h3>
        <Grid container className="skillStack" spacing={0.5}>
          {programmingSkills.map((skill) => {
            if (skill.getURL() != "") {
              return (
                <Tooltip title={skill.getDescription()}>
                  <Chip
                    label={skill.getName()}
                    variant="outlined"
                    onClick={() => handleClick(skill.getURL())}
                  />
                </Tooltip>
              );
            } else {
              return (
                <Tooltip title={skill.getDescription()}>
                  <Chip variant="outlined" label={skill.getName()} />
                </Tooltip>
              );
            }
          })}
        </Grid>
      </div>
      <div className="skillRow">
        <h3>Operating Systems</h3>
        <Grid container className="skillStack" spacing={1}>
          {osSkills.map((skill) => {
            if (skill.getURL() != "") {
              return (
                <Tooltip title={skill.getDescription()}>
                  <Chip
                    label={skill.getName()}
                    variant="outlined"
                    onClick={() => handleClick(skill.getURL())}
                  />
                </Tooltip>
              );
            } else {
              return (
                <Tooltip title={skill.getDescription()}>
                  <Chip variant="outlined" label={skill.getName()} />
                </Tooltip>
              );
            }
          })}
        </Grid>
      </div>
      <div className="skillRow">
        <h3>Microcontrollers</h3>
        <Grid container className="skillStack" spacing={1}>
          {microcontrollerSkills.map((skill) => {
            if (skill.getURL() != "") {
              return (
                <Tooltip title={skill.getDescription()}>
                  <Chip
                    label={skill.getName()}
                    variant="outlined"
                    onClick={() => handleClick(skill.getURL())}
                  />
                </Tooltip>
              );
            } else {
              return (
                <Tooltip title={skill.getDescription()}>
                  <Chip variant="outlined" label={skill.getName()} />
                </Tooltip>
              );
            }
          })}
        </Grid>
      </div>
      <div className="skillRow">
        <h3>HMI/UI</h3>
        <Grid container className="skillStack" spacing={1}>
          {hmiSkills.map((skill) => {
            if (skill.getURL() != "") {
              return (
                <Tooltip title={skill.getDescription()}>
                  <Chip
                    label={skill.getName()}
                    variant="outlined"
                    onClick={() => handleClick(skill.getURL())}
                  />
                </Tooltip>
              );
            } else {
              return (
                <Tooltip title={skill.getDescription()}>
                  <Chip variant="outlined" label={skill.getName()} />
                </Tooltip>
              );
            }
          })}
        </Grid>
      </div>
      <div className="skillRow">
        <h3>Communication Protocols</h3>
        <Grid container className="skillStack" spacing={1}>
          {communicationProtocolsSkills.map((skill) => {
            if (skill.getURL() != "") {
              return (
                <Tooltip title={skill.getDescription()}>
                  <Chip
                    label={skill.getName()}
                    variant="outlined"
                    onClick={() => handleClick(skill.getURL())}
                  />
                </Tooltip>
              );
            } else {
              return (
                <Tooltip title={skill.getDescription()}>
                  <Chip variant="outlined" label={skill.getName()} />
                </Tooltip>
              );
            }
          })}
        </Grid>
      </div>
      <div className="skillRow">
        <h3>Project Management</h3>
        <Grid container className="skillStack" spacing={1}>
          {projectManagementSkills.map((skill) => {
            if (skill.getURL() != "") {
              return (
                <Tooltip title={skill.getDescription()}>
                  <Chip
                    label={skill.getName()}
                    variant="outlined"
                    onClick={() => handleClick(skill.getURL())}
                  />
                </Tooltip>
              );
            } else {
              return (
                <Tooltip title={skill.getDescription()}>
                  <Chip variant="outlined" label={skill.getName()} />
                </Tooltip>
              );
            }
          })}
        </Grid>
      </div>
    </div>
  );
};

export default SkillChips;
