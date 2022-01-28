import React from "react";
function ItemBox(props){
   
    //console.log(props.itemList);

    function onDragStart(e, item) {
             console.log("on drag start :", item);
              //    e.dataTransfer.setData("itemData", e.title);
              e.dataTransfer.setData("item", item);
            //  e.dataTransfer.setData("listName",e.name); 

            
             // const format = ev.dataTransfer.getData("formatText", format);
              //const color  = ev.dataTransfer.getData("colorText", color); 
           }
        
    function onDragEnd(e, item) {
        
           //  let {item, name} = JSON.parse(e.dataTransfer.getData("itemData"));
                 console.log("When drag ends: ", e.dataTransfer.getData("item"));
                 console.log("When drag ends item: ", item);

                 console.log("When drag ends prop name: ", props.name);

            // if(e.target.id === name) return;
             props.setItemList((prev) => {
               let newList = prev.filter((itemList) => {
                 return itemList
                 != item
               });
               return newList
             });
        
           }

           function onDrop(e) {
            console.log(" On drop props: ", props)
                 let item= JSON.parse(e.dataTransfer.getData("item"));
              console.log("json values : ", item)
            
                // if(listName == name) return;
                
               //props.setItemList((prev) => {
               //    return [item, ...prev];
                 //})
               }
        
        
           function preventDefaultBehavior(e) {
             e.preventDefault();
           }
        


        
console.log(props.name);

    return (
<div>

{(props.itemList).map((item) => ( <ul ><li draggable="true" onDragStart={(e) => {onDragStart(e, item)}}
  onDragEnd={(e) => {onDragEnd(e, item)}}  onDrop={(e) => {onDrop(e)}} key={item.id} value={item.title}> {item.title} </li></ul>))}

</div>
    

);
}
export default ItemBox;