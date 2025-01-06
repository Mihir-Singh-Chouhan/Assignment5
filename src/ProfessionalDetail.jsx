import "./style.css";
import "./ProfessionalDetail";
function ProfessionalDetail() {
  return (
    <>
      <h1>This is Page 2</h1>
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
          <button type="button" onclick={<ProfessionalDetail />}>
            Next
          </button>
        </div>
      </div>
    </>
  );
}
export default ProfessionalDetail;
