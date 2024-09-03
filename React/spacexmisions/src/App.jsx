import { useEffect, useState } from "react"
import { Heading, Image } from "@chakra-ui/react"
import * as API from "./services/launches"
import logo from "./assets/logo.png"
import 'dayjs/locale/es'
import LaunchItem from "./components/LaunchItem"

function App() {

  const [launches, setLaunches] = useState([])

  useEffect(() => {
    API.getAllLaunches().then(setLaunches)
  }, []);


  return (
    <>
      <Image m={4} src={logo} width={300} alt="SpaceX Logo" />
      <Heading as="h1" size="lg">
        SpaceX Launches
      </Heading>
      <section>
        {launches.map((launch) => (
          <LaunchItem key={launch.flight_number} {...launch} />
        ))}
      </section>
    </>
  )
}

export default App
