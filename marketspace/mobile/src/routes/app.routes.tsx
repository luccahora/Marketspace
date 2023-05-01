import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from "@react-navigation/bottom-tabs";
import { Adverts } from "@screens/Adverts";
import { Home } from "@screens/Home";

type AppRoutes = {
  home: undefined;
  adverts: undefined;
};

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();

export function AppRoutes() {
  return (
    <Navigator>
      <Screen name="home" component={Home} />
      <Screen name="adverts" component={Adverts} />
    </Navigator>
  );
}
