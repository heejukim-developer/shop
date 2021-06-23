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
    </tr>
    

    {props.state.map((a,i)=>{
        return(
        <tr key ={i}>
            <td>{a.id}</td>
            <td>{a.name}</td>
            <td>{a.quan}</td>
            <td>{a.color}</td>
            </tr>)
        })}
     
     
   
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    
</Table>
</div>

    )
}

function state를props화 (state){
    return{
       state: state
    }
}
export default connect(state를props화)(Cart)
// export default Cart;