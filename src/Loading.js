import React from "react";
const Loading = (props)=>{
  return(
  
    <div className="ui segment">
    <div className="ui active inverted dimmer">
      <div className="ui text loader">Loading</div>
    </div>
    <p></p>
  </div>
  )
}

// لو مدخلتش props هو بيدخل ال default
Loading.defaultProps={
  message:'Loading...'
}
export default Loading