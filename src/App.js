// import logo from './logo.svg';
// import React, {useContext, useState, useEffect} from 'react';
// import './App.css';


// function Button({children, onClick}) {
//   return <button onClick={onClick}>{children}</button>
// }

// function ListItem({item, onDragStart, onDragEnd}) {

//   return <li draggable="true" 
//   onDragStart={(e) => {onDragStart(e, item)}}
//   onDragEnd={(e) => {onDragEnd(e, item)}}>
//     {item}
//   </li>
// }

// function List({name}) {

//   let [listItems, setListItem] = useState([]);
//   let [inputValue, setInputValue] = useState('');

//   useEffect(()=>{
//     fetch("http://localhost:3001").then(res => 
//       {
//         if(res.ok){
//           return res.json();
//         }

    
//       }).then(setListItem(res.data.cars))
//   });
 

//   function inputOnChange(e) {
//     setInputValue(e.target.value);
//   }

//   function addItemToList() {
//     inputValue && setListItem([inputValue, ...listItems])
//     setInputValue('')
//   }

//   function onDragStart(e, item) {
//     console.log("on drag start :", JSON.stringify({item, name}))
//     e.dataTransfer.setData("itemData", JSON.stringify({item, name}));
//   }

//   function onDragEnd(e) {

//     let {item, name} = JSON.parse(e.dataTransfer.getData("itemData"));

//  console.log("list id = ", e.target.id, item, name)
//     if(e.target.id == name) return;
//     setListItem((prev) => {
//       let newList = prev.filter((listItem) => {
//         return listItem != item
//       });
//       return newList
//     });

//   }

//   function preventDefaultBehavior(e) {
//     e.preventDefault();
//   }

//   function onDrop(e) {

//     let {item, name: listName} = JSON.parse(e.dataTransfer.getData("itemData"));
//  console.log("json values : ", item, name)

//     if(listName == name) return;
    
//     setListItem((prev) => {
//       return [item, ...prev];
//     })
//   }


//   return (
//     <div className="list">
//       <h2>{name}</h2>
//       <input value={inputValue} onChange={inputOnChange} />
//       <Button onClick={addItemToList}>Submit</Button>
//       <ul id={name} onDragOver={preventDefaultBehavior} onDrop={onDrop}>
//         {
//           listItems.map((item) => {
//             return <ListItem onDragStart={onDragStart} onDragEnd={onDragEnd} item={item}  />
//           })
//         }
//       </ul>
//     </div>
//   )

// }

// function App() {
 
//   return (
//     <>
//       <header className="header">
//         <h1>Drag and Drop</h1>
//       </header>
//       <main className="main">
//         <List name="List 1" />
//         <List name="List 2" />
//         <List name="List 3" />
//         <List name="List 4" />
//       </main>
//       <footer className="footer">Footer</footer>
//     </>
//   );
// }

// export default App;











import './App.css';
import List from './Components/List';
import React from 'react';

const App=(props)=> {
  


  return (
    <>
       <header className="header">
        <h1>Drag and Drop</h1>
       </header>
       <main className="main">
         <List name="List 1" />
         <List name="List 2" />
         <List name="List 3" />
         <List name="List 4" />
       </main>
       <footer className="footer">Footer</footer>
     </>
  );
}

export default App;


