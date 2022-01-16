import React from "react";
function ItemBox(props){
   
    console.log(props.inputList);
    return (
<div>

{(props.inputList).map((todo) => ( <li key={todo.id}> {todo.title} </li>))}
</div>
    

);
}
export default ItemBox;