import UserPhoto from "@components/UserPhoto";
import { HStack, ScrollView, Text, VStack } from "native-base";
import { SafeAreaView, TouchableOpacity } from "react-native";
import Profile from "@assets/profile.png";
import Button from "@components/Button";
import { Plus, Tag, ArrowRight } from "phosphor-react-native";

export function Home() {
  return (
    <ScrollView backgroundColor={"gray.6"} paddingX={5}>
      <SafeAreaView>
        <HStack>
          <UserPhoto size={45} source={Profile} marginRight={5} />
          <VStack>
            <Text fontSize={"md"} color={"gray.1"}>
              Boas vindas
            </Text>
            <Text fontSize={"md"} fontFamily={"heading"}>
              Maria!
            </Text>
          </VStack>
          <Button
            title="Criar anúncio"
            icon={<Plus color={"#EDECEE"} />}
            color="gray.1"
            textColor="gray.7"
            flex={1}
            marginLeft={5}
            fontWeight={"bold"}
          />
        </HStack>
        <Text fontSize={"md"} color={"gray.3"} marginTop={10} marginBottom={3}>
          Seus produtos anunciados para venda
        </Text>
        <HStack
          backgroundColor={"#647AC71A"}
          alignItems={"center"}
          justifyContent={"space-between"}
          height={66}
          padding={5}
          borderRadius={10}
        >
          <Text fontSize={"md"} color={"gray.3"}>
            <Tag size={25} color={"blue"} weight="bold" />
          </Text>
          <VStack>
            <Text fontSize={"lg"} color={"gray.2"} fontFamily={"heading"}>
              4
            </Text>
            <Text fontSize={"md"} color={"gray.3"} fontFamily={"body"}>
              anúncios ativos
            </Text>
          </VStack>
          <HStack alignItems={"center"}>
            <TouchableOpacity>
              <Text
                fontSize={"md"}
                color={"blue"}
                fontFamily={"heading"}
                marginRight={1}
              >
                Meus anúncios
              </Text>
            </TouchableOpacity>
            <ArrowRight size={20} color={"blue"} weight="bold" />
          </HStack>
        </HStack>
      </SafeAreaView>
    </ScrollView>
  );
}
