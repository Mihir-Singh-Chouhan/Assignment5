import { useNavigate } from "react-router-dom";
function ReviewPage()
{
    const nav = useNavigate();

    function prevPage()
    {
        nav("/professional-details");
    }
    function submit()
    {
        alert("Successful");
        nav('/')
    }

    return (
       
        <>
         <h2>Review Details</h2>
      <div className="page" id="personal-detail">
        <div className="page-container" id="personal-detail-container">
          <h2>Entries</h2>
          <div className="content">
           <p>Name:</p>
           <p>Email:</p>
           <p>Mobile No:</p>
           <p>Gender:</p>
           <p>Age:</p>
           <p>Education:</p>
           <p>Employment Type:</p>
           <p>Skills:</p>
           <p>Experience:</p>

          </div>
          <button type="button" onClick={prevPage}>
            Previous
          </button>

          <button type="submit" onClick={submit}>
            Submit
          </button>

        </div>
      </div>
    </>
    )
}
export default ReviewPage;