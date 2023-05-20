import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Input, Button, Icon, Divider, Container, HStack } from "native-base";
import { Faders, MagnifyingGlass } from "phosphor-react-native";

const SeachInput = () => {
  return (
    <View>
      <Input
        placeholder="Buscar anúncio"
        bg={"gray.7"}
        h={45}
        px={5}
        borderWidth={0}
        fontSize={"md"}
        color={"gray.2"}
        fontFamily={"body"}
        placeholderTextColor={"gray.4"}
        InputRightElement={
          <HStack marginRight={3}>
            <TouchableOpacity>
              <MagnifyingGlass size={20} weight="bold" />
            </TouchableOpacity>
            <Divider
              height={5}
              marginLeft={3}
              marginRight={3}
              orientation="vertical"
            />
            <TouchableOpacity>
              <Faders size={20} weight="bold" />
            </TouchableOpacity>
          </HStack>
        }
        _focus={{
          bg: "gray.7",
          borderWidth: 1,
          borderColor: "gray.6",
        }}
      />
    </View>
  );
};

export default SeachInput;
