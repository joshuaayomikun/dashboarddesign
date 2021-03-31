// theme.js


const CustomLink = {
    // 1. We can update the base styles
    baseStyle: {
        color: "brand.primary",
        padding: "22px",
        borderRadius: "xl"
    },
    sizes: {
        sm: {
            fontSize: "12px",
        },
        md: {
            fontSize: "16px",
        },
        lg: {
            fontSize: "24px",
        },
        xl: {
            fontSize: "50px"
        },
    },
    variants: {
        "with-icon": {
            color: "brand.fadedPrimary",
            _hover: {
                shadow: "xl",
                color: "brand.primary",
            },
        },
        "icon-link-with-shadow": {
            shadow: "xl",
        }
    },
    defaultProps: {
        size: "lg"
    }

}
export default CustomLink