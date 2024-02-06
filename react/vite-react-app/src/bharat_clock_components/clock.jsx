function ClockCurrent(){
    let date = new Date();
    let curr_date = date.toLocaleDateString();
    let curr_time = date.toLocaleTimeString();
   return <p className="para">This is the current time: {curr_date} - {curr_time}</p>
}
export default ClockCurrent;