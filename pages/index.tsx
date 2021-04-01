import Icon from '@chakra-ui/icon'
import { Input, InputGroup, InputRightElement } from '@chakra-ui/input'
import { Flex } from '@chakra-ui/layout'
import Head from 'next/head'
import { MdSearch } from 'react-icons/md'
import CustomLink from '../components/customLink'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (<>
    <Flex justifyContent={"center"} width={"100%"} height={"52px"}>

  <InputGroup height={"62px"} width="100%" shadow={"lg"} borderRadius={"22px"} >
    <Input type="tel" height={"62px"} placeholder="Search" borderRadius={"22px"} />
    <InputRightElement top={"10px"}
      right={"8px"}
      pointerEvents="none"
      children={ <CustomLink bg={"brand.primary"} variant={"with-icon"}><Icon as={MdSearch} /></CustomLink>}
    />
  </InputGroup>
    </Flex>
    </>
  )
}
