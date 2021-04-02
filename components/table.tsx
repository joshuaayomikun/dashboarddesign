import { Link } from "@chakra-ui/layout"
import {StylesProvider, useMultiStyleConfig, useStyles } from "@chakra-ui/system"
import { Table as ChTable, Tr as ChTr } from "@chakra-ui/table"



const Table = (props) => {
    const { size, variant, children, ...rest } = props

    const styles = useMultiStyleConfig("CustomTable", { size, variant })
  return (
    <ChTable sx={styles.table} as={"table"} {...rest}>
      {/* 3. Mount the computed styles on `StylesProvider` */}
      <StylesProvider value={styles}>{children}</StylesProvider>
    </ChTable>
  )
}

export const Tr = (props) => {
    const styles = useStyles()
    const {children, ...rest} = props
    return <ChTr sx={styles.td} {...rest}>
        {children}
    </ChTr>
}

export default Table