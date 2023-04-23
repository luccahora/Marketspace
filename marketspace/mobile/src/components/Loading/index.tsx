import { Center, Spinner } from "native-base";
import React from "react";

export function Loading() {
  return (
    <Center flex={1}>
      <Spinner color="cyan.700" />
    </Center>
  );
}
