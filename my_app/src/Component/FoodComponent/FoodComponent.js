import React, { useEffect, useState } from 'react'
import './foodcomponent.css'
import Card from '../Card/Card';
const FoodComponent = ({item, setItem,setSelectItem,selectItem,data   }) => {
    const [selectedFilters, setSelectedFilters] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);

    const handleFilterButtonClick = (selectedCategory) => {
    
        if (selectedFilters.includes(selectedCategory)) {
          let filters = selectedFilters.filter((el) => el !== selectedCategory);
          setSelectedFilters(filters);
        } else {
          setSelectedFilters([...selectedFilters, selectedCategory]);
        }
      };
   

    useEffect(()=>{
        if (selectedFilters.length > 0) {
          console.log(selectedFilters);
            let tempItems =   selectedFilters.map((selectedCategory) => {
             const val =  data.meals.filter( curr => {
             
              if( curr.labels.includes(     selectedCategory.label.toLowerCase())) return true;
              return false;
             }  )
            //  console.log(val, "hello");
             return val;
            });

            setFilteredItems(tempItems.flat());
          } 
          else{
            
            setFilteredItems(data.meals);
          }
    },[selectedFilters])
  return (
    <>
      <div>
        <div  className='btn-box' style={{display:'flex',flexDirection:'column'  , justifyContent:'space-around'}}>
            <div style={{  marginBottom:'25px' , marginTop:'25px'}}>
            {data && data.labels.map( (curr,index) =>
                  <button key={index} style={{ marginRight:'2rem', marginBottom:'2rem' }} onClick={()=>handleFilterButtonClick(curr)} className={`${selectedFilters.includes(curr)?"active":''}  btn_food_select btn-outline-primary `}>{curr.label}</button>
              )}
            </div>
         
          <div>
          <hr style={{backgroundColor:'grey' , width:'100%' , height:'1px'}} />
          </div>
          
        </div>
{/* { console.log(filteredItems , 'Hell') } */}
        <div>

            {filteredItems && filteredItems.map((curr, index) =>
               <React.Fragment key={index}>
             
                <Card item={item} curr={curr} setItem={setItem} setSelectItem={setSelectItem} selectItem={selectItem} />
               </React.Fragment>
               
                )
            }
        </div>
      </div>
    </>
  )
}

export default FoodComponent
