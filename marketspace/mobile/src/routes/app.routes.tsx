import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from "@react-navigation/bottom-tabs";
import { Adverts } from "@screens/Adverts";
import { Home } from "@screens/Home";
import { useTheme } from "native-base";
import { SignOut } from "@screens/SignOut";
import { House, Tag, SignOut as SignOutIcon } from "phosphor-react-native";
import { Platform } from "react-native";

type AppRoutes = {
  home: undefined;
  adverts: undefined;
  signOut: undefined;
};

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();

export function AppRoutes() {
  const { colors } = useTheme();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: colors.gray[200],
          borderTopWidth: 0,
          height: Platform.OS === "android" ? "auto" : 96,
        },
      }}
    >
      <Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? <House size={25} weight="bold" /> : <House size={25} />,
        }}
      />
      <Screen
        name="adverts"
        component={Adverts}
        options={{
          tabBarIcon: ({ color, focused }) =>
            focused ? <Tag size={25} weight="bold" /> : <Tag size={25} />,
        }}
      />
      <Screen
        name="signOut"
        component={SignOut}
        options={{
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <SignOutIcon size={25} weight="bold" color={colors.rose[400]} />
            ) : (
              <SignOutIcon size={25} color={colors.rose[400]} />
            ),
        }}
      />
    </Navigator>
  );
}
