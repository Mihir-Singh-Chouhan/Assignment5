function LandingPage({setSteps , setPersonalDetail})
{
    function goto()
    {
      setSteps(1)
    }
 return (
    <>
       <button type="button" onClick={goto}>Go To</button>
    </>
 )
}
export default LandingPage;