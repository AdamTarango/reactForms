import { useState } from "react"


const Authenticate = ({ token }) => {
  const handleAuthenticate = async (event) =>{
    event.preventDefault()
    try {
      const response = await fetch('https://fsa-jwt-practice.herokuapp.com/authenticate', 
      { 
        method: "GET", 
        headers: { 
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}` 
        }
      })
      const result = await response.json()
      setSuccessMessage(result.message)
  
    } catch (error) {
      console.log(error.message)
    }
  }
  const [successMessage, setSuccessMessage] = useState(null);
  const [error, setError] = useState(null)
  return (
    
    
    <>
      <h2>Authenticate</h2>
      {error && <p>{error}</p>}
      {successMessage && <p>{successMessage}</p>}
      <form>
        <label>
          <button onClick={handleAuthenticate}>Authenticate!</button>
        </label>
      </form>
    </>
  )
}
export default Authenticate