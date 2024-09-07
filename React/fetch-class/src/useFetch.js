import { useState, useEffect } from 'react'


export function useFecth() {
  const [data, setData] = useState([])
  const [loading, setloading] = useState(true)
  const [error, setError] = useState()
  const [controller, setcontroller] = useState()

  useEffect(() => {
    const abortController = new AbortController()
    setcontroller(abortController)


    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => {
        if (error.name === "AbortError") {
          console.log("Request cancelled")
        }
        setError(error)
      })
      .finally(() => setloading(false))

    return () => abortController.abort()
  }, [])

  const hadleCancelRequest = () => {
    if (controller) {
      controller.abort()
      setError("Request cancelled")
    }
  }

  return { data, loading, error, hadleCancelRequest }
}
