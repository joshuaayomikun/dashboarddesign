import { Button } from "@chakra-ui/button"
import Icon from "@chakra-ui/icon"
import { Flex } from "@chakra-ui/layout"
import { Box, Text } from "@chakra-ui/layout"

const Card = (props) => {
    const { children, title, ...rest } = props
    return (
        <Flex direction="column">

            {typeof title !== "undefined" && <Text fontSize={"2xl"} paddingTop={"10"} >{title}</Text>}
            <Box padding={"20px"} shadow={"xl"} {...rest}>
                {children}
            </Box>
        </Flex>
    )

}

export default Card