import logo from './logo.svg';
import './App.css';
import Form from './Components/Form';
import ItemBox from './Components/ItemBox';
import { useState } from 'react';

const App=()=> {
  
  let[input, setInput] = useState("");
  let[inputList, setInputList] = useState([]);

  return (
    <div>
      <div>
      <Form input ={input}
      setInput= {setInput}
      inputList = {inputList}
      setInputList={setInputList}

      ></Form>
      </div>
       <div>
        <ItemBox  inputList={inputList} setInputList={setInputList}></ItemBox>
      </div>   
    </div>
  );
}

export default App;
