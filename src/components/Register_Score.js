
import React, { Component } from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { Text, Button, Container, Content, Footer, Thumbnail, FooterTab, Input, Item } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import Total from './Total_Report';

class Register_Score extends Component {
    constructor(props){
        super(props);
        this.state={
            score:[],
            flag:false
        };
        this.scorre=[];
    }
    showResult= (text,index) => {
        var items = this.state.score;
    items[index]= text;
    this.setState({score: items});
    this.scorre=this.state.score;
    
    }
    // nextLevel=() => {
    //     alert(this.state.score)
    // }
    static navigationOptions = {
        title: "ثبت نمرات",
        headerRight: <Thumbnail small source={require('../../assets/img/title3.png')} style={{marginRight:20}}/>,
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <Container style={styles.container}>
                <Content>
                    <Text style={styles.Reg_txt}>نمرات خود را ثبت کنید:</Text>

                    <Item rounded style={styles.itemCon}>
                        <Input onChangeText={(text) => this.showResult(text,"0")} style={styles.inputTxt} placeholder='نمره ریاضی  را وارد کنید' placeholderTextColor="#ccc" />
                        <Icon active name='edit' size={16} color="#666" />
                        <Text>{this.state.score[1]}</Text>
                    </Item>
                    <Item rounded style={styles.itemCon}>
                        <Input onChangeText={(text) => this.showResult(text,"1")} style={styles.inputTxt} placeholder='نمره علوم تجربی  را وارد کنید' placeholderTextColor="#ccc" />
                        <Icon active name='user-md' size={16} color="#666" />
                    </Item>
                    <Item rounded style={styles.itemCon}>
                        <Input onChangeText={(text) => this.showResult(text,"2")} style={styles.inputTxt} placeholder='نمره زبان عربی  را وارد کنید' placeholderTextColor="#ccc" />
                        <Icon active name='pencil' size={16} color="#666" />
                    </Item>
                    <Item rounded style={styles.itemCon}>
                        <Input onChangeText={(text) => this.showResult(text,"3")} style={styles.inputTxt} placeholder='نمره ادبیات فارسی  را وارد کنید' placeholderTextColor="#ccc" />
                        <Icon active name='edit' size={16} color="#666" />
                    </Item>
                    <Item rounded style={styles.itemCon}>
                        <Input onChangeText={(text) => this.showResult(text,"4")} style={styles.inputTxt} placeholder='نمره مطالعات اجتماعی  را وارد کنید' placeholderTextColor="#ccc" />
                        <Icon active name='search' size={15} color="#666" />
                    </Item>
                    <Item rounded style={styles.itemCon}>
                        <Input onChangeText={(text) => this.showResult(text,"5")} style={styles.inputTxt} placeholder='نمره معارف اسلامی  را وارد کنید' placeholderTextColor="#ccc" />
                        <Icon active name='edit' size={16} color="#666" />
                    </Item>
                    <Item rounded style={styles.itemCon}>
                        <Input onChangeText={(text) => this.showResult(text,"6")} style={styles.inputTxt} placeholder='نمره کار و فناوری  را وارد کنید' placeholderTextColor="#ccc" />
                        <Icon active name='shopping-cart' size={16} color="#666" />
                    </Item>
                    <Item rounded style={styles.itemCon}>
                        <Input onChangeText={(text) => this.showResult(text,"7")} style={styles.inputTxt} placeholder='نمره فرهنگ و هنر  را وارد کنید' placeholderTextColor="#ccc" />
                        <Icon active name='paint-brush' size={16} color="#666" />
                    </Item>
                    {/* {this.state.flag ? <Total score={this.state.score} /> : null} */}
                </Content>
                <Footer>
                    <FooterTab style={{ backgroundColor: '#faa819'}} >

                        <Button vertical transparent onPress={() => navigate('Title2')} >
                            <Icon name="arrow-left" size={18} color="#fff" />
                            <Text style={styles.footerTxt}>مرحله قبل</Text>
                        </Button>
                        <Button transparent vertical onPress={() => navigate('Report',{score: this.state.score})} >
                            <Icon name="arrow-right" size={20} color="#fff" />
                            <Text style={styles.footerTxt}>نمایش انتخاب رشته</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
    },
    Reg_txt: {
        paddingTop: 10,
        fontFamily: 'sans',
        fontSize: 13,
        color: '#999',
        marginBottom:5
    },
    inputTxt: {
        fontFamily: 'sans',
        fontSize: 12,
        color: '#333',
    },
    itemCon: {
        width: 220,
        height: 30,
        borderColor: '#c5c5c5',
        marginBottom: 10,
        marginRight:30,
        marginTop: 5,
        paddingRight: 5,
    },
    footerTxt:{
        fontFamily:'sans',
        fontSize:12,
        color:'#fff',
        marginTop:5
    },
    headerR:{
        marginRight:20,
    },
});
export default Register_Score;
