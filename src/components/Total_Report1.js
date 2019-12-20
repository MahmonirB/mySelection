
import React,{Component} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import {Text, Button,Thumbnail,Container,Content, List, ListItem,Left,Right,Body,Footer,FooterTab} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
    
class Total_Report1 extends Component {
    constructor(props){
        super(props);
        this.state={
            total_score:[]
        }
        this.score=[];
        }
    static navigationOptions = {
        title: "نمایش میانگین نمرات",
        headerRight: <Thumbnail small source={require('../../assets/img/title3.png')} style={{marginRight:20}} />
      };
      caculateReport1= (score3,score1,score2) => {

        let res_score1=[];
          for(let i=0;i<=10;i++){
              res_score1[i]=(Number(score1[i])+Number(score2[i]))+(Number(score3[i])*3);
          }
          this.score[0]=res_score1[0]/5;
          this.score[1]=res_score1[1]/5;
          this.score[2]=res_score1[2]/5;
          this.score[3]=(res_score1[3]+res_score1[9]+res_score1[10])/15;
          this.score[4]=res_score1[4]/5;
          this.score[5]=(res_score1[5]+res_score1[8])/10;
          this.score[6]=res_score1[6]/5;
          this.score[7]=res_score1[7]/5;

         return(<List style={{textAlign:'right'}}>
             <ListItem>
                
                 <Left><Text style={styles.bodytxt}>{this.score[0]}</Text></Left>
                 <Body><Text style={styles.bodytxt}>میانگین نمره ریاضی</Text></Body>
                 <Right><Icon name="calculator" size={12} color="#333"/></Right>
             </ListItem>
             <ListItem>
                
                 <Left><Text style={styles.bodytxt}>{this.score[1]}</Text></Left>
                 <Body><Text style={styles.bodytxt}>میانگین نمره علوم تجربی</Text></Body>
                 <Right><Icon name="user-md" size={12} color="#333"/></Right>
             </ListItem>
             <ListItem>
                
                 <Left><Text style={styles.bodytxt}>{this.score[2]}</Text></Left>
                 <Body><Text style={styles.bodytxt}>میانگین نمره عربی</Text></Body>
                 <Right><Icon name="edit" size={12} color="#333"/></Right>
             </ListItem>
             <ListItem>
                 
                 <Left><Text style={styles.bodytxt}>{this.score[3]}</Text></Left>
                 <Body><Text style={styles.bodytxt}>میانگین نمره ادبیات فارسی</Text></Body>
                 <Right><Icon name="quote-right" size={12} color="#333"/></Right>
             </ListItem>
             <ListItem>
                 
                 <Left><Text style={styles.bodytxt}>{this.score[4]}</Text></Left>
                 <Body><Text style={styles.bodytxt}>میانگین نمره مطالعات اجتماعی</Text></Body>
                 <Right><Icon name="book" size={12} color="#333"/></Right>
             </ListItem>
             <ListItem>
                 
                 <Left><Text style={styles.bodytxt}>{this.score[5]}</Text></Left>
                 <Body><Text style={styles.bodytxt}>میانگین نمره معارف اسلامی</Text></Body>
                 <Right><Icon name="moon-o" size={12} color="#333"/></Right>
             </ListItem>
             <ListItem>
                 
                 <Left><Text style={styles.bodytxt}>{this.score[6]}</Text></Left>
                 <Body><Text style={styles.bodytxt}>میانگین نمره کارو فناری</Text></Body>
                 <Right><Icon name="cog" size={12} color="#333"/></Right>
             </ListItem>
             <ListItem>
                 
                 <Left><Text style={styles.bodytxt}>{this.score[7]}</Text></Left>
                 <Body><Text style={styles.bodytxt}>میانگین نمره فرهنگ و هنر</Text></Body>
                 <Right><Icon name="paint-brush" size={12} color="#333"/></Right>
             </ListItem>
         </List>)
        }
    render() {
        const { navigate } = this.props.navigation;
      const score=this.props.navigation.getParam("score","No score sent");
      const score1=this.props.navigation.getParam("score1","No score sent");
      const score2=this.props.navigation.getParam("score2","No score sent");
      return (
        <Container>
            <Content style={{padding:15}}>
            <Text style={styles.header1}>نمایش میانگین نمرات</Text>
             {this.caculateReport1(score,score1,score2)}
            </Content>
            <Footer>
                    <FooterTab style={{ backgroundColor: '#faa819'}} >

                        <Button vertical transparent onPress={() => navigate('Register')}>
                            <Icon name="arrow-left" size={18} color="#fff" />
                            <Text style={styles.footerTxt}>مرحله قبل</Text>
                        </Button>
                        <Button transparent vertical onPress={() => {
                         navigate('Report',{score: this.score})
                         }} >
                            <Icon name="arrow-right" size={20} color="#fff" />
                            <Text style={styles.footerTxt}>نمایش انتخاب رشته</Text>
                        </Button>
                    </FooterTab>
                </Footer>
        </Container>
        );
    }
}
const styles=StyleSheet.create({
    header1:{
        fontFamily:'sans',
        fontSize:14,
        color:'#007c8f',
        textAlign:'right'
    },
    bodytxt:{
        fontFamily:'sans',
        color:'#333',
        fontSize:12,
        textAlign:'right'
    },
    footerTxt:{
        fontFamily:'sans',
        fontSize:12,
        color:'#fff',
        marginTop:5
    },
})
export default Total_Report1;