/* eslint-disable react/prop-types */
import React, { useState } from "react";
import BasicInfoForm from "./BasicInfoForm";
import EducationForm from "./EducationForm";
import SkillsForm from "./SkillsForm";
import WorkForm from "./WorkForm";
import WorkList from "./WorkList";
import EducationList from "./EducationList";
import SkillsList from "./SkillsList";

export default function FormsContainer(props) {
  const [tab, setTab] = useState("info");

  return (
    <div className="FormsContainer col-md-5">
      <div className="btn-group mb-3" role="group">
        <button
          onClick={() => {
            setTab("info");
          }}
          type="button"
          className={
            tab === "info"
              ? "btn btn-outline-secondary active"
              : "btn btn-outline-secondary"
          }
        >
          Basic info
        </button>
        <button
          onClick={() => {
            setTab("education");
          }}
          type="button"
          className={
            tab === "education"
              ? "btn btn-outline-secondary active"
              : "btn btn-outline-secondary"
          }
        >
          Education
        </button>
        <button
          onClick={() => {
            setTab("skills");
          }}
          type="button"
          className={
            tab === "skills"
              ? "btn btn-outline-secondary active"
              : "btn btn-outline-secondary"
          }
        >
          Skills
        </button>
        <button
          onClick={() => {
            setTab("work");
          }}
          type="button"
          className={
            tab === "work"
              ? "btn btn-outline-secondary active"
              : "btn btn-outline-secondary"
          }
        >
          Work Experience
        </button>
      </div>

      {tab === "info" && <BasicInfoForm onInfoChange={props.onInfoChange} />}

      {tab === "education" && (
        <>
          <EducationList
            removeEducation={props.removeEducation}
            education={props.education}
          />

          <EducationForm onEducationAdd={props.onEducationAdd} />
        </>
      )}

      {tab === "skills" && (
        <>
          <SkillsList removeSkill={props.removeSkill} skills={props.skills} />
          <SkillsForm onSkillsAdd={props.onSkillsAdd} />{" "}
        </>
      )}

      {tab === "work" && (
        <>
          <WorkList work={props.work} removeWork={props.removeWork} />
          <WorkForm onWorkAdd={props.onWorkAdd} />
        </>
      )}
    </div>
  );
}
