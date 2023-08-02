import React, { Component } from 'react';
import { View, Text,Dimensions } from 'react-native';
import { Image } from 'react-native-elements';


import * as Animatable from 'react-native-animatable';





class Home extends Component {
  render() {
    return (
      <View>
        <Animatable.View animation="fadeInDown" duration={2000} delay={1000}>
          <Image source={require('./images/logo.png')} style={{ margin: 10, width: 230, height: 80 }}/>

        </Animatable.View>
        <Animatable.View animation="fadeInDown" duration={2000} delay={1000}>
          <View style={{marginLeft:16,marginEnd:25,marginBottom:20,marginTop:5}}>
            <Text style={{textAlign: 'justify',color:'grey'}}>
              Nhằm thực hiện chủ trương xã hội hóa Y tế, Phòng Khám Đa Khoa Tịnh Tâm ra đời và luôn mong muốn trở thành nơi cung cấp những dịch vụ chăm sóc sức khỏe cho mọi người theo tiêu chuẩn quốc tế.
            </Text>
          </View>
        </Animatable.View>
        
        <View>
        <Image  source={require('./images/bg-doctor.png')} style={{ resizeMode: "cover",width: "100%",height: Dimensions.get('window').height *0.80 }}/> 
        </View>
      </View>
    );
  }
}
export default Home;

