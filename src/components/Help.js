
import React,{Component} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import {Text, Button,Thumbnail,Content, List, ListItem, Left, Body, Right,Container} from 'native-base';

class Help extends Component {
    static navigationOptions = {
        title: "آشنایی با رشته ها",
        headerRight: <Thumbnail small source={require('../../assets/img/title3.png')} style={{marginRight:20}}/>
      };
    render() {
      const {navigate} = this.props.navigation;
      return (
        <Container style={styles.container} >
        <Content>
        <List>
            <ListItem itemHeader>
            <Left />
            <Body>
                   <Text style={styles.headerTxt}>شاخه نظری</Text>
                </Body>
                <Right style={{flex:0}}/>
            </ListItem>
            <ListItem>
                <Left>
                    <Button transparent onPress={() => navigate('Mathe')}><Text style={styles.link}>مشاهده</Text></Button>
                </Left>
                <Body><Text style={styles.listTxt}>رشته ریاضی و فیزیک</Text></Body>
                <Right>
                    <Thumbnail square source={require('../../assets/img/title.png')} style={styles.thumb}/>
                </Right>
            </ListItem>
            <ListItem>
                <Left>
                    <Button transparent onPress={() => navigate('Exprimental')}><Text style={styles.link}>مشاهده</Text></Button>
                </Left>
                <Body><Text style={styles.listTxt}>رشته تجربی</Text></Body>
                <Right>
                    <Thumbnail square source={require('../../assets/img/title.png')} style={styles.thumb} />
                </Right>
            </ListItem>
            <ListItem last>
                <Left>
                    <Button transparent onPress={() => navigate('Humanity')}><Text style={styles.link}>مشاهده</Text></Button>
                </Left>
                <Body><Text style={styles.listTxt}>رشته علوم انسانی</Text></Body>
                <Right>
                    <Thumbnail square source={require('../../assets/img/title.png')} style={styles.thumb} />
                </Right>
            </ListItem>
            <ListItem itemHeader>
            <Left />
            <Body>
                   <Text style={styles.headerTxt}>شاخه فنی و حرفه ای</Text>
                </Body>
                <Right style={{flex:0}}/>
            </ListItem>
            <ListItem>
                <Left>
                    <Button transparent onPress={() => navigate('Industry')}><Text style={styles.link}>مشاهده</Text></Button>
                </Left>
                <Body><Text style={styles.listTxt}>معرفی رشته ها</Text></Body>
                <Right>
                    <Thumbnail square source={require('../../assets/img/title.png')} style={styles.thumb}/>
                </Right>
            </ListItem>
            <ListItem itemHeader>
            <Left />
            <Body>
                   <Text style={styles.headerTxt}>شاخه کاردانش</Text>
                </Body>
                <Right style={{flex:0}}/>
            </ListItem>
            <ListItem>
                <Left>
                    <Button transparent onPress={() => navigate('Industry2')}><Text style={styles.link}>مشاهده</Text></Button>
                </Left>
                <Body><Text style={styles.listTxt}>معرفی رشته ها</Text></Body>
                <Right>
                    <Thumbnail square source={require('../../assets/img/title.png')} style={styles.thumb}/>
                </Right>
            </ListItem>
        </List>
        </Content>
        </Container>
        );
    }
}
const styles=StyleSheet.create({
container:{
    flex:1,
    fontFamily:'sans',
},
headerTxt:{
    fontFamily:'sans',
    fontSize:14,
    color:'#ccc'
},
listTxt:{
    fontFamily:'sans',
    fontSize:12,
    color:'#666'
},
link:{
    color:'#faa819',
    fontFamily:'sans',
    fontSize:12,
},
thumb:{
    width:40,
    height:40,
    marginLeft:10,
},
})
export default Help;