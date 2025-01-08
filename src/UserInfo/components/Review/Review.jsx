
function ReviewPage({setSteps , personaldetail , professionaldetail})
{
    console.log("This is review page",personaldetail);
    console.log("This is review page",professionaldetail);
    function previousPage(){

        setSteps(2);
    }
    function submitMessage()
    {
        alert("Submit Successfully");
        setSteps(0);
    }

    return (
       
        <>
         <h2>Review Details</h2>
      <div className="page" id="personal-detail">
        <div className="page-container" id="personal-detail-container">
          <h2>Entries</h2>
          <div className="content">
           <p>Name: {personaldetail.name}</p>
           <p>Email:{personaldetail.email}</p>
           <p>Mobile No:{personaldetail.phone}</p>
           <p>Gender: {personaldetail.gender}</p>
           <p>Age:{personaldetail.age}</p>
           <p>Education: {professionaldetail.education}</p>
           <p>Employment Type: {professionaldetail.employment}</p>
           <p>Skills: {professionaldetail.skills}</p>
           <p>Experience: {professionaldetail.exprience}</p>

          </div>
          <button type="button" onClick={previousPage}>
            Previous
          </button>

          <button type="submit" onClick={submitMessage}>
            Submit
          </button>

        </div>
      </div>
    </>
    )
}
export default ReviewPage;