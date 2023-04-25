import { VStack, Text, Center, Heading, ScrollView, Stack } from "native-base";
import React from "react";
import LogoSvg from "@assets/logo.svg";
import Input from "@components/Input";
import Button from "@components/Button";

const SignIn: React.FC = () => {
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
      backgroundColor={"gray.7"}
    >
      <VStack bg="gray.6" px={10} pb={16} borderRadius={24}>
        <Center my={24}>
          <LogoSvg />

          <Heading fontSize={"4xl"} fontFamily={"heading"}>
            marketspace
          </Heading>

          <Text color={"gray.3"} fontSize={"sm"}>
            Seu espaço de compra e venda
          </Text>
        </Center>
        <Input placeholder="E-mail" />
        <Input placeholder="Senha" password />
        <Button title="Entrar" color="blueLight" textColor="gray.7" mt={4} />
      </VStack>
      <Stack bgColor={"gray.7"} flex={1} px={10} pb={16}>
        <Center marginTop={50}>
          <Text>Ainda não tem acesso?</Text>
          <Button
            title="Criar uma conta"
            color="gray.5"
            textColor="gray.2"
            marginTop={2}
          />
        </Center>
      </Stack>
    </ScrollView>
  );
};

export default SignIn;
