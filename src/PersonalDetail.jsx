import { useNavigate } from "react-router-dom";
import "./PersonalDetail";
import "./style.css";
import "./ProfessionalDetail";
function PersonalDetail() {
  const navigate = useNavigate();

  // this function handles navigation
  function nextPage() {
    navigate("/ProfessionalDetail");
  }

  return (
    <>
      <div className="page" id="personal-detail">
        <div className="page-container" id="personal-detail-container">
          <input type="text" placeholder="Enter your name" />
          <input type="mail" placeholder="Enter your email" />
          <input
            type="tel"
            maxLength={10}
            minLength={10}
            placeholder="Mob no."
          />
          <p>
            Select your Gender
            <select name="Gender" id="">
              <option value="Other">Other</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </p>
          <input type="tel" maxLength={2} placeholder="Enter your age" />
          <button type="button" onclick={nextPage}>
            Next
          </button>
        </div>
      </div>
    </>
  );
}
export default PersonalDetail;
