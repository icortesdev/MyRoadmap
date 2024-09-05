
import { Image } from "@chakra-ui/react"
import logo from "./assets/logo.png"
import { Routes, Route, } from "react-router-dom"
import LaunchList from "./components/LaunchList"
import LaunchDetails from "./components/LaunchDetails"
import RocketDetails from "./components/RocketDetails"

function App() {

  return (
    <>
      <Image m={4} src={logo} width={300} alt="SpaceX Logo" />
      <Routes>
        <Route path="/" element={<LaunchList />} />
        <Route path="launch/:launchId" element={<LaunchDetails />} />
        <Route path="rockets/:rocketId" element={<RocketDetails />} />
      </Routes>

    </>
  )
}

export default App
