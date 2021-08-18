import React, { useState } from "react";
import FormsContainer from "./FormsContainer";
import Preview from "./Preview";
import "../styles/MainContent.css";

export default function MainContent() {
  const [infos, setInfos] = useState({
    firstName: "",
    lastName: "",
    address: "",
    email: "",
    phone: "",
  });
  const [education, setEducation] = useState([]);
  const [skills, setSkills] = useState([]);
  const [work, setWork] = useState([]);

const changeInfo = (info) => {
    setInfos({
        firstName: info.firstName,
        lastName: info.lastName,
        email: info.email,
        address: info.address,
        phone: info.phone,
    });
};

const addEducation = edu => {
    for(let educationInstance of education)
    if( educationInstance.degree === edu.degree &&
        educationInstance.from === edu.from &&
        educationInstance.date === edu.date 
    ) return;
    setEducation([...education,edu]);
};

const addWork = workExperience => {
    for(let job of work)
        if( job.companyName === workExperience.companyName &&
            job.role === workExperience.role &&
            job.to === workExperience.to &&

            job.from === work.from
        ) return;

setWork( prev => [ ...prev, workExperience])
}
  

  return (
    <div className=" mt-4 container-fluid">
      <div className="row">
        <FormsContainer
          onInfoChange={ changeInfo }

          onEducationAdd={addEducation}
          education={education}
          removeEducation={ (id) => setEducation( prev =>  prev.filter((edu) => edu.id !== id )) }

          onSkillsAdd={(skill) => !skills.includes(skill)  && setSkills( prev => [...prev, skill ])}
          skills={skills}
          removeSkill={(skill) => setSkills( prev => prev.filter( s => s !== skill ))}

          onWorkAdd={addWork}
          work={work}
          removeWork={id => setWork( prev => prev.filter( work => work.id !== id ))}
        />
        <Preview
          info={infos}
          education={education}
          skills={skills}
          work={work}
        />
      </div>
    </div>
  );
}
