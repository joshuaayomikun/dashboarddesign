import { Box } from "@chakra-ui/layout"
import { useStyleConfig } from "@chakra-ui/system"


const  CustomMenu = (props) => {
    const { size, variant, ...rest } = props
    const styles = useStyleConfig("CustomMenu", { size, variant })
    return <Box as="span" sx={styles} {...rest} />
}

export default CustomMenu