import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Text, Alert, } from 'react-native';
import {  Button } from 'react-native-elements';
import {DateTimePickerModal} from 'react-native-modal-datetime-picker';
import * as Animatable from 'react-native-animatable';
import { format } from 'date-fns';
import * as Notifications from 'expo-notifications';
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';






class Reservation extends Component {
  constructor(props) {
    super(props);
    this.URL='http://tinhtamsa.somee.com/api/reservations';
    this.state={ChooseBDate:'' , txtCusName:'' , txtEmail:'' , txtPhone:'' , ChooseDateRes:new Date() , txtDepID:'' , txtDescription:'',showDatePicker: false};
  }
  render() {
    return (
      <ScrollView style={styles.styleview}>
        <Animatable.View animation="zoomIn" duration={2000} delay={1000}>
        <Input 
            placeholder="Tên"
            placeholderTextColor="#0a0a0a" 
            autoCapitalize='words' 
            value={this.state.txtCusName} 
            onChangeText={(txtCusName)=>this.setState({txtCusName})}/>
   
      {/* <View style={styles.formRow}>
            <Text style={styles.formLabel}>Ngày sinh</Text>
            <Icon name='clockcircleo' size={36} onPress={() => this.setState({ showDatePicker: true })} />
            <Text style={{ marginLeft: 10 }}>{format(this.state.ChooseBDate, 'dd/MM/yyyy')}</Text>
            <DateTimePickerModal mode='date' isVisible={this.state.showDatePicker}
              onConfirm={(ChooseBDate) => this.setState({ ChooseBDate: ChooseBDate, showDatePicker: false })}
              onCancel={() => this.setState({ showDatePicker: false })} />
          </View> */}
        <Input 
            placeholder="Ngày sinh nhập theo format MM-DD-YY"
            placeholderTextColor="#0a0a0a" 
            autoCapitalize='words' 
            value={this.state.ChooseBDate} 
            onChangeText={(ChooseBDate)=>this.setState({ChooseBDate})}/>
        <Input 
            placeholder="Email" 
            placeholderTextColor="#0a0a0a" 
            autoCapitalize='none'  
            value={this.state.txtEmail} 
            onChangeText={(txtEmail)=>this.setState({txtEmail})}/>
     
  
        <Input
            keyboardType = 'numeric'
            placeholderTextColor="#0a0a0a" 
            placeholder="Số điện thoại" 
            value={this.state.txtPhone} 
            onChangeText={(txtPhone)=>this.setState({txtPhone})}/>
 
 
        <Input 
            placeholder="Mô tả" 
            placeholderTextColor="#0a0a0a" 
            autoCapitalize='none' 
            value={this.state.txtDescription} 
            onChangeText={(txtDescription)=>this.setState({txtDescription})}/>

          
          
          
          <View style={styles.formRow}>
            <Text style={styles.formLabel}>Ngày đăng ký</Text>
            <Icon name='clockcircleo' size={36} onPress={() => this.setState({ showDatePicker: true })} />
            <Text style={{ marginLeft: 10 }}>{format(this.state.ChooseDateRes, 'dd/MM/yyyy - HH:mm')}</Text>
            <DateTimePickerModal mode='datetime' isVisible={this.state.showDatePicker}
              onConfirm={(ChooseDateRes) => this.setState({ ChooseDateRes: ChooseDateRes, showDatePicker: false })}
              onCancel={() => this.setState({ showDatePicker: false })} />
          </View>
          
      
        <View style={{flexDirection:'column', margin:60}}>
          <Button title='Đặt lịch hẹn' buttonStyle={{ backgroundColor: '#00d9a5',borderRadius:25 }} onPress={() => this.handleReservation()} />
        </View>
        </Animatable.View>
      </ScrollView>
    );
  }
  handleReservation() {
    if(this.state.txtPhone.length != 10){
      Alert.alert(
        'Số điện thọai không hợp lệ',
      ); 
    }else{
      Alert.alert(
        'Bạn có chắc đặt lịch khám vào lúc',
        this.state.ChooseDateRes.toString(),
        [
          { text: 'Cancel', onPress: () => this.resetForm() },
          { text: 'OK', onPress: () => {
            var newReservation={BDate:this.state.ChooseBDate, CusName:this.state.txtCusName, Email:this.state.txtEmail, Phone:this.state.txtPhone, DateRes:this.state.ChooseDateRes, DepID:3,Description:this.state.txtDescription};
            this.addNew(newReservation);
            this.resetForm();
            this.presentLocalNotification(this.state.ChooseDateRes);
          }},
        ],
        { cancelable: false }
      );
    }
    
  }

  async addNew(newReservation){
    var response = await fetch(this.URL, {method:'POST',headers:{'Content-Type':'application/json'}, body:JSON.stringify(newReservation)});
    var result = await response.json();
    if(result){
      alert('Đặt lịch khám thành công');
    }else{
      alert('Đặt lịch khám thất bại');
    }
  }

  resetForm() {
    this.setState(
      {ChooseBDate:'' , 
        txtCusName:'' ,
         txtEmail:'' ,
          txtPhone:'' , 
          ChooseDateRes:new Date() , 
          txtDepID:'' , 
          txtDescription:''
        }
      );
  }

  async presentLocalNotification(ChooseDateRes) {
    const { status } = await Notifications.requestPermissionsAsync();
    if (status === 'granted') {
      Notifications.setNotificationHandler({
        handleNotification: async () => ({ shouldShowAlert: true, shouldPlaySound: true, shouldSetBadge: true })
      });
      Notifications.scheduleNotificationAsync({
        content: {
          title: 'Tịnh tâm medical',
          body: 'Bạn đã đặt lịch khám thành công vào thời gian'+ChooseDateRes,
          sound: true,
          vibrate: true
        },
        trigger: null
      });
    }
  }
}


export default Reservation;

const styles = StyleSheet.create({
  formRow: { alignItems: 'center', justifyContent: 'center', flex: 1, flexDirection: 'row', margin: 10 },
  formLabel: { fontSize: 18, flex: 1 },  
  formItem: { flex: 1 },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  styleview:{
    margin: 12,
    marginTop:30
  }
});