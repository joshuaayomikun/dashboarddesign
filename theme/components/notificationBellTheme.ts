const NotificationBell = {
    parts: ["button, notificationBell", "notificationDot"],

    baseStyle: {
        button: {
            position: "relative",
            padding:0,
            bg:"white"
        },
        notificationBell: {
            position: "absolute",
        },
        notificationDot: {
            position: "absolute",
            right: "8px",
            top: "-41px",
            color: "red",
        }
    },

    sizes: {
        md: {
            notificationBell: {
                fontSize:"20px"
            },
            notificationDot: { 
                fontSize:"61px",
            }
        }
    },

    defaultProps: {
        size: "md"
    }
}

export default NotificationBell