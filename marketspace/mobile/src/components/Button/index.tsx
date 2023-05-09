import {
  Button as ButtonNativeBase,
  Container,
  Divider,
  HStack,
  IButtonProps,
  Text,
} from "native-base";
import React, { ReactElement } from "react";
import { IconProps } from "phosphor-react-native";

type Props = IButtonProps & {
  title: string;
  color: string;
  textColor: string;
  icon?: ReactElement<IconProps>;
};

const Button = ({ title, variant, color, textColor, icon, ...rest }: Props) => {
  return (
    <ButtonNativeBase
      w={"full"}
      bg={color}
      _pressed={{ bg: "gray.5" }}
      {...rest}
    >
      <HStack>
        {icon && <Container marginRight={2}>{icon}</Container>}
        <Text fontFamily={"heading"} fontSize={"sm"} color={textColor}>
          {title}
        </Text>
      </HStack>
    </ButtonNativeBase>
  );
};

export default Button;
