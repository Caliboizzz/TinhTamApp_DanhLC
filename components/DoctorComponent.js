import React, { Component } from 'react';
import {Text,Dimensions,StyleSheet,TouchableOpacity } from 'react-native';
import { Card, Image } from 'react-native-elements';

import { baseUrl } from '../shared/baseUrl';
import Loading from './LoadingComponent';



import Carousel from 'react-native-snap-carousel';

// redux
import { connect } from 'react-redux';
const mapStateToProps = (state) => {
  return {
    doctors: state.doctors,
  }
};



class Doctor extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    if (this.props.doctors.isLoading) {
        return (<Loading />);
      } else if (this.props.doctors.errMess) {
        return (<Text>{this.props.errMess}</Text>);
      } else {
        return (
    
          <Carousel
          ref={(c) => { this._carousel = c; }}
          data={this.props.doctors.doctors}
          renderItem={({ item, index }) => this.renderDoctorsList(item, index)}
          sliderWidth={Dimensions.get('window').width}
          sliderHeight={Dimensions.get('window').height}
          itemWidth={Dimensions.get('window').width *0.95}
          itemHeight={Dimensions.get('window').height *0.95}
        />
          
    
            
        );
      }
  }
  renderDoctorsList(item,index) {
    const {navigate}= this.props.navigation;
    return (
      <TouchableOpacity key={index} onPress={() => navigate('Docdetail', { docId: item.id })}>
          <Card borderRadius={25} >
        <Image  source={{uri: baseUrl + item.image}}  style={styles.docimg}>
        </Image>
                <Text style={styles.certificateText}>{item.certificate}</Text>
                <Text style={styles.NameText}>{item.name}</Text>
                <Text style={styles.DepartmentText}>{item.department}</Text>
        </Card>
      </TouchableOpacity>
    );
  }
}
export default connect(mapStateToProps)(Doctor);

const styles = StyleSheet.create({
  certificateText: {
    marginTop:10,
    marginLeft:10,
    fontSize: 15,
    color: '#00d9a5'
  },
  NameText: {
    marginLeft:10,
    fontSize: 30,
    fontWeight: 'bold'
  },
  DepartmentText: {
    fontSize: 20,
    marginLeft:10,
    color: 'grey'
  },
  docimg:{
    resizeMode: "cover",
    width: "100%",
    height: Dimensions.get('window').height *0.50,
    borderRadius: 15, 
    flexGrow: 1,
    justifyContent: 'center'
  }
});