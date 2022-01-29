import { Box, Text } from '@chakra-ui/react';

import './App.css';
import { colors } from './css-colors';
import { FadeInSection } from './FadeInSection';
import { FadeInSectionChakra } from './FadeInSectionChakra';

export const App = () => {
  return (
    <div className="App">
      <h1>All the CSS Colors!</h1>

      {/* {colors.map(color => (
        <FadeInSection>
          <div className="box" style={{ backgroundColor: color }}>
            <span>{color}</span>
          </div>
        </FadeInSection>
      ))} */}

      {colors.map(color => (
        <FadeInSectionChakra>
          <Box
            p={50}
            m={"20px 0"}
            bgColor={color}>
            <Text
              bgColor={"rgba(255,255,255,0.5)"}
              display={"inline-block"}
              p={2}
              borderRadius={3}>
              {color}
            </Text>
          </Box>
        </FadeInSectionChakra>
      ))}
    </div>
  );
};

export default App;
