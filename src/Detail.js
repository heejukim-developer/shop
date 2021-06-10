import React,{ useEffect, useState } from 'react';
import { useHistory , useParams } from 'react-router-dom';
import styled from 'styled-components';
import './Detail.scss';

let 박스 = styled.div`
    padding: 20px;
`;
let 제목 = styled.h4`
    font-size: 20px;
    color: ${props => (props.색상)};
`;

function Detail(props){

useEffect(()=>{
//    let 타이머 = setTimeout(() => { }, 2000);


});

let { id } = useParams();
let history = useHistory();

    return(
      <div className="container">
        <박스>
           <제목 className='red'>상세페이지</제목>
        </박스>
        <div className="my-alert2">
            <p>재고가 얼마 남지 않았습니다 </p>
        </div>
        

        <div className="row">
          <div className="col-md-6">
            <img src="https://github.com/heejukim-developer/shop/blob/master/src/1.jpg?raw=true" width="100%" />
          </div>
          <div className="col-md-6 mt-4">
            <h4 className="pt-5">{props.shoes작명[id].title}</h4>
            <p>{props.shoes작명[id].content}</p>
            <p>{props.shoes작명[id].price}</p>
            <button className="btn btn-danger">주문하기</button> 
            <button className="btn btn-danger" onClick={()=>{
             history.goBack();
            }}>뒤로가기</button> 

          </div>
        </div>
  </div> 
    )
  }
  export default Detail;