import React, { useState } from "react";
import {
  Text,
  NativeBaseProvider,
  Box,
  Flex,
  Image,
  ScrollView,
  Divider,
  Progress,
  Pressable,
  Button,
  Icon,
} from "native-base";
function DialPad(props) {
  // console.log(props.props);
  const [pressed, setPressed] = useState(1);
  //   const navigation = useNavigation();
  const Links = [
    {
      title: "New Arrivals",
      url: "https://www.google.com",
      nav: "Base Inprocess",
      display: true,
    },
    {
      title: "Vehicle Center",
      url: "https://www.google.com",
      nav: "Vehicle Center",
      //   img: require("../../Img/car.png"),
      display: true,
    },
    {
      title: "KMC Housing",
      url: "https://www.google.com",
      nav: "KMC Housing",
      //   img: require("../../Img/house.png"),
      display: true,
    },
    {
      title: "Restaurants",
      url: "https://www.google.com",
      nav: "BaseRestaurants",
      //   img: require("../../Img/restaurant.png"),
      display: true,
    },
    {
      title: "Entertainment",
      subtitle: "Coming Soon",
      url: "https://www.google.com",
      nav: "Entertainment",
      //   img: require("../../Img/entertainment.png"),
      display: true,
    },
    {
      title: "Base Map",
      url: "https://www.google.com",
      nav: "RamsteinMap",
      //   img: require("../../Img/map.png"),
      display: true,
    },
    // {
    //   title: "Leadership",
    //   url: "https://www.google.com",
    //   nav: "ISS",
    //   img: require("../../Img/organization-chart.png"),
    //   display: props.props == "693ISS" ? true : false,
    // },
  ];
  return (
    <>
      <Flex
        direction="row"
        wrap="wrap"
        justifyContent="space-evenly"
        bg="#fff"
        p="4"
      >
        {Links.map((link, key) => {
          // console.log(link.display)

          if (!link.display) {
            return;
          }
          return (
            <Pressable
              shadow={4}
              // onPress={() => setPressed(key)}
              m="4"
              pt="2"
              height={115}
              borderRadius={100}
              key={key}
              w="35%"
              alignItems="center"
              backgroundColor="#FFFFFF"
              //   onPress={() => navigation.navigate(link.nav)}
            >
              {/* <Image source={link.img} alt="image" size={"sm"} /> */}
              <Text
                fontWeight="bold"
                fontSize="sm"
                position="absolute"
                bottom={0}
                p={1}
                w="100%"
                textAlign="center"
              >
                {link.title}
              </Text>
            </Pressable>
          );
        })}
      </Flex>
    </>
  );
}
export default () => {
  return (
    <>
      <DialPad />
    </>
  );
};
