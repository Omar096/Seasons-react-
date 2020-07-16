import './SeasonDisplay.css'
import React from "react";
import ReactDOM from "react-dom";
const SeasonConfig ={
  summer:{
    text:'Lets hit the beach',
    iconName:'sun'
  }
  ,
  winter:{
    text:'Burr, it is chilly',
    iconName:'snowflake'
  }
}
const SeasonMonth = (lat, month) => {
  if (lat > 0) {
    if (month > 2 && month < 9) return "summer";
    else return "winter";
  } else {
    if (month > 2 && month < 9) return "winter";
    else return "summer";
  }
};
const SeasonDisplay = (props) => {
  const Season = SeasonMonth(props.lat, new Date().getMonth());
  const{text,iconName} =SeasonConfig[Season]
  return (
    <div className={`season-display ${Season}`}>
      <i className= {`${iconName} icon massive icon-left`}/> 
     <h1 className='text'>{text}</h1>
     <i className= {`${iconName} icon massive icon-right`}/> 
    </div>
  );
};

export default SeasonDisplay;
