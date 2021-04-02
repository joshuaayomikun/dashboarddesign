const CustomTableTheme = {
    parts: ["table, td",],

    baseStyle: {
        table:{
            border: "none",
            borderRadius:"20px",
        },
        tr:{
            borderRadius:"20px",
            transition: "transform .2s", /* Animation */
            height: "57px",
            _hover: {
                transform: "scale(1.5)",
                boxShadow: "xl",
                bg:"white",
            }
        }

    },
}

export default CustomTableTheme