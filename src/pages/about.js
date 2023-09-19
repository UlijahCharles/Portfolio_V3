import React, { useState } from "react";
import Button from "../components/button";
import ExperienceModal from "../components/experienceModal";

const About = () => {
  const [isExperienceOpen, setIsExperienceOpen] = useState(false);

  const openExperience = () => setIsExperienceOpen(true);

  const closeExperience = () => setIsExperienceOpen(false);

  return (
    <React.Fragment>
      <h2>Hi, I’m Ulijah Charles</h2>
      <p>
        A passionate and driven Frontend Engineer that is Rochester Institute of
        Technology (RIT) graduate. During my time at RIT, I honed my skills in
        creating intuitive and visually appealing user interfaces while gaining
        a strong foundation in frontend technologies. I have a deep
        understanding of HTML, CSS, React JavaScript and more. One of the most
        valuable aspects of my education at RIT and my freelance work was the
        emphasis on practical, hands-on{" "}
        <span className="experience" onClick={openExperience}>
          experience
        </span>
        . I've had the opportunity to work on various real-world projects, both
        individually and as part of a team. These experiences have taught me how
        to collaborate effectively, problem solve, and deliver high quality code
        within deadlines. I'm particularly enthusiastic about creating
        responsive and user friendly websites and applications that not only
        meet but exceed user expectations. I enjoy the creative aspect of design
        and find satisfaction in turning concepts into engaging digital
        experiences.
      </p>
      <Button title="DOWNLOAD CV" downloadable="true" />
      {isExperienceOpen && <ExperienceModal onClose={closeExperience} />}
    </React.Fragment>
  );
};

export default About;
