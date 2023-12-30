import { Box, Center, Container, Flex, VStack } from "@chakra-ui/react";
import AuthFrom from "../../components/AuthFrom/AuthFrom";
const AuthPage = () => {
  return (
    <Flex minH={"100vh"} justifyContent={"Center"} alignItems={"center"} px={4}>
      <Container maxW={"container.md"} padding={0}>
        <Flex justifyContent={"center"} alignItems={"center"} gap={10}>
          {/* Left Hand-Side */}
          <Box display={{ base: "none", md: "block" }}>
            <img src="/auth.png" h={650} />
          </Box>

          {/* Right hand-side */}

          <VStack spacing={4} align={"stretch"}>
            <AuthFrom />
            <Box textAlign={"center"}> Get the app </Box>
            <Flex h={"10"} gap={5} justifyContent={"center"}>
              <img src="/playstore.png" alt="" />
              <img src="/microsoft.png" alt="" />
            </Flex>
          </VStack>
        </Flex>
      </Container>
    </Flex>
  );
};

export default AuthPage;
