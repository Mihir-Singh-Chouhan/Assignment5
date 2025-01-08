import React from "react";
import './global.css'
import PersonalDetail from "./components/Personal/PersonalDetail";
import { useState } from "react";
import ProfessionalDetail from "./components/Professional/ProfessionalDetail";
import ReviewPage from "./components/Review/Review";
import LandingPage from "./LandingPage";

const UserInfo = () => {
  const [steps , setSteps] = useState(0);
  const [personaldetail , setPersonalDetail] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    age: "",
  });
  const [professionaldetail , setProfessionalDetail] = useState({
    education: "",
    employment: "",
    skills: "",
    exprience: "",
  });
  return (
    <>
       <h1>This is a Multi-Step-form</h1>
      <div>
            {
              steps === 0 &&
              <>
                 <LandingPage setSteps = {setSteps} setPersonalDetail = {setPersonalDetail} personaldetail = {personaldetail}/>
              </>
            }

          { steps === 1 &&  // Inline If with Logical && Operator  ,  yha pr props bheja h 
          <>
          <PersonalDetail setSteps = {setSteps} setPersonalDetail = {setPersonalDetail} personaldetail = {personaldetail}/>  
          </>
          }
          {
            steps === 2 &&   // newSteps se koi error nhi aayega , naam kuch bhi de skte h
            <>
            <ProfessionalDetail newSteps = {setSteps} setProfessionalDetail = {setProfessionalDetail} professionaldetail = {professionaldetail} /> 
            </>
          }
          {
            steps === 3 &&
            <>
            <ReviewPage setSteps = {setSteps} personaldetail = {personaldetail} professionaldetail = {professionaldetail}/>
            </>
          }
      </div>
    </>
  )
};
export default UserInfo;
