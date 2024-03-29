import Icon from "@chakra-ui/icon"
import { Image } from "@chakra-ui/image"
import { Box, Flex, Link, Spacer } from "@chakra-ui/layout"
import NextLink from "next/link"
import { MdAccountBalanceWallet, MdFormatListBulleted, MdHome, MdInsertChart, MdSettings } from "react-icons/md"
import CustomLink from "./customLink"
import CustomMenu from "./customMenu"

const Sidebar = () => {
    return (
        <Flex direction={"column"} position={"fixed"} shadow={"lg"} borderRadius={"50px"} alignItems={"center"} bottom={0} top={0} left={0} width={"12%"} overflow={"auto"} paddingY={"10"}>
            <Link href={'/'} >
                <Image src={"/griffins.png"} width={"auto"} height={50} />
            </Link>
            <Spacer />
            <CustomMenu variant="with-border">
                <NextLink href={'/'} as={'/'} >
                    <CustomLink variant={"icon-link-with-shadow"}>
                        <Icon as={MdHome} />
                    </CustomLink>
                </NextLink>
            </CustomMenu>
            <CustomMenu>
                <NextLink href={'/'} as={'/'} >
                    <CustomLink variant={"with-icon"}>
                        <Icon as={MdInsertChart} />
                    </CustomLink>
                </NextLink>
            </CustomMenu>
            <CustomMenu>
                <NextLink href={'/'} as={'/'} >
                    <CustomLink variant={"with-icon"}>
                        <Icon as={MdAccountBalanceWallet} />
                    </CustomLink>
                </NextLink>
            </CustomMenu>
            <CustomMenu>
                <NextLink href={'/'} as={'/'} >
                    <CustomLink variant={"with-icon"}>
                        <Icon as={MdFormatListBulleted} />
                    </CustomLink>
                </NextLink>
            </CustomMenu>
            <Spacer />
            <Spacer />
            <Spacer />
            <CustomMenu variant={"without-border"} >
                <NextLink href={'/'} as={'/'} >
                    <CustomLink variant={"icon-link-with-shadow"}>
                        <Icon as={MdSettings} />
                    </CustomLink>
                </NextLink>
            </CustomMenu>
        </Flex>
    );
}
export default Sidebar