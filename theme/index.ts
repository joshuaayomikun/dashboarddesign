// theme.js
import { extendTheme } from "@chakra-ui/react"

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

const overrides = {
    styles,
    colors,
    sizes,
    components: {
        CustomLink,
        CustomMenu,
        RoundedImage,
        NotificationBell,
        CustomTable
    }
}

export default extendTheme(overrides)