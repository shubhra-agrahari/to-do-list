import {v4 as uuidv4} from 'uuid';

function  Form (props) {
  
    let handleChange = (event) => {
      props.setItem(event.target.value);
      //console.log("target value in form ", event.target.value);
    };
    let handleSubmit =(event) =>{
      event.preventDefault();
      //console.log("clicked Add :: " + props.item);
     props.setItemList([...props.itemList, {id: uuidv4(), title: props.item, name: props.name, completed: false}]);
         props.setItem("");
    }
    return (
      <div><h3>{props.name}</h3>
<form onSubmit={handleSubmit}>
<input type="text" placeholder="enter an Item.." value={props.item} required onChange={handleChange}/>

<button type="submit" > + </button>
</form>
</div>
    );
    }
export default Form;