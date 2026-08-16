import Resume from "/Michael Adu - CV 2025.pdf";

import "./Header.scss";

const WebPortfolioHeader = () => {
  return (
    <div className="mainHeader">
      <h1 id="name">Michael Adu</h1>
      <a id="jobTitle">embedded software engineer</a>
      <a href="mailto:michaelngadu@gmail.com" target="_blank">
        {" "}
        michaelngadu@gmail.com
      </a>
      <a href="https://github.com/Michael-Adu" target="_blank" id="github">
        github
      </a>
      <a
        href="https://www.linkedin.com/in/michaelngadu/"
        target="_blank"
        id="linkedin"
      >
        linkedin
      </a>
            <a
        href={Resume}
        target="_blank"
        id="resume"
      >
        resume
      </a>

    </div>
  );
};

export default WebPortfolioHeader;
