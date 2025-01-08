import { useState } from "react";

function PersonalDetail({ setSteps, setPersonalDetail, personaldetail }) {
  const [formErrors, setFormErrors] = useState({});
  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setPersonalDetail({ ...personaldetail, [name]: value });
    setFormErrors((prevState) => ({
      ...prevState,
      [name]: "",
    }));
  };

  const validate = (personaldetail) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!personaldetail.name) {
      errors.name = "* Valid name is required!";
    }
    if (!personaldetail.email || !regex.test(personaldetail.email)) {
      errors.email = "* Valid email is required";
    }
    if (!personaldetail.phone || personaldetail.phone.length !== 10) {
      errors.phone = "* Phone number must be 10 digits only";
    }
    if (
      !personaldetail.age ||
      personaldetail.age < 18 ||
      personaldetail.age > 100
    ) {
      errors.age = "* Enter age between 18 and 100";
    }
    if (!personaldetail.gender) {
      errors.gender = "* Gender is required";
    }
    return errors;
  };

  const nextPage = (e) => {
    e.preventDefault();
    const errors = validate(personaldetail);
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) setSteps(2);
  };

  return (
    <>
      <div className="page" id="personal-detail">
        <div className="page-container" id="personal-detail-container">
          <h2>Personal Details</h2>

          <input
            htmlFor="name"
            type="text"
            required
            placeholder="Enter your name"
            name="name"
            value={personaldetail.name}
            onChange={handleInputs}
          />
          <p className="error-msg">{formErrors.name}</p>

          <input
            htmlFor="email"
            type="mail"
            placeholder="Enter your email"
            name="email"
            value={personaldetail.email}
            onChange={handleInputs}
          />
          <p className="error-msg">{formErrors.email}</p>
          <input
            htmlFor="phone"
            name="phone"
            type="tel"
            maxLength={10}
            minLength={10}
            placeholder="Mob no."
            value={personaldetail.phone}
            onChange={handleInputs}
          />
          <p className="error-msg">{formErrors.phone}</p>
          <p>
            Select your Gender
            <select
              htmlFor="gender"
              name="gender"
              id=""
              value={personaldetail.gender}
              onChange={handleInputs}
            >
              <option value="Other">Other</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </p>
          <p className="error-msg">{formErrors.gender}</p>

          <input
            htmlFor="age"
            type="tel"
            maxLength={2}
            placeholder="Enter your age"
            name="age"
            value={personaldetail.age}
            onChange={handleInputs}
          />
          <p className="error-msg">{formErrors.age}</p>
          <button type="button" onClick={nextPage}>
            Next
          </button>
        </div>
      </div>
    </>
  );
}
export default PersonalDetail;
