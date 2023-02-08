import { useEffect, useState } from "react"
export function Restapi() {
  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    // to create proxy server to bypass CORS policy
    fetch("http://localhost:3000/api")
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data)
      })
    console.log(backendData)
  }, [])

  return (
    <div>
      {typeof backendData.users === "undefined" ? (
        <p>Loading...</p>
      ) : (
        backendData.users.map((user, i) => <p key={i}>{user}</p>)
      )}
    </div>
  )
}
