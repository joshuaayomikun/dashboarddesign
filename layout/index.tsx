import { Box, Flex, Icon, Text } from "@chakra-ui/react"
import NotificationBell from "../components/notificationBell"
import RoundedImage from "../components/roundedImage"
import Sidebar from "../components/sidebar"
import Card from "../components/card"
import { MdCheckCircle, MdCreditCard } from "react-icons/md"



const Layout = (props) => {
    return <Box>
        <Flex>
            <Sidebar />
            <Flex>
                {props.children}
            </Flex>
            <Flex marginLeft="auto" padding={"10"} direction="column">
                <Flex maxHeight={"14"} alignItems="center">
                    <RoundedImage src={"/myprofile.png"} variant={"small-avatar-with-Shadow"} />
                    <Text paddingX={"2"} fontWeight="extrabold">John Doe</Text>
                    <NotificationBell />
                </Flex>
                <Card title="Transfer money">
                    <Flex>
                        <Icon as={MdCreditCard} color={"white"} fontSize={"2xl"} bg={"brand.primary"} marginRight={"1.5"} />
                        <Text >Quick transfer</Text>
                        <Flex marginLeft={"20px"} position={"relative"} width={"200px"} height="70px" >
                            <RoundedImage position={"absolute"} left={0} variant={"small-avatar-with-Shadow"} src={"/myprofile.png"} />
                            <RoundedImage position={"absolute"} left={"45px"} variant={"small-avatar-with-Shadow"} src={"/myprofile.png"} />
                            <RoundedImage position={"absolute"} left={"90px"} variant={"small-avatar-with-Shadow"} src={"/myprofile.png"} />
                            <RoundedImage position={"absolute"} left={"145px"} variant={"small-avatar-with-Shadow"} src={"/myprofile.png"} />
                            <Icon position={"absolute"} left={"195px"} fontSize={"2xl"} as={MdCheckCircle} color="brand.primary" />
                        </Flex>
                    </Flex>
                </Card>
            </Flex>
        </Flex>
    </Box>
}

export default Layout