import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./PersonalDetail";
import "./style.css";

function PersonalDetail() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    age: "",
  });

  const [formErrors, setFormErrors] = useState({});

  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const navigate = useNavigate();

  function nextPage() {
    console.log(user);
    setFormErrors(validate(user));
    navigate("/professional-details");
  }

  const handleNext = (e) => {
    e.preventDefault();
  };

  const validate = (user) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if(!user.name)
    {
      errors.name = "Username is required!";
    }
    if(!user.email || !regexEmail.test(user.email))
    {
      errors.email = "Valid email is required";
    }
    if(!user.phone || user.phone.length !== 10)
    {
      errors.phone = "Phone number must be 10 digits only";
    }
    if(!user.age || user.age < 18 || user.age > 100)
    {
      errors.age = "Enter age between 18 and 100";
    }
    if(!user.gender)
    {
      errors.gender = "Gender is required";
    }
    return errors;
  };

  return (
    <>
    {console.log(user)}
      <div className="page" id="personal-detail">
        <div className="page-container" id="personal-detail-container">
          <h2>Personal Details</h2>
          <input
            htmlFor="name"
            type="text"
            required
            placeholder="Enter your name"
            name="name"
            value={user.name}
            onChange={(event) => {
              console.log(event);
              handleInputs(event);
            }}
          />
          <input
            htmlFor="email"
            type="mail"
            placeholder="Enter your email"
            name="email"
            value={user.email}
            onChange={handleInputs}
          />
          <input
            htmlFor="phone"
            name="phone"
            type="tel"
            maxLength={10}
            minLength={10}
            placeholder="Mob no."
            value={user.phone}
            onChange={handleInputs}
          />
          <p>
            Select your Gender
            <select
              htmlFor="gender"
              name="gender"
              id=""
              value={user.gender}
              onChange={handleInputs}
            >
              <option value="Other">Other</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </p>
          <input
            htmlFor="age"
            type="tel"
            maxLength={2}
            placeholder="Enter your age"
            name="age"
            value={user.age}
            onChange={handleInputs}
          />
          <button type="button" onClick={nextPage}>
            Next
          </button>
        </div>
      </div>
    </>
  );
}
export default PersonalDetail;
