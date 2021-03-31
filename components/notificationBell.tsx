import { Button } from "@chakra-ui/button"
import Icon from "@chakra-ui/icon"
import { Box, Text } from "@chakra-ui/layout"
import {useMultiStyleConfig } from "@chakra-ui/system"
import { MdNotifications } from "react-icons/md"

const NotificationBell = (props) => {
    const { size, variant, children, ...rest } = props
    // 2. Consume the `useMultiStyleConfig` hook
    const styles = useMultiStyleConfig("NotificationBell", { size, variant })
    return (
      <Button sx={styles.button} padding={0}>
      <Icon as={MdNotifications} sx={styles.notificationBell} {...rest}/>
      <Text sx={styles.notificationDot}>.</Text>
      </Button>
    )

}

export default NotificationBell