import { Image, IImageProps, Badge, Pressable } from "native-base";
import React from "react";
import { PencilSimpleLine } from "phosphor-react-native";

type Props = IImageProps & { size: number; hasBagde?: boolean };

const UserPhoto = ({ size, hasBagde, ...rest }: Props) => {
  return (
    <>
      <Image
        w={size}
        h={size}
        rounded={"full"}
        borderWidth={3}
        borderColor="#647AC7"
        {...rest}
      />

      {hasBagde && (
        <Badge
          style={{
            borderRadius: 50,
            width: 40,
            height: 40,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#647AC7",
          }}
          marginTop={-41}
          marginLeft={65}
        >
          <PencilSimpleLine color={"#EDECEE"} size={20} />
        </Badge>
      )}
    </>
  );
};

export default UserPhoto;
