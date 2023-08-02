import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator,DrawerContentScrollView, DrawerItemList, DrawerItem  } from '@react-navigation/drawer';
import { View, Text, Linking } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/AntDesign';
import Doctor from './DoctorComponent';
import Service from './ServiceComponent';

function TabNavigatorHome() {
  const TabNavigator = createBottomTabNavigator();
  return (
    <TabNavigator.Navigator initialRouteName='Home'>
      <TabNavigator.Screen name='DoctorTab' component={DoctorNavigatorScreen}
        options={{
          tabBarActiveTintColor: '#00d9a5',
          tabBarInactiveTintColor: '#ccc',
          title:'Bác sĩ',
          headerShown: false,
          tabBarIcon: ({ focused, size }) => (<Icon name='user' type='font-awesome' size={size} color={focused ? '#00d9a5' : '#ccc'} />)
        }} />
      <TabNavigator.Screen name='Home' component={Home}
        options={{
          tabBarActiveTintColor: '#00d9a5',
          tabBarInactiveTintColor: '#ccc',
          title:'Trang chủ',
          headerShown: false,
          tabBarIcon: ({ focused, size }) => (<Icon name='home' type='font-awesome' size={size} color={focused ? '#00d9a5' : '#ccc'} />)
        }} />
      <TabNavigator.Screen name='Service' component={Service}
        options={{
          tabBarActiveTintColor: '#00d9a5',
          tabBarInactiveTintColor: '#ccc',
          title:'Dịch vụ',
          headerShown: false,
          tabBarIcon: ({ focused, size }) => (<Icon name='bars' type='font-awesome' size={size} color={focused ? '#00d9a5' : '#ccc'} />)
        }} />
    </TabNavigator.Navigator>
  );
}

import Login from './LoginComponent';
import Register from './RegisterComponent';
function TabNavigatorScreen() {
  const TabNavigator = createBottomTabNavigator();
  return (
    <TabNavigator.Navigator initialRouteName='Login'>
      <TabNavigator.Screen name='Login' component={Login}
        options={{
          tabBarActiveTintColor: '#00d9a5',
          tabBarInactiveTintColor: '#ccc',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (<Icon name='login' type='font-awesome' size={size} color={color} />)
        }} />
      <TabNavigator.Screen name='Register' component={Register}
        options={{
          tabBarActiveTintColor: '#00d9a5',
          tabBarInactiveTintColor: '#ccc',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (<Icon name='adduser' type='font-awesome' size={size} color={color} />)
        }} />
    </TabNavigator.Navigator>
  );
}


function LoginNavigatorScreen() {
  const LoginNavigator = createStackNavigator();
  return (
    <LoginNavigator.Navigator initialRouteName='LoginRegister'
    screenOptions={{ headerStyle: { backgroundColor: '#transparent',elevation: 0},
    headerTintColor: 'grey',
    headerTitleAlign: 'center',
    title: 'Đăng nhập',
    headerTitleStyle: { color: 'grey' }}}>
      <LoginNavigator.Screen name='LoginRegister' component={TabNavigatorScreen}
        options={({ navigation }) => ({
          headerTitle: 'Login',
          headerLeft: () => (<Icon name='menufold' style={{ marginLeft: 15 }} size={20} color='#696868' onPress={() => navigation.toggleDrawer()} />)
        })} />
    </LoginNavigator.Navigator>
  );
}

import Reservation from './ReservationComponent';
function ReservationNavigatorScreen() {
  const ReservationNavigator = createStackNavigator();
  return (
    <ReservationNavigator.Navigator initialRouteName='Reservation'
    screenOptions={{ headerStyle: { backgroundColor: '#transparent',elevation: 0},
    headerTintColor: 'grey',
    headerTitleAlign: 'center',
    title: 'Đặt lịch khám bệnh',
    headerTitleStyle: { color: 'grey' }}}>
      <ReservationNavigator.Screen name='Reservation' component={Reservation}
        options={({ navigation }) => ({
          headerLeft: () => (<Icon name='menufold' style={{ marginLeft: 15 }} size={20} color='#696868' onPress={() => navigation.toggleDrawer()} />)
        })} />
    </ReservationNavigator.Navigator>
  );
}


import Home from './HomeComponent';
function HomeNavigatorScreen() {
  const HomeNavigator = createStackNavigator();
  return (
    <HomeNavigator.Navigator
      initialRouteName='HomeTab'
      screenOptions={{
        headerStyle: { backgroundColor: 'transparent' ,elevation: 0},
        headerTintColor: '#696868',
        headerTitleStyle: { color: '#696868' }
      }}>
      <HomeNavigator.Screen name='HomeTab' component={TabNavigatorHome} options={({ navigation }) => ({
          headerTitle: '',
          headerLeft: () => (<Icon name='menufold' style={{ marginLeft: 15 }} size={20} color='#696868' onPress={() => navigation.toggleDrawer()} />)
        })}/>
    </HomeNavigator.Navigator>
  );
}



import Doctordetail from './DoctordetailComponent';
function DoctorNavigatorScreen() {
  const MenuNavigator = createStackNavigator();
  
  return (
    <MenuNavigator.Navigator
    screenOptions={{ headerStyle: { backgroundColor: '#transparent',elevation: 0},
    headerTintColor: 'grey',
    headerTitleAlign: 'center',
    title: 'BÁC SĨ TIÊU BIỂU',
    headerTitleStyle: { color: 'grey' }}}
      initialRouteName='Doctor'>
      <MenuNavigator.Screen name='Doctor' component={Doctor}/>
      <MenuNavigator.Screen name='Docdetail' component={Doctordetail} />
    </MenuNavigator.Navigator>
  );
}



import Contact from './ContactComponent';
function ContactNavigatorScreen() {
  const ContactNavigator = createStackNavigator();
  return (
    <ContactNavigator.Navigator
      initialRouteName='Contact'
      screenOptions={{
        headerStyle: { backgroundColor: '#transparent',elevation: 0 },
        headerTintColor: 'grey',
        headerTitleAlign: 'center',
        headerTitleStyle: { color: 'grey' }
      }}>
      <ContactNavigator.Screen name='Contact' component={Contact} 
      options={({ navigation }) => ({
        headerTitle: 'Liên hệ',
        headerLeft: () => (<Icon name='menufold' style={{ marginLeft: 15 }} size={20} color='#696868' onPress={() => navigation.toggleDrawer()} />)
      })}/>
    </ContactNavigator.Navigator>
  );
}
function CustomDrawerContent(props) {
  const users = props.users;
  const logoutUser = props.logoutUser;
  return (
    <DrawerContentScrollView {...props}>
      <View style={{ backgroundColor: 'white', height: 80, alignItems: 'center', flexDirection: 'row' }}>
        <View style={{margin: 20 , flexDirection: 'row'}}>
          <Text style={{ color: '#00d9a5', fontSize: 22, fontWeight: 'bold' }}>Tịnh Tâm </Text>
          <Text style={{ color: 'black', fontSize: 22, fontWeight: 'bold' }}>Medical </Text>
        </View>
      </View>
      <DrawerItemList {...props} />
      
        {
        users.logged === false
          ? (<DrawerItem label='Trợ giúp' icon={({ focused, size }) => <Icon name='customerservice' size={size} color={focused ? '#00d9a5' : '#ccc'} />} onPress={() => Linking.openURL('https://bsite.net/danhLC/')} />)
          : (<DrawerItem label={'[' + users.userinfo.username + '] Đăng xuất'} icon={({ focused, size }) => <Icon name='logout' type='font-awesome' size={size} color={focused ? '#00d9a5' : '#ccc'} />} onPress={() => { logoutUser(); props.navigation.navigate('HomeScreen'); }} />)
      }
    </DrawerContentScrollView>
  );
}

function MainNavigatorScreen(props) {
  const users = props.users;
  const logoutUser = props.logoutUser;
  const MainNavigator = createDrawerNavigator();
  return (
    <MainNavigator.Navigator initialRouteName='HomeScreen' drawerContent={(props) => <CustomDrawerContent {...props }  users={users} logoutUser={logoutUser}/>}>
       <MainNavigator.Screen name='HomeScreen' component={HomeNavigatorScreen}
        options={{
          drawerActiveTintColor:'#00d9a5',
          drawerInactiveTintColor:'grey',
          title: 'Trang chủ', headerShown: false,
          drawerIcon: ({ focused, size }) => (<Icon name='home' size={size} color={focused ? '#00d9a5' : '#ccc'} />)
        }} />
      <MainNavigator.Screen name='ContactScreen' component={ContactNavigatorScreen}
        options={{
          drawerActiveTintColor:'#00d9a5',
          drawerInactiveTintColor:'grey',
          title: 'Liên hệ', headerShown: false,
          drawerIcon: ({ focused, size }) => (<Icon name='contacts' size={size} color={focused ? '#00d9a5' : '#ccc'} />)
        }} /> 
        {
        users.logged === false
          ? (<MainNavigator.Screen name='LoginScreen' component={LoginNavigatorScreen} options={{ drawerActiveTintColor:'#00d9a5',drawerInactiveTintColor:'grey', title: 'Đăng nhập', headerShown: false, drawerIcon: ({ focused, size }) => (<Icon name='login' type='font-awesome' size={size} color={focused ? '#00d9a5' : '#ccc'} />) }} />)
          : null
      }
      {
        users.logged === true
          ? (<MainNavigator.Screen name='ReservationScreen' component={ReservationNavigatorScreen} options={{ drawerActiveTintColor:'#00d9a5',drawerInactiveTintColor:'grey', title: 'Đặt lịch khám', headerShown: false, drawerIcon: ({ focused, size }) => (<Icon name='carryout' type='font-awesome' size={size} color={focused ? '#00d9a5' : '#ccc'} />) }} />)
          : null
      }

    </MainNavigator.Navigator>
  );
}

// redux
import { connect } from 'react-redux';
import { logoutUser,fetchDoctors,fetchServices } from '../redux/ActionCreators';
const mapStateToProps = (state) => {
  return {
    users: state.users
  }
};


const mapDispatchToProps = (dispatch) => ({
  fetchServices: () => dispatch(fetchServices()),
  fetchDoctors:()=>dispatch(fetchDoctors()),
  logoutUser: () => dispatch(logoutUser())
});

class Main extends Component {
  render() {
    return (
      <NavigationContainer>
        <MainNavigatorScreen users={this.props.users} logoutUser={this.props.logoutUser} />
      </NavigationContainer>
    );
  }
  componentDidMount() {
    // redux
    this.props.fetchDoctors();
    this.props.fetchServices();

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Main);