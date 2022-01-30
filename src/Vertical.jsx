import { Flex, Box, Text } from "@chakra-ui/react";
import React from "react";

import { FadeInSection } from "./FadeInSection";
import { FadeInSectionChakra } from "./FadeInSectionChakra";
import { colors } from "./css-colors";

export const Vertical = () => {
  return (
    <div className="App">
      <Flex>
        <div style={{ width: "50%", margin: "0 2px" }}>
          <div style={styles.impContainerWrap}>
            <div style={styles.impContainer}>
              <h1 style={styles.columnHeader}>Standard Implementation</h1>
            </div>
          </div>
          {colors.map(color => (
            <FadeInSection>
              <div className="box" style={{ backgroundColor: color }}>
                <span>{color}</span>
              </div>
            </FadeInSection>
          ))}
        </div>
        <Box w={"50%"} mx={2}>
          <Box
            bg={"linear-gradient(to bottom right, rgb(234,123,55), rgb(200,34,58), rgb(78,143,150))"}
            p={"6px"}
            borderRadius={"25px"}
            marginBottom={"2rem"}>
            <Box
              w={"100%"}
              borderRadius={"20px"}
              backgroundColor={"black"}
              p={"1rem"}>
              <Text
                p={"2rem"}
                fontSize={"20px"}
                fontWeight={"bold"}
                color={"white"}>
                Chakra Implementation
              </Text>
            </Box>
          </Box>
          {colors.map(color => (
            <FadeInSectionChakra>
              <Box
                p={"50px"}
                m={"-20px 0"}
                bgColor={color}
                bgImage={"linear-gradient(to top, rgba(0,0,0,0.5) 10%, rgba(0,0,0,0))"}
                boxShadow={"-2rem 0 3rem -2rem rgba(0,0,0,0.5)"}
                borderRadius={"25px"}
                transitionDuration={"0.2s"}
                _hover={{
                  transform: "translate(-.5rem,-.5rem) rotate(1deg)",
                  transitionDuration: "0.2s",
                }}
              >
                <Text
                  bgColor={"rgb(0,0,0,0.5)"}
                  color={"white"}
                  px={"5px"}
                  display={"inline-block"}
                  borderRadius={3}
                  fontWeight={"bold"}>
                  {color}
                </Text>
              </Box>
            </FadeInSectionChakra>
          ))}
        </Box>
      </Flex>
    </div>
  );
};

const styles = {
  columnHeader: {
    padding: "2rem",
    fontSize: "20px",
    fontWeight: "bold",
    color: "white",
  },
  impContainerWrap: {
    background: "linear-gradient(to bottom right, rgb(234,123,55), rgb(200,34,58), rgb(78,143,150))",
    padding: "6px",
    borderRadius: "25px",
    marginBottom: "2rem",
  },
  impContainer: {
    width: "100%",
    borderRadius: "20px",
    backgroundColor: "black",
    padding: "1rem",
  },
};