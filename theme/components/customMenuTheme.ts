const CustomMenu = {
        baseStyle: {
            width: "100%",
            position:"relative",
            display:'flex',
            justifyContent:"center",
            _hover: {
                _after: {
                    content: '""',
                    position:"absolute",
                    right: 0,
                    top:"35%",
                    bg:"brand.primary",
                    width: "3px",
                    height: "30%"
                }
            },
        },
        variants: {
            "with-border": {
                _after: {
                    content: '""',
                    position:"absolute",
                    right: 0,
                    top:"35%",
                    bg:"brand.primary",
                    width: "3px",
                    height: "30%"
                }
            },
            "without-border": {
                _hover: {
                    _after: {
                        content: '""',
                        width: 0,
                    }
                },
            }
        },
        defaultProps: {
            size:"xl"
        }
    }
    export default CustomMenu