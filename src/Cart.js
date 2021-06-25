import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';


function Cart(props){

    
return(
<div>
<Table striped bordered hover>
    <tr>
      <th>#</th>
      <th>상품명</th>
      <th>수량</th>
      <th>색상</th>
      <th>수량</th>

    </tr>
    

    {props.state.map((a,i)=>{
        return(
        <tr key ={i}>
            <td>{a.id}</td>
            <td>{a.name}</td>
            <td>{a.quan}</td>
            <td>{a.color}</td>
            <td><button onClick ={()=>{props.dispatch({type :'수량증가'})}}>+</button>
                <button onClick ={()=>{props.dispatch({type :'수량감소'})}}>-</button>
            </td>

            </tr>)
        })}
      </Table>

      {
          props.alert열렸니 === true
        ?(<div className = 'my-alert2'>
        <p>지금 구매하시면 신규고객 20%할인</p>
        <button onClick={()=>{props.dispatch({type:'alert닫기'})}}>
        닫기</button>
        </div>)
        :null
      }
    

</div>

    )
}

function state를props화 (state){
    return{
       state: state.reducer,
       alert열렸니:state.reducer2
    }
}
export default connect(state를props화)(Cart)
// export default Cart;