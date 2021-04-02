// theme.js
import { extendTheme } from "@chakra-ui/react"
import { createBreakpoints } from "@chakra-ui/theme-tools"

// Global style overrides
import styles from "./styles"

import colors from "./foundations/colors"
import sizes from "./foundations/sizes"
// import Button from "./components/button"
import CustomLink from "./components/customLinkTheme"
import CustomMenu from "./components/customMenuTheme"
import RoundedImage from "./components/roundedImageTheme"
import NotificationBell from "./components/notificationBellTheme"
import CustomTable from "./components/customTableTheme"

// const overrides = {
//   colors,
//   styles,
//   components: {
//     Button,
//     Link
//   }

// }
// 2. Update the breakpoints as key-value pairs
const breakpoints = createBreakpoints({
    sm: "320px",
    md: "768px",
    lg: "960px",
    xl: "1200px",
  })
const overrides = {
    styles,
    colors,
    sizes,
    breakpoints,
    components: {
        CustomLink,
        CustomMenu,
        RoundedImage,
        NotificationBell,
        CustomTable
    }
}

export default extendTheme(overrides)