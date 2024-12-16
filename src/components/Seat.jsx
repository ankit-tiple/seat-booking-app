import "../App.css"

const Seat = ({seatno,isSelected,sendDataToSeatRow}) => {
  const handleClick = (seatno) => (sendDataToSeatRow(seatno));
let style = 'btn';
  
if(isSelected){
style="selected"
}
else {
style="btn"
}



  return (
    <div><button className={style} onClick={() => handleClick(seatno)}>{seatno}</button></div>
  )
}

export default Seat