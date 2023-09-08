import React, { useEffect, useState } from "react";
import "./orderpage.css";
export default function Ordering({ setSelectItem, item, selectItem, setItem }) {
  const [total, setTotal] = useState({});
  console.log(item);
  const handleremove = (curr, passenger) => {
    let tempObj = { ...item };
    let arr = tempObj[passenger];
    arr = arr.filter((val) => val !== curr);
    tempObj[passenger] = arr;
    setItem(tempObj);
  };
  const handleSumItem = ()=>{
    let obj = {...total };
    // console.log(obj)
  let sum = 0;
  if(Object.keys(obj).length === 0 ){
    obj.Passenger1= 0;
    obj.Passenger2 = 0;
    console.log(obj);
    setTotal(obj);

    return;
  }
  // if(item["passenger1"]){
    item["Passenger1"].map((curr)=> sum += ( curr.price) );
    console.log(sum);
    obj = {...obj ,  Passenger1:sum}
  // }

  sum = 0;

  item["Passenger2"].map((curr)=> sum += parseInt( curr.price))
  obj = {...obj, Passenger2 : sum};
  console.log(obj);
  setTotal(obj);

  }
  useEffect(() => {
    handleSumItem();
  }, [item]);
  return (
    <>
      <div>
      <div style={{width:'50%'}}>
            <select  className='select_box' value={selectItem} name="" id="" onChange={(e)=> setSelectItem(e.target.value) }>
                <option > </option>
                <option value="Passenger1">Passenger1</option>
                <option value="Passenger2">Passenger2</option>
            </select>
        </div>
      </div>



      <div>
        <div>
          <div className="accordion" id="accordionExample">
            <div
              className="card"
              style={{ marginTop: "2rem", marginBottom: "2rem" }}
            >
              <div className="card-header" id="headingOne">
                <h2 className="mb-0">
                  <button
                    className="btn btn-primary"
                    type="button"
                    data-toggle="collapse"
                    data-target=".collapseOne"
                    aria-controls="collapseOne"
                  >
                    Passenger 1
                  </button>
                </h2>
              </div>

              <div id="" className="collapse collapseOne">
                <div className="card-body">
                  {item &&
                    item["Passenger1"] &&
                    item["Passenger1"].map((curr, index) => (
                      <React.Fragment key={index}>
                        <div style={{ display: "flex" }}>
                          <div style={{ width: "50%" }}>{curr.title}</div>
                          <div style={{ width: "50%", textAlign: "right" }}>
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "flex-end",
                              }}
                            >
                              <div>
                                {""} {curr.price}
                              </div>

                              <span
                                style={{
                                  marginLeft: "1rem",
                                  marginBottom: "1rem",
                                }}
                              >
                                <button
                                  onClick={() =>
                                    handleremove(curr, "Passenger1")
                                  }
                                  type="button"
                                  class="btn  btn-danger"
                                  style={{
                                    padding: "0",
                                    height: "2rem",
                                    width: "2rem",
                                    borderRadius: "50%",
                                    textAlign: "center",
                                  }}
                                >
                                  -
                                </button>
                              </span>
                            </div>
                          </div>
                        </div>
                      </React.Fragment>
                    ))}
                </div>
                <hr />
                <div style={{display:'flex' ,width:'50%', margin:"auto" }}>
                  <div style={{width:'60%'}}> Total</div>
                  <div style={ { width:'40%' } }> 
                   {
                      total["Passenger1"] 
                    }
                     </div> 
                </div>



              </div>
            </div>

            <div
              className="card"
              style={{ marginTop: "2rem", marginBottom: "2rem" }}
            >
              <div className="card-header" id="headingOne">
                <h2 className="mb-0">
                  <button
                    className="btn btn-primary"
                    type="button"
                    data-toggle="collapse"
                    data-target=".collapseTwo"
                    aria-controls="collapseTwo"
                  >
                    Passenger 2
                  </button>
                </h2>
              </div>

              <div id="" className="collapse collapseTwo">
                <div className="card-body">
                  {item &&
                    item["Passenger2"] &&
                    item["Passenger2"].map((curr, index) => (
                      <React.Fragment key={index}>
                        <div style={{ display: "flex" }}>
                          <div style={{ width: "50%" }}>{curr.title}</div>
                          <div style={{ width: "50%", textAlign: "right" }}>
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "flex-end",
                              }}
                            >
                              <div>
                                {""} {curr.price}
                              </div>

                              <span
                                style={{
                                  marginLeft: "1rem",
                                  marginBottom: "1rem",
                                }}
                              >
                                <button
                                  onClick={() =>
                                    handleremove(curr, "Passenger2")
                                  }
                                  type="button"
                                  class="btn  btn-danger"
                                  style={{
                                    padding: "0",
                                    height: "2rem",
                                    width: "2rem",
                                    borderRadius: "50%",
                                    textAlign: "center",
                                  }}
                                >
                                  -
                                </button>
                              </span>
                            </div>
                          </div>
                        </div>
                      </React.Fragment>
                    ))}
                </div>

                <hr />
                <div style={{display:'flex' ,width:'50%', margin:"auto" }}>
                  <div style={{width:'60%'}}> Total</div>
                  <div style={ { width:'40%' } }> 
                   {
                      total["Passenger2"] 
                    }
                     </div> 
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
