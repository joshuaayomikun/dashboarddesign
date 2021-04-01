import { Box, Flex, Icon, Input, Spacer, Text } from "@chakra-ui/react"
import NotificationBell from "../components/notificationBell"
import RoundedImage from "../components/roundedImage"
import Sidebar from "../components/sidebar"
import Card from "../components/card"
import { MdCheckCircle, MdChevronRight, MdCreditCard } from "react-icons/md"
import CustomLink from "../components/customLink"

import React, { useRef, useLayoutEffect } from 'react';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);


const Layout = (props) => {
    const chart = useRef(null);

  useLayoutEffect(() => {
    let x = am4core.create("chartdiv", am4charts.XYChart);

    x.paddingRight = 20;

    let data = [];
    let visits = 10;

    for (let i = 1; i < 366; i++) {
      visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
      data.push({ date: new Date(2018, 0, i), name: "name" + i, value: visits });
    }

    x.data = data;

    let dateAxis = x.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.grid.template.location = 0;

    let valueAxis = x.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    valueAxis.renderer.minWidth = 35;

    let series = x.series.push(new am4charts.LineSeries());
    series.dataFields.dateX = "date";
    series.dataFields.valueY = "value";
    series.tooltipText = "{valueY.value}";
    x.cursor = new am4charts.XYCursor();

    let scrollbarX = new am4charts.XYChartScrollbar();
    scrollbarX.series.push(series);
    x.scrollbarX = scrollbarX;

    chart.current = x;

    return () => {
      x.dispose();
    };
  }, []);
    return <Box>
        <Flex>
            <Sidebar />
            <Flex width={"100%"} padding={"10"} direction={"column"}>
                {props.children}
            </Flex>
            <Flex marginLeft="auto" padding={"10"} direction="column">
                <Flex maxHeight={"14"} alignItems="center">
                    <RoundedImage src={"/myprofile.png"} variant={"small-avatar-with-Shadow"} />
                    <Text paddingX={"2"} fontWeight="extrabold">John Doe</Text>
                    <NotificationBell />
                </Flex>
                <Card title="Transfer money">
                    <Flex direction={"row"}>
                        <Icon as={MdCreditCard} color={"white"} fontSize={"2xl"} bg={"brand.primary"} marginRight={"1.5"} />
                        <Text >Quick transfer</Text>
                        <Flex marginLeft={"20px"} position={"relative"} width={"178px"} margin={0} height="70px" >
                            <RoundedImage position={"absolute"} left={0} variant={"small-avatar-with-Shadow"} src={"/myprofile.png"} />
                            <RoundedImage position={"absolute"} left={"42px"} variant={"small-avatar-with-Shadow"} src={"/myprofile.png"} />
                            <RoundedImage position={"absolute"} left={"84px"} variant={"small-avatar-with-Shadow"} src={"/myprofile.png"} />
                            <RoundedImage position={"absolute"} left={"126px"} variant={"small-avatar-with-Shadow"} src={"/myprofile.png"} />
                            <Icon position={"absolute"} left={"175px"} fontSize={"2xl"} as={MdCheckCircle} color="brand.primary" />
                        </Flex>
                    </Flex>
                    <Flex alignItems={"center"} shadow={"md"} padding={"0px 5px"} marginY={"15px"} borderRadius={"2xl"} bg={"#f6f6f6"}>
                        <Input variant="unstyled" width={"50px"} padding={"5px"} placeholder="1234" />
                        <Input variant="unstyled" width={"50px"} padding={"5px"} placeholder="5321" />
                        <Input variant="unstyled" width={"50px"} padding={"5px"} placeholder="6742" />
                        <Input variant="unstyled" width={"50px"} padding={"5px"} placeholder="1265" />
                        <Text paddingX={"10px"} fontSize={"21px"} fontWeight={"900"} color={"gray"}>
                            VISA
                        </Text>
                        <Spacer />
                        <CustomLink variant={"with-icon"} bg={"brand.primary"}>
                            <Icon as={MdChevronRight} />
                        </CustomLink>
                    </Flex>

                </Card>
                <Card title="Transaction details">
                    <Box id={"chartdiv"} height={"250px"} width={"auto"}></Box>
                </Card>
            </Flex>
        </Flex>
    </Box>
}

export default Layout