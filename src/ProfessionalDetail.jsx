import { useLocation, useNavigate } from "react-router-dom";
import "./style.css";
import "./ProfessionalDetail";
import "./ReviewPage";
import { useState } from "react";
 function ProfessionalDetail() {

    const [pro , setPro] = useState({
        education:"",
        employment:"",
        skills:"",
        exprience:"",

    });

  let name,value;
  const handleInputs = (e) =>{
    name = e.target.name;
    value = e.target.value;

    setPro({...pro,[name]: value});
  }

  const nav = useNavigate();


  function nextPage() {
    console.log(pro);
    nav("/review-details");
  }

  function prevPage() {
    nav("/personal-details");
  }


  return (
    <>
      <div className="page" id="professional-detail">
        <h1>This is Page 2</h1>
        <div className="page-container" id="professional-detail-container">
          <h2>Professional Detail</h2>
        
          <div>
            <p>Education</p>
            <select
              type="text"
              id=""
              name="education"
              value={pro.education}
              onChange={handleInputs}
            >
              <option value="other">Other</option>
              <option value="PG & Above">PG & Above</option>
              <option value="UG">UG</option>
              <option value="12">12</option>
              <option value="10">10</option>
            </select>

            <p>Type of Employment</p>
            <select
              type="text"
              id=""
              name="employment"
              value={pro.employment}
              onChange={handleInputs}
            >
              <option value="Part-Time">Part-Time</option>
              <option value="Internship">Internship</option>
              <option value="Full-Time">Full-Time</option>
            </select>
          </div>
          
          <div id="skills" name="skills" value={pro.skills} onChange={handleInputs}>
            <p>Select Your Skills</p>
            <label htmlFor="htmlAndCss"> HTML & CSS </label>
            <input type="checkbox" name="htmlAndCss" id="htmlAndCss" />
            <label> JavaScript</label>
            <input type="checkbox" value="JavaScript" />
            <label>React</label>
            <input type="checkbox" value="React" />
            <label>DBMS </label>
            <input type="checkbox" value="DBMS" />
            <label>JAVA</label>
            <input type="checkbox" value="JAVA" />
          </div>

          <label> Years of Experience</label>
          <input
            type="tel"
            name="exprience"
            value={pro.exprience}
            onChange={handleInputs}
            maxLength={2}
            placeholder="Years of Experience"
          />

          <button type="button" onClick={prevPage}>
            Previous
          </button>
          <button type="button" onClick={nextPage}>
            Next
          </button>
        </div>
      </div>
    </>
  );
}
export default ProfessionalDetail;
