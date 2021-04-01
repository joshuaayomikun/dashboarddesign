import Icon from "@chakra-ui/icon"
import { Image } from "@chakra-ui/image"
import { Flex, Link, Spacer } from "@chakra-ui/layout"
import NextLink from "next/link"
import { MdAccountBalanceWallet, MdFormatListBulleted, MdHome, MdInsertChart, MdSettings } from "react-icons/md"
import CustomLink from "./customLink"
import CustomMenu from "./customMenu"

const Sidebar = () => {
    return (
        <Flex direction={"column"} position={"relative"} shadow={"lg"} borderRadius={"50px"} height={"100vh"} alignItems={"center"} width={"250px"} paddingY={"10"}>
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