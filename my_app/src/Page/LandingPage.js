import React , {useState} from 'react'
import Card from '../Component/Card/Card'
import FoodComponent from  '../Component/FoodComponent/FoodComponent'
const LandingPage = ({ setSelectItem, item , setItem, selectItem ,data}) => {
// const [selectItem , setSelectItem] = useState();

  return (
    <>            
<FoodComponent item={item} setItem={setItem} setSelectItem={setSelectItem} selectItem={selectItem}  data={data}/>  
    </>
  )
}

export default LandingPage
