import React, { Component } from 'react';
import { FlatList, StyleSheet,Text  } from 'react-native';
import { ListItem,Card} from 'react-native-elements';
import { ScrollView } from 'react-native-virtualized-view'; 
import Loading from './LoadingComponent';
import * as Animatable from 'react-native-animatable';


// redux
import { connect } from 'react-redux';
const mapStateToProps = (state) => {
  return {
    services: state.services
  }
};

class Service extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    
      if (this.props.services.isLoading) {
        return (<Loading />);
      } else if (this.props.services.errMess) {
        return (<Text>{this.props.errMess}</Text>);
      } else {
        return (
          <ScrollView>
            <Card borderRadius={25}>
              <Card.Title>Tịnh Tâm Medical</Card.Title>
                <Card.Divider />
              <Text style={{ margin: 10,textAlign: 'justify',color:'grey' }}>Nhằm thực hiện chủ trương xã hội hóa Y tế, Phòng Khám Đa Khoa Tịnh Tâm ra đời và luôn mong muốn trở thành nơi cung cấp những dịch vụ chăm sóc sức khỏe cho mọi người theo tiêu chuẩn quốc tế, Phòng Khám Đa Khoa Tịnh Tâm là nơi không chỉ tập trung các trang thiết bị Y Khoa, cơ sở vật chất hiện đại mà còn là nơi quy tụ các Giáo sư, Tiến sĩ,Thạc sỹ, Bác sĩ chuyên khoa, chuyên gia Y tế giàu kinh nghiệm chuyên môn, có đạo đức chuẩn mực và tâm huyết đam mê với nghề Y tại TP Hồ Chí Minh trong các lĩnh vực chuyên ngành Nội - Ngoại - Sản - Nhi, Tai Mũi họng, Răng Hàm Mặt, Mắt, Da liễu, Y học cổ truyền, Chẩn đoán hình ảnh và Xét nghiệm từ các bệnh viện lớn như BV Đại Học Y Dược, Viện Tim TPHCM, Bệnh viện Tim Tâm Đức, BV Nhân Dân 115, BV Chợ Rẫy, BV Thống Nhất, BV Cấp cứu Trưng Vương, BV Nhi Đồng, BV Hùng Vương.</Text>
            </Card>
            <Card containerStyle={{ 
              backgroundColor: 'transparent',
              borderWidth: 0, // Remove Border
              shadowColor: 'rgba(0,0,0, 0.0)', // Remove Shadow for iOS
              elevation: 0 // Remove Shadow for Android
           }}>
        <Card.Title>Các dịch vụ của chúng tôi</Card.Title>
        <Card.Divider />
        <FlatList data={this.props.services.services}
                renderItem={({ item }) => this.renderServiceItem(item)}/>
      </Card>
              
          </ScrollView>
         
                
            
          
        );
      }
      
  }
  renderServiceItem(item) {
    return (
      <Animatable.View animation="fadeInRightBig" duration={2000}>
        <Card borderRadius={25} height={125}>
        <ListItem>
        <ListItem.Content>
          <ListItem.Title style={styles.NameText}>{item.name}</ListItem.Title>
          <ListItem.Subtitle style={styles.PriceText}>{item.price}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
        </Card>
        
      
      
      </Animatable.View>
    );
  };
  }
  export default connect(mapStateToProps)(Service);

  const styles = StyleSheet.create({
    NameText: {
      marginTop:10,
      fontSize: 23,
      fontWeight: 'bold'
    },
    PriceText: {
      fontSize: 15,
      color: '#00d9a5'
    }
  });