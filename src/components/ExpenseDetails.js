import React from "react";
import Desc from "./Desc";
// import Desc from "./Desc";
const ExpenseDetails = (props) =>{
    return(
        <div>
            <div>
                <Desc title = {props.title} localExpenditure = {props.localExpenditure}></Desc>
            
            </div>
            <h4>{props.amount}</h4>
        </div>
    )
}

export default ExpenseDetails;