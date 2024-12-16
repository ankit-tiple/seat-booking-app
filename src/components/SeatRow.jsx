import Seat from "./Seat"
import "../App.css"
import { useState } from "react"
import { use } from "react";



const SeatRow = () => {
  const [dataFromSeat , setDataFromSeat] = useState();
  const [arrayofSelectedSeat , setArrayOfSelectedSeat] = useState([]);

  const ArraySeatNo = [1,2,3,4,5]
  
  const handleDataFromSeat = (data) => {
  if(arrayofSelectedSeat.includes(data)){
  console.log(`The ${data} is already present in the array`)
  const indexOfSelectedSeat = arrayofSelectedSeat.indexOf(data);
  if(indexOfSelectedSeat > -1){
    console.log("Inside the index Logic Code")
    const tempArrayofSelectedSeat = [...arrayofSelectedSeat];
    tempArrayofSelectedSeat.splice(indexOfSelectedSeat,1);
    setArrayOfSelectedSeat([...tempArrayofSelectedSeat]);
  }
  }
  else
  {
  console.log(`The ${data} is not present in the array. Hence adding it`)
  setArrayOfSelectedSeat([...arrayofSelectedSeat,data])
  }


  console.log(arrayofSelectedSeat)
  }
  console.log(`This is the data from Seat Component ${dataFromSeat} whent it is clicked`)

  return (
    <div className="seatRow">
      {ArraySeatNo.map((num) => { return (<Seat key={num} seatno={num} isSelected={arrayofSelectedSeat.includes(num)}  sendDataToSeatRow={handleDataFromSeat}/>)})}
    </div>
  )
}

export default SeatRow