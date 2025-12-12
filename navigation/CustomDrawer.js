import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

export default function CustomDrawer(props) {
  const handleLogout = () => {
    props.navigation.replace("Login");   // Go back to Login
  };

  return (
    <DrawerContentScrollView {...props}>
      
      <DrawerItem 
        label="Home"
        onPress={() => props.navigation.navigate("Home")}
      />

      <DrawerItem 
        label="Log Attendance"
        onPress={() => props.navigation.navigate("Log Attendance")}
      />

      <DrawerItem 
        label="About"
        onPress={() => props.navigation.navigate("About")}
      />

      <DrawerItem 
        label="Settings"
        onPress={() => props.navigation.navigate("About")}
      />

      {/* Logout Button */}
      <DrawerItem 
        label="Logout"
        onPress={handleLogout}
        style={{ marginTop: 20 }}
      />

    </DrawerContentScrollView>
  );
}
