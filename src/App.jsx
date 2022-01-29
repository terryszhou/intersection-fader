import { Box, Text, Header, Flex } from '@chakra-ui/react';

import './App.css';
import { colors } from './css-colors';
import { FadeInSection } from './FadeInSection';
import { FadeInSectionChakra } from './FadeInSectionChakra';

export const App = () => {
  return (
    <div className="App">
      <h1>All the CSS Colors!</h1>
      <Flex>
        <div style={{ width: "50%", margin: "0 2px" }}>
          <h1>Standard Implementation</h1>
          {colors.map(color => (
            <FadeInSection>
              <div className="box" style={{ backgroundColor: color }}>
                <span>{color}</span>
              </div>
            </FadeInSection>
          ))}
        </div>
        <Box w={"50%"} mx={2}>
          <Text>Chakra Implementation</Text>
          {colors.map(color => (
            <FadeInSectionChakra>
              <Box
                p={"50px"}
                m={"20px 0"}
                bgColor={color}>
                <Text
                  bgColor={"rgba(255,255,255,0.5)"}
                  display={"inline-block"}
                  p={"5px"}
                  borderRadius={3}>
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
