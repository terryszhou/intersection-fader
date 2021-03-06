import React from "react";
import { Box, VStack, HStack, Text, Circle } from "@chakra-ui/react";

import { colors } from "./css-colors";
import { FadeSide } from "./FadeSide";
import { FadeSideChakra } from "./FadeSideChakra";

export const Horizontal = () => {
  return (
    <div className="App">
      <div style={styles.rowContainer}>
        <div style={styles.impContainerWrap}>
          <div style={styles.impContainer}>
            <h1 style={styles.rowHeader}>Standard Implementation</h1>
          </div>
        </div>
        {colors.map(color => (
          <FadeSide>
            <div className="box2" style={{ backgroundColor: color }}>
              <span>{color}</span>
              <div style ={{
                width: "50px",
                height: "50px",
                backgroundColor: color,
                borderRadius: "50%",
                filter: "invert(1)",
              }}/>
            </div>
          </FadeSide>
        ))}
      </div>
      <HStack overflow={"scroll"} h={"50vh"}>
        <Box
          w={"200px"}
          h={"300px"}
          p={"6px"}
          bg={"linear-gradient(to bottom right, rgb(234,123,55), rgb(200,34,58), rgb(78,143,150))"}
          borderRadius={"25px"}
          marginRight={"14px"}>
          <Box
            w={"100%"}
            h={"100%"}
            p={"1rem"}
            bgColor={"black"}
            borderRadius={"20px"}>
            <Text
              marginTop={"140px"}
              fontSize={"20px"}
              fontWeight={"bold"}
              color={"white"}>
              Chakra Implementation
            </Text>
          </Box>
        </Box>
        {colors.map(color => (
          <FadeSideChakra>
            <VStack
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-around"}
              w={"200px"}
              h={"300px"}
              borderRadius={"25px"}
              mx={"-14px"}
              bgImage={"linear-gradient(to left, rgba(0,0,0,0.5) 10%, rgba(0,0,0,0))"}
              bgColor={color}
              boxShadow={"-2rem 0 3rem -2rem rgba(0,0,0,0.5)"}
              transitionDuration={"0.2s"}
              _hover={{
                transform: "translate(-.5rem,-1rem) rotate(3deg)",
                transitionDuration: "0.2s"
              }}>
              <Text
                bgColor={"rgba(0,0,0,0.5)"}
                color={"white"}
                p={"5px"}
                borderRadius={"3px"}
                fontWeight={"bold"}>
                {color}
              </Text>
              <Circle
                w={50}
                h={50}
                bgColor={color}
                filter={"invert(1)"}
              />
            </VStack>
          </FadeSideChakra>
        ))}
      </HStack>
    </div>
  );
};

const styles = {
  rowContainer: {
    height: "50vh",
    display: "flex",
    alignItems: "center",
    overflow: "scroll",
    borderRadius: "25px",
  },
  rowHeader: {
    marginTop: "140px",
    fontSize: "20px",
    fontWeight: "bold",
    color: "white",
  },
  impContainerWrap: {
    width: "200px",
    height: "300px",
    background: "linear-gradient(to bottom right, rgb(234,123,55), rgb(200,34,58), rgb(78,143,150))",
    padding: "6px",
    borderRadius: "25px",
    marginRight: "20px",
    // boxShadow: `
    //   0 0 0 10px #ee6352,
    //   0 0 0 20px #d45379,
    //   0 0 0 30px #a4558f,
    //   0 0 0 40px #6d588e,
    //   0 0 0 50px #405378
    // `,
  },
  impContainer: {
    width: "100%",
    height: "100%",
    borderRadius: "20px",
    backgroundColor: "black",
    padding: "1rem",
  },
};