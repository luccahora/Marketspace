import {
  IInputProps,
  Input as NativeBaseInput,
  FormControl,
  Stack,
  Pressable,
} from "native-base";
import React from "react";
import { Eye, EyeSlash } from "phosphor-react-native";

type Props = IInputProps & {
  errorMessage?: string | null;
  password?: boolean;
};

const Input = ({
  errorMessage = null,
  password = false,
  isInvalid,
  ...rest
}: Props) => {
  const invalid = !!errorMessage || isInvalid;
  const [show, setShow] = React.useState(true);

  return (
    <FormControl isInvalid={invalid} mb={4}>
      <Stack space={4} w="100%" alignItems="center">
        <NativeBaseInput
          bg={"gray.7"}
          h={45}
          px={4}
          borderWidth={0}
          fontSize={"md"}
          color={"gray.2"}
          fontFamily={"body"}
          placeholderTextColor={"gray.4"}
          isInvalid={invalid}
          type={show ? "text" : "password"}
          InputRightElement={
            password ? (
              <Pressable onPress={() => setShow(!show)} margin={2}>
                {show ? (
                  <Eye color={"#5F5B62"} size={20} />
                ) : (
                  <EyeSlash color={"#5F5B62"} size={20} />
                )}
              </Pressable>
            ) : undefined
          }
          _invalid={{ borderWidth: 1, borderColor: "red" }}
          _focus={{
            bg: "gray.7",
            borderWidth: 1,
            borderColor: "gray.3",
          }}
          {...rest}
        />
      </Stack>

      <FormControl.ErrorMessage>{errorMessage}</FormControl.ErrorMessage>
    </FormControl>
  );
};

export default Input;
