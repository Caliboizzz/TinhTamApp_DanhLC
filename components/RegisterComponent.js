import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import { Input, Button  } from 'react-native-elements';
import { getDatabase, ref, child, set } from 'firebase/database';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }
  render() {
    return (
      <ScrollView>
        <View style={{ justifyContent: 'center', margin: 20 }}>
          <Input placeholder='Username' leftIcon={{ type: 'font-awesome', name: 'user-o' }} value={this.state.username}
            onChangeText={(username) => this.setState({ username })} />
          <Input placeholder='Password' leftIcon={{ type: 'font-awesome', name: 'key' }} value={this.state.password}
            onChangeText={(password) => this.setState({ password })} />
          <View style={{ marginTop: 20 }}>
            <Button title='Register' buttonStyle={{ backgroundColor: '#00d9a5',borderRadius:25 }}  onPress={() => this.handleRegister()} />
          </View>
        </View>
      </ScrollView>
    );
  }
  handleRegister() {
    const dbRef = ref(getDatabase());
    set(child(dbRef, 'accountsuser/' + this.state.username), {
      username: this.state.username,
      password: this.state.password
    }).then(() => { alert('Đăng ký thành công!'); })
      .catch((error) => alert('Could not set data from firebase', error));
  }
}
export default Register;