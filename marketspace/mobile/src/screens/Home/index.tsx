import UserPhoto from "@components/UserPhoto";
import { HStack, ScrollView, Text, VStack } from "native-base";
import { SafeAreaView } from "react-native";
import Profile from "@assets/profile.png";
import Button from "@components/Button";
import { Plus } from "phosphor-react-native";

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
          />
        </HStack>
      </SafeAreaView>
    </ScrollView>
  );
}
