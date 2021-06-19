// import { info } from 'console';
import React,{ useEffect, useState } from 'react';
import { useHistory , useParams } from 'react-router-dom';
import styled from 'styled-components';
import './Detail.scss';
// import {재고context} from './App.js';
import { Nav } from 'react-bootstrap';

let 박스 = styled.div`
    padding: 20px;
`;
let 제목 = styled.h4`
    font-size: 20px;
    color: ${props => (props.색상)};
`;

function Detail(props){
    // let 재고 = useContext(재고context);
useEffect(()=>{
   let 타이머 = setTimeout(() => {alert변경(false) }, 2000);
   console.log('안녕');
   return ()=>{clearTimeout(타이머)}
},[]);

let [alert, alert변경]= useState(true);
let [inputData , inputData변경] = useState('');
let { id } = useParams();
let history = useHistory();
let [누른탭,누른탭변경]= useState(0);

    return(
      <div className="container">
        <박스>
           <제목 className='red'>상세페이지</제목>
        </박스>

    <input onChange= {(e)=>{inputData변경(e.target.value)}}>
    </input>
        {
            alert === true
            ?(<div className="my-alert2">
            <p>재고가 얼마 남지 않았습니다 </p>
            </div>
        )
        : null
        }
        

        <div className="row">
          <div className="col-md-6">
            <img src="https://github.com/heejukim-developer/shop/blob/master/src/1.jpg?raw=true" width="100%" />
          </div>
          <div className="col-md-6 mt-4">
            <h4 className="pt-5">{props.shoes작명[id].title}</h4>
            <p>{props.shoes작명[id].content}</p>
            <p>{props.shoes작명[id].price}</p>

            <Info 재고작명 ={props.재고작명 }></Info>

            <button className="btn btn-danger" onClick ={()=>{
                props.재고변경작명([9,11,12]);
            }}>주문하기</button> 
            <button className="btn btn-danger" onClick={()=>{
             history.goBack();
            }}>뒤로가기</button> 

          </div>
        </div>

  <Nav className = "mt-5" variant="tabs" defaultActiveKey="link-0">
    <Nav.Item>
        <Nav.Link eventKey="link-0" onClick = {()=>{누른탭변경(0)}}>Active</Nav.Link>
    </Nav.Item>
    <Nav.Item>
        <Nav.Link eventKey="link-1" onClick = {()=>{누른탭변경(1)}}>Option 2</Nav.Link>
    </Nav.Item>
    </Nav>


<TabContent 누른탭작명 = {누른탭}></TabContent>
  </div> 
    )
  }

  function TabContent(props){
    if(props.누른탭작명 === 0){
        return <div>0번째 내용입니다</div>
    }else if(props.누른탭작명 === 1){
        return<div>1번째 내용입니다</div>
    }else if(props.누른탭작명 === 2){
        return<div>2번째 내용입니다</div>
    }

  }
  
  function Info(props){
      return(
          <p> 재고: {props.재고작명[0]}</p>
      )
  }

  export default Detail;