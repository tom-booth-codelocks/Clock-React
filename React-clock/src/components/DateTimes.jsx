import React from 'react'
import Clock from 'react-clock';
const DateTimes = ({key, title, timezone, time}) => {

    return (
        <div className="card m-2" style={{"maxWidth": "250px"}}>
            
                <div className="col-md-8 m-2 mx-auto text-center">      
                    
                    <div className = "pb-2">
                        <h5 className="card-title">{title}</h5>        
                        <p className="card-text">{time.toLocaleTimeString("en-US", {timeZone: timezone})}</p> 
                    </div>      
                    <Clock value = {time.toLocaleTimeString("en-US", {timeZone: timezone})} /> 
                </div>
            
        </div>
    )
}

export default DateTimes