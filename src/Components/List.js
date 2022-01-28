
import './Component.css';
import Form from './Form';
import ItemBox from './ItemBox';
import { useState } from 'react';

const List=(props)=> {
  
  let[item, setItem] = useState("");
  let[itemList, setItemList] = useState([]);

  console.log("list name in List component: ", props.name);
  return (
    <div className='list'>
      <div >
      <Form  
      item ={item}
      setItem= {setItem}
      itemList = {itemList}
      setItemList={setItemList}  
      name= {props.name}   >
      </Form>
      </div>

       <div >
        <ItemBox  itemList={itemList} setItemList={setItemList} name= {props.name}></ItemBox>
      </div>   
    </div>
  );
}

export default List;