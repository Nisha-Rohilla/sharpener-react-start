const ExpenseItem = () =>{
    const food = 10;
    const petrol = 100;
    const movie = 200;
    return(
        <div>
            <h1>Expense Items</h1>
            <h3>Food Rs {food}</h3>
            <h3>Petrol Rs {petrol}</h3>
            <h3>Movie Rs {movie}</h3>
        </div>
    )
}

export default ExpenseItem;