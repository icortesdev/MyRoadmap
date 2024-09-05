import React from 'react'
import { Heading } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import * as API from "../services/launches"
import LaunchItems from './LaunchItems';

const LaunchList = () => {

    const [launches, setLaunches] = useState([])

    useEffect(() => {
        API.getAllLaunches().then(setLaunches).catch(console.log)
    }, []);

    return (
        <>
            <Heading align="center" as="h1" size="lg" m={4}>
                SpaceX Launches
            </Heading>
            {launches.length === 0 ? (
                <div>Loading...</div>
            ) : (
                <section>
                    {launches.map((launch) => (
                        <LaunchItems key={launch.flight_number} {...launch} />

                    ))}
                </section>
            )}
        </>
    )
}

export default LaunchList
