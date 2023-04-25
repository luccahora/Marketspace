import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "@react-navigation/native";
import { VStack, Text, Center, Heading, ScrollView } from "native-base";
import React, { useState } from "react";

import LogoSvg from "@assets/logo.svg";
import UserPhoto from "@components/UserPhoto";
import Avatar from "@assets/avatar.png";
import { TouchableOpacity } from "react-native";
import Input from "@components/Input";
import Button from "@components/Button";

const PHOTO_SIZE = 88;

const SignUp: React.FC = () => {
  const navigation = useNavigation();
  const [imageUri, setImageUri] = useState("");

  async function handleSelectImage() {
    try {
      let photoSelected = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (photoSelected.canceled) {
        return;
      }

      if (photoSelected.assets) {
        setImageUri(photoSelected.assets[0].uri);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
      backgroundColor={"gray.7"}
    >
      <VStack flex={1} bg="gray.6" px={10}>
        <Center my={24}>
          <LogoSvg width={60} />
          <Heading color={"gray.1"} fontSize={"xl"} fontFamily="heading">
            Boas vindas!
          </Heading>
          <Text textAlign={"center"} color={"gray.2"} mt={2} mb={10}>
            Crie sua conta e use o espaço para comprar itens variados e vender
            seus produtos
          </Text>

          <TouchableOpacity onPress={handleSelectImage}>
            {imageUri ? (
              <UserPhoto
                size={PHOTO_SIZE}
                source={{ uri: imageUri }}
                alt={"Foto do usuario"}
              />
            ) : (
              <UserPhoto
                size={PHOTO_SIZE}
                source={Avatar}
                alt={"Foto do usuario"}
              />
            )}
          </TouchableOpacity>
          <Input placeholder="Nome" marginTop={5} />
          <Input placeholder="E-mail" />
          <Input placeholder="Telefone" />
          <Input placeholder="Senha" password />
          <Input placeholder="Confirmar senha" password />
          <Button
            title="Criar"
            color="gray.1"
            textColor="gray.7"
            marginTop={2}
          />
          <Text textAlign={"center"} color={"gray.2"} mt={10} mb={10}>
            Já tem uma conta?
          </Text>
          <Button
            title="Ir para o login"
            color="gray.5"
            textColor="gray.1"
            marginTop={2}
            onPress={() => navigation.goBack()}
          />
        </Center>
      </VStack>
    </ScrollView>
  );
};

export default SignUp;
