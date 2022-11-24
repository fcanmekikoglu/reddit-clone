import { Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase/clientApp";

const OAuthButtons: React.FC = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  return (
    <Flex direction={"column"} width="100%" mb={4}>
      <Button
        onClick={() => signInWithGoogle()}
        isLoading={loading}
        variant={"oauth"}
      >
        <Image src="/images/googlelogo.png" height={"20px"} mr={4} />
      </Button>
      <Button variant={"oauth"} mt={2}>
        Some other provider
      </Button>
      {error && <Text>{error?.message}</Text>}
    </Flex>
  );
};

export default OAuthButtons;
