import { useNavigation } from "@react-navigation/native";
import { VStack, Image, Text, Center, Heading, ScrollView } from "native-base";
import React from "react";
import LogoSvg from "@assets/logo.svg";

const SignIn: React.FC = () => {
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1} bg="gray.6" px={10} pb={16}>
        <Center my={24}>
          <LogoSvg />

          <Heading fontSize={"4xl"} fontFamily={"heading"}>
            marketspace
          </Heading>
          <Text color={"gray.3"} fontSize={"sm"}>
            Seu espaço de compra e venda
          </Text>
        </Center>
      </VStack>
    </ScrollView>
  );
};

export default SignIn;
