import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card, Image } from 'react-native-elements';
import { ScrollView } from 'react-native-virtualized-view'; 
import { baseUrl } from '../shared/baseUrl';




class RenderDocImage extends Component {
  render() {
    const doctor = this.props.doctor;
    return (
      <Card borderRadius={25}>
        <Image  source={{ uri: baseUrl + doctor.image }}  style={{ resizeMode: "cover",width: "100%",height: 380,borderRadius: 15, flexGrow: 1,justifyContent: 'flex-start'}}/>
      </Card>
    );
  }
}

class RenderDoc extends Component {
  render() {
    // render
    const doctor = this.props.doctor;
    if (doctor != null) {
      return (
        <Card borderRadius={25}>
          <Card.Title style={{color:'#00d9a5'}}>{doctor.name}</Card.Title>
          <Card.Divider />
          <Text>{'\u2B24 '+doctor.description1}</Text>
          <Text>{'\u2B24 '+doctor.description2}</Text>
          <Text style={{ marginBottom:25 }}>{'\u2B24 '+doctor.description3}</Text>
        </Card>
      );
    }
    return (<View />);
  }
}

// redux
import { connect } from 'react-redux';
const mapStateToProps = (state) => {
  return {
    doctors: state.doctors,
  }
};


import * as Animatable from 'react-native-animatable';
class Doctordetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    const docId = parseInt(this.props.route.params.docId);
    const doctor = this.props.doctors.doctors[docId];
    return (
      <ScrollView>
        <Animatable.View animation="flipInY" duration={2000} delay={1000}>
          <RenderDocImage doctor={doctor} />
        </Animatable.View>
        <Animatable.View animation="fadeInDown" duration={2000} delay={1000}>
        <RenderDoc doctor={doctor} />
        </Animatable.View>
      </ScrollView>
    );
  }
}
export default connect(mapStateToProps)(Doctordetail);