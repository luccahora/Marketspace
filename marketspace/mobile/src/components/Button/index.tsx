import { Button as ButtonNativeBase, IButtonProps, Text } from "native-base";
import React from "react";

type Props = IButtonProps & {
  title: string;
  color: string;
  textColor: string;
};

const Button = ({ title, variant, color, textColor, ...rest }: Props) => {
  return (
    <ButtonNativeBase
      w={"full"}
      bg={color}
      _pressed={{ bg: "gray.5" }}
      {...rest}
    >
      <Text fontFamily={"heading"} fontSize={"sm"} color={textColor}>
        {title}
      </Text>
    </ButtonNativeBase>
  );
};

export default Button;
