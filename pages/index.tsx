import Icon from '@chakra-ui/icon'
import { Input, InputGroup, InputRightElement } from '@chakra-ui/input'
import { Box, Flex, Spacer, Text, } from '@chakra-ui/layout'
import { MdSearch } from 'react-icons/md'
import Card from '../components/card'
import CustomLink from '../components/customLink'
import { FcSimCardChip } from "react-icons/fc";
import {FaSpotify} from "react-icons/fa"
import { Column } from '@amcharts/amcharts4/charts'
import {
  Table,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption
} from '@chakra-ui/react'
import NextLink from 'next/link'
export default function Home() {
  return (<>
    <Flex justifyContent={"center"} width={"100%"} height={"52px"}>
      <InputGroup height={"62px"} width="100%" shadow={"lg"} borderRadius={"22px"} >
        <Input type="tel" height={"62px"} placeholder="Search" borderRadius={"22px"} />
        <InputRightElement top={"10px"}
          right={"8px"}
          pointerEvents="none"
          children={<CustomLink bg={"brand.primary"} variant={"with-icon"}><Icon as={MdSearch} /></CustomLink>}
        />
      </InputGroup>
    </Flex>
    <Flex >
      <Card bg={"brand.primary"} color={"white"} title={"Cards"} borderRadius={"20px"} width={"290px"}>
        <Flex padding={"5px"} direction={"column"}>
          <Flex direction={"row"}>
            <Flex direction={"column"}>
              <Text fontSize={"xs"} color={"gray.300"}>Balance</Text>
              <Text fontSize={"sm"}>$4,890</Text>
            </Flex>
            <Spacer />
            <Flex position={"relative"} width={"70px"}>
              <Box boxSize={"30px"} right={"20px"} position={"absolute"} borderRadius={"full"} bg={"#ffffff63"}></Box>
              <Box boxSize={"30px"} right={"0px"} position={"absolute"} borderRadius={"full"} bg={"#ffffff63"}></Box>
            </Flex>
          </Flex>
          <Spacer />
          <Flex paddingTop={"20px"} alignItems={"center"} width={"195px"} fontSize={"15px"}>
            <Box marginX={"0.5"} boxSize={"5px"} bg={"white"} borderRadius={"full"}></Box>
            <Box marginX={"0.5"} boxSize={"5px"} bg={"white"} borderRadius={"full"}></Box>
            <Box marginX={"0.5"} boxSize={"5px"} bg={"white"} borderRadius={"full"}></Box>
            <Box marginX={"0.5"} boxSize={"5px"} bg={"white"} borderRadius={"full"}></Box>
            <Spacer />
            <Box marginX={"0.5"} boxSize={"5px"} bg={"white"} borderRadius={"full"}></Box>
            <Box marginX={"0.5"} boxSize={"5px"} bg={"white"} borderRadius={"full"}></Box>
            <Box marginX={"0.5"} boxSize={"5px"} bg={"white"} borderRadius={"full"}></Box>
            <Box marginX={"0.5"} boxSize={"5px"} bg={"white"} borderRadius={"full"}></Box>
            <Spacer />
            <Box marginX={"0.5"} boxSize={"5px"} bg={"white"} borderRadius={"full"}></Box>
            <Box marginX={"0.5"} boxSize={"5px"} bg={"white"} borderRadius={"full"}></Box>
            <Box marginX={"0.5"} boxSize={"5px"} bg={"white"} borderRadius={"full"}></Box>
            <Box marginX={"0.5"} boxSize={"5px"} bg={"white"} borderRadius={"full"}></Box>
            <Spacer />
            <Text>3456</Text>
          </Flex>
          <Spacer />
          <Flex paddingTop={"20px"} fontSize={"13px"} alignItems={"center"}>
            <Flex direction={"column"} >
              <Text textTransform={"capitalize"} fontSize={"90%"} color={"gray.300"}>valid thru</Text>
              <Text>09/24</Text>
            </Flex>
            <Spacer />
            <Flex direction={"column"}>
              <Text fontSize={"90%"} textTransform={"capitalize"} color={"gray.300"}>card holder</Text>
              <Text>John Doe</Text>
            </Flex>
            <Spacer />
            <Icon fontSize={"40px"} as={FcSimCardChip} />
          </Flex>
        </Flex>
      </Card>
      <Flex>
        <Flex width={"265px"} position={"relative"} transform={"rotate(-90deg);"}>
          <Card top={"0"} zIndex={"10"} position={"absolute"} width={"191px"} height={"90px"} display={"flex"} borderRadius={"2xl"}>
            <Box position={"relative"}>
              <Box boxSize={"30px"} left={"0px"} position={"absolute"} borderRadius={"full"} bg={"#ea0119"}></Box>
              <Box boxSize={"30px"} left={"20px"} position={"absolute"} borderRadius={"full"} bg={"#f79e19"}></Box>
            </Box>
            <Spacer />
            <Flex alignItems={"baseline"}>
              <Box marginX={"0.5"} boxSize={"5px"} bg={"gray"} borderRadius={"full"}></Box>
              <Box marginX={"0.5"} boxSize={"5px"} bg={"gray"} borderRadius={"full"}></Box>
              <Box marginX={"0.5"} boxSize={"5px"} bg={"gray"} borderRadius={"full"}></Box>
              <Box marginX={"0.5"} boxSize={"5px"} bg={"gray"} borderRadius={"full"}></Box>
              <Text paddingLeft={"10px"} fontSize={"8px"}>3456</Text>
            </Flex>
          </Card>
          <Card top={"80px"} zIndex={"20"} position={"absolute"} width={"191px"} height={"90px"} display={"flex"} borderRadius={"2xl"}>
            <Box position={"relative"}>
              <Text paddingX={"10px"} fontSize={"21px"} fontWeight={"900"} color={"gray"}>
                VISA
                </Text>
            </Box>
            <Spacer />
            <Flex alignItems={"baseline"}>
              <Box marginX={"0.5"} boxSize={"5px"} bg={"gray"} borderRadius={"full"}></Box>
              <Box marginX={"0.5"} boxSize={"5px"} bg={"gray"} borderRadius={"full"}></Box>
              <Box marginX={"0.5"} boxSize={"5px"} bg={"gray"} borderRadius={"full"}></Box>
              <Box marginX={"0.5"} boxSize={"5px"} bg={"gray"} borderRadius={"full"}></Box>
              <Text paddingLeft={"10px"} fontSize={"8px"}>3456</Text>
            </Flex>
          </Card>
          <Card top={"180px"} position={"absolute"} width={"191px"} height={"90px"} display={"flex"} borderRadius={"2xl"}>
            <Box position={"relative"}>
              <Box boxSize={"30px"} left={"0px"} position={"absolute"} borderRadius={"full"} bg={"#ea0119"}></Box>
              <Box boxSize={"30px"} left={"20px"} position={"absolute"} borderRadius={"full"} bg={"#f79e19"}></Box>
            </Box>
            <Spacer />
            <Flex alignItems={"baseline"}>
              <Box marginX={"0.5"} boxSize={"5px"} bg={"gray"} borderRadius={"full"}></Box>
              <Box marginX={"0.5"} boxSize={"5px"} bg={"gray"} borderRadius={"full"}></Box>
              <Box marginX={"0.5"} boxSize={"5px"} bg={"gray"} borderRadius={"full"}></Box>
              <Box marginX={"0.5"} boxSize={"5px"} bg={"gray"} borderRadius={"full"}></Box>
              <Text paddingLeft={"10px"} fontSize={"8px"}>3456</Text>
            </Flex>
          </Card>
          <Card top={"270px"} position={"absolute"} width={"191px"} height={"90px"} display={"flex"} borderRadius={"2xl"}>
            <Box position={"relative"}>
              <Box boxSize={"30px"} left={"0px"} position={"absolute"} borderRadius={"full"} bg={"#ea0119"}></Box>
              <Box boxSize={"30px"} left={"20px"} position={"absolute"} borderRadius={"full"} bg={"#f79e19"}></Box>
            </Box>
            <Spacer />
            <Flex alignItems={"baseline"}>
              <Box marginX={"0.5"} boxSize={"5px"} bg={"gray"} borderRadius={"full"}></Box>
              <Box marginX={"0.5"} boxSize={"5px"} bg={"gray"} borderRadius={"full"}></Box>
              <Box marginX={"0.5"} boxSize={"5px"} bg={"gray"} borderRadius={"full"}></Box>
              <Box marginX={"0.5"} boxSize={"5px"} bg={"gray"} borderRadius={"full"}></Box>
              <Text paddingLeft={"10px"} fontSize={"8px"}>3456</Text>
            </Flex>
          </Card>
        </Flex>
      </Flex>
    </Flex>
    <Flex paddingY={"10"} direction={"column"}>
      <Text>
        Transactions
      </Text>
      <Table>
        <Tbody>
          <Tr>
            <Td border={"none"}>
              <NextLink href={"javaScript"}>
                <CustomLink variant={"icon-link-with-shadow"}>
                  <Icon color={"green.400"} as={FaSpotify} />
                </CustomLink>
              </NextLink>
              <Text as={"span"} paddingLeft={"6"}>
                Spotify
              </Text>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </Flex>
  </>
  )
}
