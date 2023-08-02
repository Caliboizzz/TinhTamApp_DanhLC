import React, { Component } from 'react';
import { Text } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import * as MailComposer from 'expo-mail-composer';


import { getDatabase, ref, child, onValue } from 'firebase/database';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: '',
      street: '',
      district: '',
      city: '',
      phone: '',
      fax: '',
      email: ''
    }
  }
    render() {
      return (
        
        <Animatable.View animation="fadeInDown" duration={2000} delay={1000}>
            <Card borderRadius={25}>
            <Card.Title>Thông tin liên hệ của chúng tôi</Card.Title>
            <Card.Divider />
            <Text style={{ margin: 10 }}>{this.state.number}, {this.state.street}</Text>
          <Text style={{ margin: 10 }}>{this.state.district}</Text>
          <Text style={{ margin: 10 }}>{this.state.city}</Text>
          <Text style={{ margin: 10 }}>Tel: {this.state.phone}</Text>
          <Text style={{ margin: 10 }}>Fax: {this.state.fax}</Text>
          <Text style={{ margin: 10 }}>Email: {this.state.email}</Text>
                <Text></Text>
                <Button title=' Liên hệ qua email' buttonStyle={{ backgroundColor: '#00d9a5',borderRadius:25 }}
            icon={<Icon name='envelope-o' type='font-awesome' color='white' />}
            onPress={this.composeMail} />
            </Card>  
        </Animatable.View>
      );
    }
    componentDidMount() {
      const dbRef = ref(getDatabase());
      onValue(child(dbRef, 'contact/'), (snapshot) => {
        const value = snapshot.val();
        this.setState({
          number: value.address.number,
          street: value.address.street,
          district: value.address.district,
          city: value.address.city,
          phone: value.phone,
          fax: value.fax,
          email: value.email
        });
      });
    }
    composeMail() {
      MailComposer.composeAsync({
        recipients: ['danh.lc1095@sinhvien.hoasen.edu.vn'],
        subject: 'From Confusion',
        body: 'Hello my friends ...'
      });
    }
    }
  export default Contact;