import { Image } from "@chakra-ui/image"
import { useStyleConfig } from "@chakra-ui/system"

const RoundedImage = (props) => {

    const { size, variant, ...rest } = props
    const styles = useStyleConfig("RoundedImage", { size, variant })
    return <Image as={"img"} sx={styles} {...rest} />
}

export default RoundedImage