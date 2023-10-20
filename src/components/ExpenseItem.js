import React from "react";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";

const ExpenseItem = (props) => {
    // const food = 10;
    // const petrol = 100;
    // const movie = 200;
    return (
        <div>
            {/* <h1>Expense Items</h1>
            <h3>Food Rs {food}</h3>
            <h3>Petrol Rs {petrol}</h3>
            <h3>Movie Rs {movie}</h3> */}
            <ExpenseDate date={props.date} />
            <ExpenseDetails amount={props.amount} localExpenditure={props.localExpenditure} title={props.title} />
        </div>
    )
}

export default ExpenseItem;