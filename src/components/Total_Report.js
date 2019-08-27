
import React,{Component} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import {Text, Button,Thumbnail,Container,Content, List, ListItem,Left,Right,Body} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

        const kar_industry=[10,12,10];  //   0, 6, 7
        const kar_service=[10,12,12];   //   0, 6, 7
        const kar_agri=[10,12,10];      //   1, 6, 7
        const kar_art=[10,12,12];       //   0, 6, 7
        const fani_industry=[10,10,12,12];    // 0, 1, 6, 7
        const fani_service=[10,12,12];        // 0, 6, 7
        const fani_agri=[10,12,12];           // 1, 6, 7
        const fani_art=[10,10,12,12];         // 0, 1, 6, 7
        const math=[14,13];         // 0, 1
        const expri=[13,14];        // 0, 1
        const human=[12,14,13];     // 2, 3, 4
        const religous=[13,12,14];  // 2, 3, 5
    
class Total_Report extends Component {
    constructor(props){
        super(props);
        }
    static navigationOptions = {
        title: "نمایش انتخاب رشته",
        headerRight: <Thumbnail small source={require('../../assets/img/title3.png')} style={{marginRight:20}}/>
      };
      caculateReport= (score) => {
          let temp=["false","false","false","false","false","false","false","false","false","false","false","false"];
         if(score[0]>=kar_industry[0] && score[6]>=kar_industry[1] && score[7]>=kar_industry[2]){temp[0]="true";}
          if(score[0]>=kar_service[0] && score[6]>=kar_service[1] && score[7]>=kar_service[2]){temp[1]="true"}
         if(score[1]>=kar_agri[0] && score[6]>=kar_agri[1] && score[7]>=kar_agri[2]){temp[2]="true"}
         if(score[0]>=kar_art[0] && score[6]>=kar_art[1] && score[7]>=kar_art[2]){temp[3]="true"}
         
         if(score[0]>=fani_industry[0] && score[1]>=fani_industry[1] && score[6]>=fani_industry[2] && score[7]>=fani_industry[3]){temp[4]="true";}
         if(score[0]>=fani_service[0] && score[6]>=fani_service[1] && score[7]>=fani_service[2]){temp[5]="true"}
        if(score[1]>=fani_agri[0] && score[6]>=fani_agri[1] && score[7]>=fani_agri[2]){temp[6]="true"}
        if(score[0]>=fani_art[0] && score[1]>=fani_art[1] && score[6]>=fani_art[2] && score[7]>=fani_art[3]){temp[7]="true"}
        
        if(score[0]>=math[0] && score[1]>=math[1]){temp[8]="true"}
         if(score[0]>=expri[0] && score[1]>=expri[1]){temp[9]="true"}
         if(score[2]>=human[0] && score[3]>=human[1] && score[4]>=human[2]){temp[10]="true"}
         if(score[2]>=religous[0] && score[3]>=religous[1] && score[5]>=religous[2]){temp[11]="true"}
      
         return(<List style={{textAlign:'right'}}>
             <ListItem>
                 <Left><Text style={styles.bodytxt}>{temp[8]=="true" ? "مجاز"  : "غیر مجاز"}</Text></Left>
                 <Body><Text style={styles.bodytxt}>رشته ریاضی فیزیک</Text></Body>
                 <Right><Text style={styles.bodytxt}>{temp[8]=="true" ? <Icon name="check-circle-o" color="green" style={{fontSize:16}} />  : <Icon name="times-circle-o" color="red" style={{fontSize:16}} />}</Text></Right>
             </ListItem>
             <ListItem>
                 <Left><Text style={styles.bodytxt}>{temp[9]=="true" ? "مجاز"  : "غیر مجاز"}</Text></Left>
                 <Body><Text style={styles.bodytxt}>رشته تجربی</Text></Body>
                 <Right><Text style={styles.bodytxt}>{temp[9]=="true" ? <Icon name="check-circle-o" color="green" style={{fontSize:16}} />  : <Icon name="times-circle-o" color="red" style={{fontSize:16}} />}</Text></Right>
             </ListItem>
             <ListItem>
                 <Left><Text style={styles.bodytxt}>{temp[10]=="true" ? "مجاز"  : "غیر مجاز"}</Text></Left>
                 <Body><Text style={styles.bodytxt}>رشته علوم انسانی</Text></Body>
                 <Right><Text style={styles.bodytxt}>{temp[10]=="true" ? <Icon name="check-circle-o" color="green" style={{fontSize:16}} />  : <Icon name="times-circle-o" color="red" style={{fontSize:16}} />}</Text></Right>
             </ListItem>
             <ListItem>
                 <Left><Text style={styles.bodytxt}>{temp[11]=="true" ? "مجاز"  : "غیر مجاز"}</Text></Left>
                 <Body><Text style={styles.bodytxt}>رشته علوم و معارف اسلامی</Text></Body>
                 <Right><Text style={styles.bodytxt}>{temp[11]=="true" ? <Icon name="check-circle-o" color="green" style={{fontSize:16}} />  : <Icon name="times-circle-o" color="red" style={{fontSize:16}} />}</Text></Right>
             </ListItem>
             <ListItem>
                 <Left><Text style={styles.bodytxt}>{temp[0]=="true" ? "مجاز"  : "غیر مجاز"}</Text></Left>
                 <Body><Text style={styles.bodytxt}>کارو دانش: شاخه صنعت</Text></Body>
                 <Right><Text style={styles.bodytxt}>{temp[0]=="true" ? <Icon name="check-circle-o" color="green" style={{fontSize:16}} />  : <Icon name="times-circle-o" color="red" style={{fontSize:16}} />}</Text></Right>
             </ListItem>
             <ListItem>
                 <Left><Text style={styles.bodytxt}>{temp[1]=="true" ? "مجاز"  : "غیر مجاز"}</Text></Left>
                 <Body><Text style={styles.bodytxt}>کارو دانش: شاخه خدمات</Text></Body>
                 <Right><Text style={styles.bodytxt}>{temp[1]=="true" ? <Icon name="check-circle-o" color="green" style={{fontSize:16}} />  : <Icon name="times-circle-o" color="red" style={{fontSize:16}} />}</Text></Right>
             </ListItem>
             <ListItem>
                 <Left><Text style={styles.bodytxt}>{temp[2]=="true" ? "مجاز"  : "غیر مجاز"}</Text></Left>
                 <Body><Text style={styles.bodytxt}>کارودانش: شاخه کشاورزی</Text></Body>
                 <Right><Text style={styles.bodytxt}>{temp[2]=="true" ? <Icon name="check-circle-o" color="green" style={{fontSize:16}} />  : <Icon name="times-circle-o" color="red" style={{fontSize:16}} />}</Text></Right>
             </ListItem>
             <ListItem>
                 <Left><Text style={styles.bodytxt}>{temp[3]=="true" ? "مجاز"  : "غیر مجاز"}</Text></Left>
                 <Body><Text style={styles.bodytxt}>کارو دانش: شاخه هنر</Text></Body>
                 <Right><Text style={styles.bodytxt}>{temp[3]=="true" ? <Icon name="check-circle-o" color="green" style={{fontSize:16}} />  : <Icon name="times-circle-o" color="red" style={{fontSize:16}} />}</Text></Right>
             </ListItem>
             <ListItem>
                 <Left><Text style={styles.bodytxt}>{temp[4]=="true" ? "مجاز"  : "غیر مجاز"}</Text></Left>
                 <Body><Text style={styles.bodytxt}>فنی و حرفه ای: شاخه صنعت</Text></Body>
                 <Right><Text style={styles.bodytxt}>{temp[4]=="true" ? <Icon name="check-circle-o" color="green" style={{fontSize:16}} />  : <Icon name="times-circle-o" color="red" style={{fontSize:16}} />}</Text></Right>
             </ListItem>
             <ListItem>
                 <Left><Text style={styles.bodytxt}>{temp[5]=="true" ? "مجاز"  : "غیر مجاز"}</Text></Left>
                 <Body><Text style={styles.bodytxt}>فنی و حرفه ای: شاخه خدمات</Text></Body>
                 <Right><Text style={styles.bodytxt}>{temp[5]=="true" ? <Icon name="check-circle-o" color="green" style={{fontSize:16}} />  : <Icon name="times-circle-o" color="red" style={{fontSize:16}} />}</Text></Right>
             </ListItem>
             <ListItem>
                 <Left><Text style={styles.bodytxt}>{temp[6]=="true" ? "مجاز"  : "غیر مجاز"}</Text></Left>
                 <Body><Text style={styles.bodytxt}>فنی و حرفه ای: شاخه کشاورزی</Text></Body>
                 <Right><Text style={styles.bodytxt}>{temp[6]=="true" ? <Icon name="check-circle-o" color="green" style={{fontSize:16}} />  : <Icon name="times-circle-o" color="red" style={{fontSize:16}} />}</Text></Right>
             </ListItem>
             <ListItem>
                 <Left><Text style={styles.bodytxt}>{temp[7]=="true" ? "مجاز"  : "غیر مجاز"}</Text></Left>
                 <Body><Text style={styles.bodytxt}>فنی و حرفه ای: شاخه هنر</Text></Body>
                 <Right><Text style={styles.bodytxt}>{temp[7]=="true" ? <Icon name="check-circle-o" color="green" style={{fontSize:16}} />  : <Icon name="times-circle-o" color="red" style={{fontSize:16}} />}</Text></Right>
             </ListItem>
         </List>)
        }
    render() {
      const score=this.props.navigation.getParam("score","No score sent");
      return (
        <Container>
            <Content style={{padding:15}}>
            <Text style={styles.header1}>نمایش نتیجه انتخاب رشته</Text>
            {/* <Text style={styles.bodytxt}>scorre:{JSON.stringify(score)}</Text> */}
             {this.caculateReport(score)}
            </Content>
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
    }
})
export default Total_Report;