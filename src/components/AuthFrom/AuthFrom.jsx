import { Button, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { useState } from "react";

const AuthFrom = () => {
  const [isLogin, setLogin] = useState(true);
  return (
    <>
      <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <VStack spacing={4}>
          <img src="/logo.png" height={24} curosr={"pointer"} alt="" />
          <input placeholder="Email" fontSize={14} type="email" />
          <input placeholder="Password" fontSize={14} type="password" />
          {!isLogin ? (
            <input
              placeholder="Confirm Password"
              fontSize={14}
              type="password"
            />
          ) : null}

          <Button
            w={"full"}
            colorScheme="blue"
            size={"sm"}
            fontSize={14}
            onClick={"handleAuth"}
          >
            {isLogin ? "Log in" : "Singn Up"}
          </Button>

          {/*==================================== OR ========================================= */}
          <Flex
            justifyContent={"center"}
            alignItems={"center"}
            my={4}
            gap={1}
            w={"full"}
          >
            <Box flex={2} h={"1px"} fontSize={2} bg={"gray.400"}></Box>
            <Text mx={1} color={"white"}>
              OR
            </Text>
            <Box flex={2} h={"1px"} fontSize={2} bg={"gray.400"}></Box>
          </Flex>
          <Flex></Flex>
        </VStack>
      </Box>
    </>
  );
};

export default AuthFrom;
