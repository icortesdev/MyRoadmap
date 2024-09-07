import { useFecth } from './UseFetch'
import './App.css'


function App() {

  const { data, loading, error, hadleCancelRequest } = useFecth
    ("https://jsonplaceholder.typicode.com/todos")

  return (
    <>
      <div className='App'>
        <h1>Fetch Like a Pro</h1>
        <button onClick={hadleCancelRequest}>Cancel request</button>
        <div className='card'>
          <ul>
            {error && <li>Error: {error}</li>}
            {loading && <li>Loading...</li>}
            {data?.map((user) => (
              <li key={user.id}>{user.title} </li>

            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
