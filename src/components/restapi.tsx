import { useEffect, useState } from "react"
import axios from "axios"
export function Restapi() {
  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch("http://localhost:3000/api")
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data)
      })
    console.log(backendData)
  }, [])

  return <div>asdasdasdasdsadsadsadasdsa</div>
}
