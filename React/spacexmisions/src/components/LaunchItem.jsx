import React from 'react'
import { FaCalendar } from "react-icons/fa";
import dayjs from 'dayjs';
import 'dayjs/locale/es'
import { Box, Button, Flex, Spacer, Tag, Text } from "@chakra-ui/react"
const LaunchItem = (launch) => {
    return (
        <>
            <Box
                bg="gray.100"
                p={4}
                m={4}
                borderRadius="lg">
                <Flex display="flex">
                    <Text fontSize="2xl">
                        Mission <strong>{launch.mission_name} </strong>
                        ({launch.launch_year})
                    </Text>
                    <Spacer />
                    <Tag p={2} colorScheme={launch.launch_success ? "green" : "red"}>
                        {launch.launch_success ? "Success" : "Failure"}
                    </Tag>
                </Flex>
                <Flex align="center">
                    <FaCalendar color="grey" />
                    <Text fontSize="sm" ml="1" color="grey.500">
                        {dayjs(launch.launch_date_local)
                            .locale("es")
                            .format("D MMMM, YYYY")}
                    </Text>
                </Flex>
                <Button mt={2} colorScheme='purple'>More Details</Button>
            </Box>
        </>
    )
}

export default LaunchItem
