import { Link } from "@chakra-ui/layout"
import { forwardRef, StylesProvider, useMultiStyleConfig, useStyleConfig } from "@chakra-ui/system"



const CustomLink = (props) => {
    const { size, variant, children, ...rest } = props

    const styles = useMultiStyleConfig("CustomLink", { size, variant })
  return (
    <Link sx={styles} as={"a"} {...rest}>
      {/* 3. Mount the computed styles on `StylesProvider` */}
      <StylesProvider value={styles}>{children}</StylesProvider>
    </Link>
  )
}

export default CustomLink