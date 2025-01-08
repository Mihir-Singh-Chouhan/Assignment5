
import { useState } from "react";

function ProfessionalDetail({newSteps , setProfessionalDetail , professionaldetail}) {

     const[formErrors , setFormErrors] = useState({});

  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;

    setProfessionalDetail({ ...professionaldetail, [name]: value });
  };

  const validate = (professionaldetail) => {
     const errors = {};

     if(!professionaldetail.education)
     {
        errors.education = "Select maximum education";
     }

     if(!professionaldetail.employment)
     {
        errors.employment = "Select Employment ";
     }

     if(!professionaldetail.exprience || !professionaldetail.exprience < 0)
     {
        errors.exprience = "Enter experience ";
     }
     return errors;
  };

  function nextPage()
  {
     const errors = validate(professionaldetail);
     setFormErrors(errors);

     if(Object.keys(errors).length === 0)
     newSteps(3);
  }

  function previousPage()
  {
    newSteps(1);
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
              value={professionaldetail.education}
              onChange={handleInputs}
            >
              <option value="other">Other</option>
              <option value="PG & Above">PG & Above</option>
              <option value="UG">UG</option>
              <option value="12">12</option>
              <option value="10">10</option>
            </select>
            <p className="error-msg">{formErrors.education}</p>

            <p>Type of Employment</p>
            <select
              type="text"
              id=""
              name="employment"
              value={professionaldetail.employment}
              onChange={handleInputs}
            >
              <option value="Part-Time">Part-Time</option>
              <option value="Internship">Internship</option>
              <option value="Full-Time">Full-Time</option>
            </select>
            <p className="error-msg">{formErrors.employment}</p>
          </div>

          <div
            id="skills"
            name="skills"
            value={professionaldetail.skills}
            onChange={handleInputs}
          >
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
            value={professionaldetail.exprience}
            onChange={handleInputs}
            maxLength={2}
            placeholder="Years of Experience"
          />
          <p className="error-msg">{formErrors.exprience}</p>
          <button type="button" onClick={previousPage}  >
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
