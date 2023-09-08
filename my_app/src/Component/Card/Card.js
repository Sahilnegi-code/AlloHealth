import React, { useEffect } from 'react'
import './card.css'

// item = passenger1 or passenger2
const Card = ({curr,  selectItem , setSelectItem , setItem ,item }) => {
    // console.log(curr);
const handleItem = async(obj)=>{
  if(selectItem === "") return;

let passenger = {...item};
let arr = [];
if(Object.keys(passenger).length === 0){
  arr.push(obj);
  if( selectItem === "Passenger1"){
    passenger["Passenger1"] = arr;
  passenger["Passenger2"] = [];  
  }
  else{
    passenger["Passenger1"] = [];
    passenger["Passenger2"] = arr; 
  }
 
  setItem(passenger);
  return ;

}
else{

    let ps = passenger[selectItem];
    let tempObj ;
      tempObj = [...ps , obj];
    passenger[selectItem]  = tempObj;
    setItem(passenger);
  }


}




  return (
    <div className='d-flex' style={{marginTop:'3rem' , marginBottom:'3rem'}}>
      <div >
        <img className='img' src={  curr.img} alt="" />
      </div>
      <div >
        <div>
        <div>
        <h4 className='h_4'>{ curr.id}</h4>
        <h2>{curr.title}</h2>
            <div>
                <ul style={{listStyle:'none'}}>
                      <li > <span className='h_3 font-weight-bold'> starter</span>  : {" "} {   curr.starter }  </li>
                    <li > <span className='h_3 font-weight-bold'> Desert  </span> :  {" "} {  curr.desert} </li>
                    <li > <span className='h_3 font-weight-bold'> Selected Drink </span>  : {" "} {  curr.drinks[0].title}  </li>
                </ul>
            </div>
        </div>
           <div>
            <span> {"₹ " } {curr.price}</span>
           </div>
        </div>

        <div>

            <div>
<img src="" alt="" />
<img src="" alt="" />
<img src="" alt="" />
            </div>
            <div>
                <button className='btn_food_select  btn-outline-secondary' onClick={(e)=> handleItem(curr) } >Select</button>
            </div>
        </div>



      </div>
    </div>
  )
}

export default Card
