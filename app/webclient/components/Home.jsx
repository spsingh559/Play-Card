
import React from 'react';
import { Link } from 'react-router';
import Axios from 'axios';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
// import {Grid} from 'react-bootstrap';
import {Grid,Row,Col,Carousel} from 'react-bootstrap';

// const playCard=[
 
// ]

import FirstRow from './FirstRow.jsx';
import DrawCard from './DrawCard';
export default class Home extends React.Component {

  state={
    firstRow:[],
    secondRow:[],
    thirdRow:[],
    fourthRow:[],
    drawCard:[],
    playCard:[ {
      _id:1,
      name:"A",
      url:"../images/c.png",
      catagory:"C",
      position:1,
      rank:1,
      orderrank:1
    },
    { _id:2,
      name:"K",
      url:"../images/c.png",
      catagory:"C",
      position:2,
      rank:1,
      orderrank:2
    },
    {_id:3,
      name:"Q",
      url:"../images/c.png",
      catagory:"C",
      position:3,
      rank:3,
      orderrank:1
    },
    {_id:4,
      name:"J",
      url:"../images/c.png",
      catagory:"C",
      position:4,
      rank:3,
      orderrank:2
    },
    {_id:5,
      name:"10",
      url:"../images/c.png",
      catagory:"C",
      position:5,
      rank:5,
      orderrank:1
    },
    {_id:6,
      name:"9",
      url:"../images/c.png",
      catagory:"C",
      position:6,
      rank:6,
      orderrank:1
    },
    {_id:7,
      name:"8",
      url:"../images/c.png",
      catagory:"C",
      position:7,
      rank:7,
      orderrank:1
    },
    {_id:8,
      name:"7",
      url:"../images/c.png",
      catagory:"C",
      position:8,
      rank:8,
      orderrank:1
    },
    {_id:9,
      name:"6",
      url:"../images/c.png",
      catagory:"C",
      position:9,
      rank:9,
      orderrank:1
    },
    {_id:10,
      name:"5",
      url:"../images/c.png",
      catagory:"C",
      position:10,
      rank:10,
      orderrank:1
    },
    {_id:11,
      name:"4",
      url:"../images/c.png",
      catagory:"C",
      position:11,
      rank:11,
      orderrank:1
    },
    {_id:12,
      name:"3",
      url:"../images/c.png",
      catagory:"C",
      position:12,
      rank:12,
      orderrank:1
    },
    {_id:13,
      name:"2",
      url:"../images/c.png",
      catagory:"C",
      position:13,
      rank:13,
      orderrank:1
    },
    {_id:14,
      name:"A",
      url:"../images/s.png",
      catagory:"S",
      position:14,
      rank:1,
      orderrank:2
    },
    {_id:15,
      name:"K",
      url:"../images/s.png",
      catagory:"S",
      position:15,
      rank:2,
      orderrank:2
    },
    {_id:16,
      name:"Q",
      url:"../images/s.png",
      catagory:"S",
      position:16,
      rank:3,
      orderrank:2
    },
    {_id:17,
      name:"J",
      url:"../images/s.png",
      catagory:"S",
      position:17,
      rank:4,
      orderrank:2
    },
    {_id:18,
      name:"10",
      url:"../images/s.png",
      catagory:"S",
      position:18,
      rank:5,
      orderrank:2
    },
    {_id:19,
      name:"9",
      url:"../images/s.png",
      catagory:"S",
      position:19,
      rank:6,
      orderrank:2
    },
    {_id:20,
      name:"8",
      url:"../images/s.png",
      catagory:"S",
      position:20,
      rank:7,
      orderrank:2
    },
    {_id:21,
      name:"7",
      url:"../images/s.png",
      catagory:"S",
      position:21,
      rank:8,
      orderrank:2
    },
    {_id:22,
      name:"6",
      url:"../images/s.png",
      catagory:"S",
      position:22,
      rank:9,
      orderrank:2
    },
    {_id:23,
      name:"5",
      url:"../images/s.png",
      catagory:"S",
      position:23,
      rank:10,
      orderrank:2
    },
    {_id:24,
      name:"4",
      url:"../images/s.png",
      catagory:"S",
      position:24,
      rank:11,
      orderrank:2
    },
    {_id:25,
      name:"3",
      url:"../images/s.png",
      catagory:"S",
      position:25,
      rank:12,
      orderrank:2
    },
    {_id:26,
      name:"2",
      url:"../images/s.png",
      catagory:"S",
      position:26,
      rank:13,
      orderrank:2
    },
    {
      _id:27,
      name:"A",
      url:"../images/h.png",
      catagory:"H",
      position:27,
      rank:1,
      orderrank:3
    },
    { _id:28,
      name:"K",
     url:"../images/h.png",
      catagory:"H",
      position:28,
      rank:1,
      orderrank:3
    },
    {_id:29,
      name:"Q",
     url:"../images/h.png",
      catagory:"H",
      position:29,
      rank:3,
      orderrank:3
    },
    {_id:30,
      name:"J",
     url:"../images/h.png",
      catagory:"H",
      position:30,
      rank:3,
      orderrank:3
    },
    {_id:31,
      name:"10",
     url:"../images/h.png",
      catagory:"H",
      position:31,
      rank:5,
      orderrank:3
    },
    {_id:32,
      name:"9",
     url:"../images/h.png",
      catagory:"H",
      position:32,
      rank:6,
      orderrank:3
    },
    {_id:33,
      name:"8",
     url:"../images/h.png",
      catagory:"H",
      position:33,
      rank:7,
      orderrank:3
    },
    {_id:34,
      name:"7",
     url:"../images/h.png",
      catagory:"H",
      position:34,
      rank:8,
      orderrank:3
    },
    {_id:35,
      name:"6",
     url:"../images/h.png",
      catagory:"H",
      position:35,
      rank:9,
      orderrank:3
    },
    {_id:36,
      name:"5",
     url:"../images/h.png",
      catagory:"H",
      position:36,
      rank:10,
      orderrank:3
    },
    {_id:37,
      name:"4",
     url:"../images/h.png",
      catagory:"H",
      position:37,
      rank:11,
      orderrank:3
    },
    {_id:38,
      name:"3",
     url:"../images/h.png",
      catagory:"H",
      position:38,
      rank:12,
      orderrank:3
    },
    {_id:39,
      name:"2",
     url:"../images/h.png",
      catagory:"H",
      position:39,
      rank:13,
      orderrank:3
    },
    {_id:40,
      name:"A",
      url:"../images/d.png",
      catagory:"D",
      position:40,
      rank:1,
      orderrank:4
    },
    {_id:41,
      name:"K",
      url:"../images/d.png",
      catagory:"D",
      position:41,
      rank:2,
      orderrank:4
    },
    {_id:42,
      name:"Q",
      url:"../images/d.png",
      catagory:"D",
      position:42,
      rank:3,
      orderrank:4
    },
    {_id:43,
      name:"J",
      url:"../images/d.png",
      catagory:"D",
      position:43,
      rank:4,
      orderrank:4
    },
    {_id:44,
      name:"10",
      url:"../images/d.png",
      catagory:"D",
      position:44,
      rank:5,
      orderrank:4
    },
    {_id:45,
      name:"9",
      url:"../images/d.png",
      catagory:"D",
      position:45,
      rank:6,
      orderrank:4
    },
    {_id:46,
      name:"8",
      url:"../images/d.png",
      catagory:"D",
      position:46,
      rank:7,
      orderrank:4
    },
    {_id:47,
      name:"7",
      url:"../images/d.png",
      catagory:"D",
      position:47,
      rank:8,
      orderrank:4
    },
    {_id:48,
      name:"6",
      url:"../images/d.png",
      catagory:"D",
      position:48,
      rank:9,
      orderrank:4
    },
    {_id:49,
      name:"5",
      url:"../images/d.png",
      catagory:"D",
      position:49,
      rank:10,
      orderrank:4
    },
    {_id:50,
      name:"4",
      url:"../images/d.png",
      catagory:"D",
      position:50,
      rank:11,
      orderrank:4
    },
    {_id:51,
      name:"3",
      url:"../images/d.png",
      catagory:"D",
      position:51,
      rank:12,
      orderrank:4
    },
    {_id:52,
      name:"2",
      url:"../images/d.png",
      catagory:"D",
      position:52,
      rank:13,
      orderrank:4
    }
  ],
  show:false
  }

  componentDidMount=()=>{
    var firstRow=[];
    var secondRow=[];
    var thirdRow=[];
    var fourthRow=[];
    this.state.playCard.forEach((data, i)=>{
      if(i<=12){
        firstRow.push(data);
      }else if(i>12 && i<=25){
        secondRow.push(data)
      }else if(i>25 && i<39){
        thirdRow.push(data)
      }else{
        fourthRow.push(data)
      }
    });

    this.setState({firstRow,secondRow,thirdRow,fourthRow});
  }
  
  moveUp=(_id,obj)=>{

console.log(obj);
    this.state.playCard.forEach((data,i)=>{
      if(data.position==obj.position){
        data.position++;
        var editData=this.state.playCard.splice(i,1,data);
        editData=null;
      }
      if(data._id==_id){
        var editData=this.state.playCard.splice(i,1,obj);
        editData=null;
         
      }
    })

    function compare(a,b) {
      if (a.position < b.position)
        return -1;
      if (a.position > b.position)
        return 1;
      return 0;
    }
    this.state.playCard.sort(compare);
    
this.setState({playCard:this.state.playCard})
    
    var firstRow=[];
    var secondRow=[];
    var thirdRow=[];
    var fourthRow=[];
    this.state.playCard.forEach((data, i)=>{
      if(i<=12){
        firstRow.push(data);
      }else if(i>12 && i<=25){
        secondRow.push(data)
      }else if(i>25 && i<39){
        thirdRow.push(data)
      }else{
        fourthRow.push(data)
      }
    });
    this.setState({firstRow,secondRow,thirdRow,fourthRow});
    // this.setState({firstRow:this.state.firstRow});

  }
  
  moveDown=(_id,obj)=>{
    console.log(obj);
        this.state.playCard.forEach((data,i)=>{
          
          if(data.position==obj.position){
            data.position--;
            var editData=this.state.playCard.splice(i,1,data);
            editData=null;
             
          }
          if(data._id==_id){
            var editData=this.state.playCard.splice(i,1,obj);
            editData=null;
             
          }
        })
        function compare(a,b) {
          if (a.position < b.position)
            return -1;
          if (a.position > b.position)
            return 1;
          return 0;
        }
        
        this.state.playCard.sort(compare);
        this.setState({playCard:this.state.playCard});
        var firstRow=[];
    var secondRow=[];
    var thirdRow=[];
    var fourthRow=[];
        this.state.playCard.forEach((data, i)=>{
          if(i<=12){
            firstRow.push(data);
          }else if(i>12 && i<=25){
            secondRow.push(data)
          }else if(i>25 && i<39){
            thirdRow.push(data)
          }else{
            fourthRow.push(data)
          }
        });
        this.setState({firstRow,secondRow,thirdRow,fourthRow});
      }
      
      draw=(_id)=>{
        let newObj;
        this.state.playCard.forEach((data,i)=>{
          
          
          if(data._id==_id){
              // drawCard.push(data);
               newObj=[data].concat(this.state.drawCard);
            var editData=this.state.playCard.splice(i,1);
            editData=null;

             
          }
        })
        
        this.setState({playCard:this.state.playCard,drawCard:newObj});
        var firstRow=[];
    var secondRow=[];
    var thirdRow=[];
    var fourthRow=[];
        this.state.playCard.forEach((data, i)=>{
          if(i<=12){
            firstRow.push(data);
          }else if(i>12 && i<=25){
            secondRow.push(data)
          }else if(i>25 && i<39){
            thirdRow.push(data)
          }else{
            fourthRow.push(data)
          }
        });
        this.setState({firstRow,secondRow,thirdRow,fourthRow});
      }

      sortData=()=>{
        // alert('sorting');
        function compare(a,b) {
          if (a.orderrank < b.orderrank )
            return -1;
          if (a.orderrank > b.orderrank )
            return 1;
          return 0;
        }
        function compareRank(a,b) {
          if (a.rank < b.rank )
            return -1;
          if (a.rank > b.rank )
            return 1;
          return 0;
        }
        
        this.state.drawCard.sort(compare);
        let catC=[];
        let catS=[];
        let catH=[];
        let catD=[];
        this.state.drawCard.forEach((data)=>{
          if(data.catagory=="C"){
            catC.push(data);
          }else if(data.catagory=="S"){
            catS.push(data);
          }
          else if(data.catagory=="H"){
            catH.push(data);
          }
          else if(data.catagory=="D"){
            catD.push(data);
          }
        })
        catC.sort(compareRank);
        catS.sort(compareRank);
        catH.sort(compareRank);
        catD.sort(compareRank);

        this.setState({drawCard:catC.concat(catS.concat(catH.concat(catD)))});

      }

      show=()=>{
        this.setState({show:true});
      }
  render() {
  
    
      return (
        <div style={{marginTop:"90px"}}>
       <center>
         <img src="../images/mainCard.png" style={{width:"200px", height:"200px", cursor:"pointer"}} onTouchTap={this.show}/>
         </center>
         {this.state.show==true?<Row>
         <Col xs={2} style={{width:"250"}}>
         <FirstRow data={this.state.firstRow} moveUp={this.moveUp} moveDown={this.moveDown} draw={this.draw}/>
         </Col>
         <Col xs={2}  style={{width:"250"}}>
         <FirstRow data={this.state.secondRow} moveUp={this.moveUp} moveDown={this.moveDown} draw={this.draw}/>
         </Col>
         <Col xs={2}  style={{width:"250"}}>
         <FirstRow data={this.state.thirdRow} moveUp={this.moveUp} moveDown={this.moveDown} draw={this.draw}/>
         </Col>
         <Col xs={2}  style={{width:"250"}}>
         <FirstRow data={this.state.fourthRow} moveUp={this.moveUp} moveDown={this.moveDown} draw={this.draw}/>
         </Col>
         <Col xs={2}  style={{width:"250"}}>
         <Row>
           <Col xs={6}>
         <h5> Drawn Card </h5>
         </Col>
         <Col xs={6}>
         <h5 onTouchTap={this.sortData}>Sort </h5>
         </Col>
         </Row>
        <DrawCard data={this.state.drawCard}/>
         </Col>
         </Row>
         :
         null
         }
         
       
          </div>
      )
    }
  }



