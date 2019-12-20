
import React, { Component } from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { Text, Button, Container, Content, Footer, Thumbnail, FooterTab, Input, Item,Toast } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage';

class Register_Score1 extends Component {
    constructor(props){
        super(props);
        this.state={
            score:[0,0,0,0,0,0,0,0,0,0,0],
            color:[]
        };
        this.mainRef=[];

    }
    componentDidMount(){
        AsyncStorage.getItem('score').then(scoreNumber =>{
            if(scoreNumber){
                let ss=JSON.parse(scoreNumber);
                this.setState({score:ss})
            }
        });
    }
    showResult= (text,index) => {
    var items = this.state.score;
    text=text.replace(/\s+/g,'').trim();
    items[index]= text;
    this.setState({score: items});
    var colortemp=this.state.color;
    if(text>20 || text<0 ){
        colortemp[index]="#ff3333"
        this.setState({color:colortemp});
    }else{
        colortemp[index]="#c5c5c5"
        this.setState({color:colortemp});
    }
    }
    
      focusedInput = (item) => { 
        this.mainRef[item].setNativeProps({
        placeholderTextColor:'#fff',
        })
      }
      blureInput = (item) => { 
        this.mainRef[item].setNativeProps({
        placeholderTextColor:'#ccc',
        })
      }
    static navigationOptions = {
        title: "ثبت نمرات پایه هفتم",
        headerRight: <Thumbnail small source={require('../../assets/img/title3.png')} style={{marginRight:20}} />,
    };
    goToNextLevel= (navigate) => {
        AsyncStorage.setItem('score',JSON.stringify(this.state.score));
        navigate('Register2',{score1: this.state.score});
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <Container style={styles.container}>
                <Content>
                    <Text style={styles.Reg_txt}>نمرات <Text style={[styles.Reg_txt,{color:'red',fontWeight:'bold'}]}>خرداد ماه</Text> <Text style={[styles.Reg_txt,{fontWeight:'bold'}]}>پایه هفتم</Text> خود را ثبت کنید:</Text>

                    <Item rounded style={[styles.itemCon,{borderColor: this.state.color["8"]}]}>
                        <Input value={this.state.score[8] || null} ref={c => { this.mainRef[8] = c}} onFocus={() => this.focusedInput("8")} onBlur={()=> this.blureInput("8")} onChangeText={(text) => this.showResult(text,"8")} style={styles.inputTxt} placeholder='نمره قرآن را وارد کنید' placeholderTextColor="#ccc" keyboardType='numeric'/>
                        <Icon active name='bookmark' size={16} color="#666" />
                    </Item>                    
                    <Item rounded style={[styles.itemCon,{borderColor: this.state.color["5"]}]}>
                        <Input value={this.state.score[5] || null} ref={c => { this.mainRef[5] = c}} onFocus={() => this.focusedInput("5")} onBlur={()=> this.blureInput("5")} onChangeText={(text) => this.showResult(text,"5")} style={styles.inputTxt} placeholder='نمره معارف اسلامی  را وارد کنید' placeholderTextColor="#ccc" keyboardType='numeric'/>
                        <Icon active name='moon-o' size={16} color="#666" />
                    </Item>
                    <Item rounded style={[styles.itemCon,{borderColor: this.state.color["3"]}]}>
                        <Input value={this.state.score[3] || null} ref={c => { this.mainRef[3] = c}} onFocus={() => this.focusedInput("3")} onBlur={()=> this.blureInput("3")} onChangeText={(text) => this.showResult(text,"3")} style={styles.inputTxt} placeholder='نمره قرائت فارسی  را وارد کنید' placeholderTextColor="#ccc" keyboardType='numeric'/>
                        <Icon active name='file-text-o' size={16} color="#666" />
                    </Item>
                    <Item rounded style={[styles.itemCon,{borderColor: this.state.color["9"]}]}>
                        <Input value={this.state.score[9] || null} ref={c => { this.mainRef[9] = c}} onFocus={() => this.focusedInput("9")} onBlur={()=> this.blureInput("9")} onChangeText={(text) => this.showResult(text,"9")} style={styles.inputTxt} placeholder='نمره املا فارسی را وارد کنید' placeholderTextColor="#ccc" keyboardType='numeric'/>
                        <Icon active name='edit' size={16} color="#666" />
                    </Item>
                    <Item rounded style={[styles.itemCon,{borderColor: this.state.color["10"]}]}>
                        <Input value={this.state.score[10] || null} ref={c => { this.mainRef[10] = c}} onFocus={() => this.focusedInput("10")} onBlur={()=> this.blureInput("10")} onChangeText={(text) => this.showResult(text,"10")} style={styles.inputTxt} placeholder='نمره انشا فارسی را وارد کنید' placeholderTextColor="#ccc" keyboardType='numeric'/>
                        <Icon active name='quote-right' size={16} color="#666" />
                    </Item>
                    <Item rounded style={[styles.itemCon,{borderColor: this.state.color["0"]}]}>
                        <Input value={this.state.score[0] || null} ref={c => { this.mainRef[0] = c}} onFocus={() => this.focusedInput("0")} onBlur={()=> this.blureInput("0")} onChangeText={(text) => this.showResult(text,"0")} style={styles.inputTxt} placeholder='نمره ریاضی  را وارد کنید' placeholderTextColor="#ccc" keyboardType='numeric' />
                        <Icon active name='calculator' size={16} color="#666" />
                    </Item>
                    <Item rounded style={[styles.itemCon,{borderColor: this.state.color["1"]}]}>
                        <Input value={this.state.score[1] || null} ref={c => { this.mainRef[1] = c}} onFocus={() => this.focusedInput("1")} onBlur={()=> this.blureInput("1")} onChangeText={(text) => this.showResult(text,"1")} style={styles.inputTxt} placeholder='نمره علوم تجربی  را وارد کنید' placeholderTextColor="#ccc" keyboardType='numeric'/>
                        <Icon active name='user-md' size={16} color="#666" />
                    </Item>
                    <Item rounded style={[styles.itemCon,{borderColor: this.state.color["2"]}]}>
                        <Input value={this.state.score[2] || null} ref={c => { this.mainRef[2] = c}} onFocus={() => this.focusedInput("2")} onBlur={()=> this.blureInput("2")} onChangeText={(text) => this.showResult(text,"2")} style={styles.inputTxt} placeholder='نمره زبان عربی  را وارد کنید' placeholderTextColor="#ccc" keyboardType='numeric'/>
                        <Icon active name='align-right' size={16} color="#666" />
                    </Item>
                    <Item rounded style={[styles.itemCon,{borderColor: this.state.color["4"]}]}>
                        <Input value={this.state.score[4] || null} ref={c => { this.mainRef[4] = c}} onFocus={() => this.focusedInput("4")} onBlur={()=> this.blureInput("4")} onChangeText={(text) => this.showResult(text,"4")} style={styles.inputTxt} placeholder='نمره مطالعات اجتماعی  را وارد کنید' placeholderTextColor="#ccc" keyboardType='numeric'/>
                        <Icon active name='book' size={15} color="#666" />
                    </Item>
                    <Item rounded style={[styles.itemCon,{borderColor: this.state.color["6"]}]}>
                        <Input value={this.state.score[6] || null} ref={c => { this.mainRef[6] = c}} onFocus={() => this.focusedInput("6")} onBlur={()=> this.blureInput("6")} onChangeText={(text) => this.showResult(text,"6")} style={styles.inputTxt} placeholder='نمره کار و فناوری  را وارد کنید' placeholderTextColor="#ccc" keyboardType='numeric'/>
                        <Icon active name='cog' size={16} color="#666" />
                    </Item>
                    <Item rounded style={[styles.itemCon,{borderColor: this.state.color["7"]}]}>
                        <Input value={this.state.score[7] || null} ref={c => { this.mainRef[7] = c}} onFocus={() => this.focusedInput("7")} onBlur={()=> this.blureInput("7")} onChangeText={(text) => this.showResult(text,"7")} style={styles.inputTxt} placeholder='نمره فرهنگ و هنر  را وارد کنید' placeholderTextColor="#ccc" keyboardType='numeric'/>
                        <Icon active name='paint-brush' size={16} color="#666" />
                    </Item>
                </Content>
                <Footer>
                    <FooterTab style={{ backgroundColor: '#faa819'}} >

                        <Button vertical transparent onPress={() => navigate('Title2')}>
                            <Icon name="arrow-left" size={18} color="#fff" />
                            <Text style={styles.footerTxt}>مرحله قبل</Text>
                        </Button>
                        <Button vertical transparent onPress={async () =>{
                            try {
                                await AsyncStorage.removeItem('score');
                                this.setState({score:[0,0,0,0,0,0,0,0,0,0,0]});
                                Toast.show({
                                    text:"حافظه با موفقیت پاک شد.",
                                    buttonText:"متوجه شدم",
                                    duration:4000,
                                    position:'bottom',
                                    textStyle:{fontFamily:'sans',fontSize:12,textAlign:'right',alignItems:'flex-end',justifyContent:'flex-end'},
                                    buttonStyle:{margin:10,alignItems:'flex-start',justifyContent:'flex-start'},
                                    buttonTextStyle:{fontFamily:'sans',fontSize:12}
                                })
                                return true;
                              }
                              catch(exception) {
                                Toast.show({
                                    text:"گزارش مشکل در پاک کردن حافظه",
                                    buttonText:"متوجه شدم",
                                    duration:4000,
                                    position:'bottom',
                                    textStyle:{fontFamily:'sans',fontSize:12,textAlign:'right',alignItems:'flex-end',justifyContent:'flex-end'},
                                    buttonStyle:{margin:10,alignItems:'flex-start',justifyContent:'flex-start'},
                                    buttonTextStyle:{fontFamily:'sans',fontSize:12}
                                })
                                return false;
                              }
                            }
                        }>
                            <Icon name="trash" size={18} color="#fff" />
                            <Text style={styles.footerTxt}>پاک کردن حافظه</Text>
                        </Button>
                        <Button transparent vertical onPress={() => {
                         this.state.score.some((element) => {return (element!='')}) ?
                         this.state.score.some((element) => {return (element>20 || element<0)}) ?  
                         Toast.show({
                            text:"نمرات را دربازه 0 تا 20 وارد کنید",
                            buttonText:"متوجه شدم",
                            duration:4000,
                            position:'bottom',
                            textStyle:{fontFamily:'sans',fontSize:12,textAlign:'right',alignItems:'flex-end',justifyContent:'flex-end'},
                            buttonStyle:{margin:10,alignItems:'flex-start',justifyContent:'flex-start'},
                            buttonTextStyle:{fontFamily:'sans',fontSize:12}
                        }) : 
                         this.goToNextLevel(navigate)
                         :
                         Toast.show({
                            text:"نمرات را وارد کنید",
                            buttonText:"متوجه شدم",
                            duration:4000,
                            position:'bottom',
                            textStyle:{fontFamily:'sans',fontSize:12,textAlign:'right',alignItems:'flex-end',justifyContent:'flex-end'},
                            buttonStyle:{margin:10,alignItems:'flex-start',justifyContent:'flex-start'},
                            buttonTextStyle:{fontFamily:'sans',fontSize:12}
                        })
                         }} >
                            <Icon name="arrow-right" size={20} color="#fff" />
                            <Text style={styles.footerTxt}>ادامه</Text>
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
        paddingTop: 15,
        paddingRight:15,
        fontFamily: 'sans',
        fontSize: 13,
        color: '#999',
        marginBottom:5
    },
    inputTxt: {
        fontFamily: 'sans',
        fontSize: 12,
        color: '#333',
        borderColor:'red'
    },
    itemCon: {
        width: 220,
        height: 40,
        marginBottom: 5,
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
export default Register_Score1;
