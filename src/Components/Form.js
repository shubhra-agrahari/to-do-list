import {v4 as uuidv4} from 'uuid';

function  Form (props) {
  
    let handleChange = (event) => {
      props.setInput(event.target.value);
      //console.log( event.target.value);
    };
    let handleSubmit =(event) =>{
      event.preventDefault();
      console.log("clicked Add :: " + props.input);
     props.setInputList([...props.inputList, {id: uuidv4(), title: props.input, completed: false}]);
   
    // console.log(props.inputList.l)
      props.setInput("");
    }
    return (
<form onSubmit={handleSubmit}>
<input type="text" placeholder="enter an Item.." value={props.input} required onChange={handleChange}/>

<button type="submit" > ADD</button>
</form>
    );
    }
export default Form;