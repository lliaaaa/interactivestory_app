import { createDrawerNavigator } from '@react-navigation/drawer';
import DashboardScreen from '../screens/DashboardScreen';
import DailyRecordScreen from '../screens/DailyRecordScreen';
import AboutScreen from '../screens/AboutScreen';
import CustomDrawer from './CustomDrawer';
import SettingsScreen from '../screens/SettingsScreen';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />}>
      <Drawer.Screen name="Home" component={DashboardScreen} />
      <Drawer.Screen name="Log Attendance" component={DailyRecordScreen} />
      <Drawer.Screen name="About" component={AboutScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}
