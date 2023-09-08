import './App.css';
import DragDrop from './DragDrop'; 
import LandingPage from './Page/LandingPage'
import Ordering from './Page/OrderingPage/Ordering'
import { useEffect, useState } from 'react';
function App() {
  const [selectItem , setSelectItem] = useState("");
  const [item , setItem] = useState({});
  const [data , setData] = useState([])
  console.log(item)
  const apiCalling = async()=>{
    try{
    console.log("Api Call")
      const res =  await  fetch("http://localhost:5000/data");
      console.log(res);
      const val = await res.json();
      console.log(val);
      setData(val);
    }
    catch(err){
      console.log(err);
    }
  

  }
  useEffect(()=>{
    console.log("Call");
    apiCalling();
  },[])
  return (
    <>
    {/* <DragDrop/> */}

<div className='container_box' style={{marginTop:'2rem'}}>
<div style={{display:'flex'}}>
<div style={{width:'50%'}}>
   { Object.keys(data).length > 0  && <LandingPage setSelectItem={setSelectItem} item={item} setItem={setItem} selectItem={selectItem} data={data}/>}
</div>
      <div style={{ padding:'1rem' ,backgroundColor:'#D3D3D3' , width:'40%', height:'100vh' ,marginLeft:'auto'}}> 
      {console.log("Hello")}
  { Object.keys(data).length > 0    &&   <Ordering setItem={setItem} setSelectItem={setSelectItem} item={item} selectItem={selectItem}/> }
       </div>
    
    </div>
</div>
   
    </>

  );
}

export default App;
