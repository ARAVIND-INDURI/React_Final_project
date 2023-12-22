import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Aravind!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";


const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={4}>
      <Avatar
        size="2xl"
        name="Aravind"
        src="https://media.licdn.com/dms/image/D4D03AQFCg8qKjYUw6g/profile-displayphoto-shrink_100_100/0/1673580755041?e=1708560000&v=beta&t=DL1UXdQ2gxAl2LXakIbsqr27yPmXRC4G99SC6rym75s"
      />
      <Heading as="h1" size="sm">
        {greeting}
      </Heading>
      <Heading as="h2" size="2xl">
        {bio1}
      </Heading>
      <Heading as="h2" size="2xl">
        {bio2}
      </Heading>
    </VStack>

  </FullScreenSection>
);

export default LandingSection;
