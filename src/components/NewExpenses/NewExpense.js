import React from "react";
import './NewExpense.css';
import ExpenseFrom from "./ExpenseForm";

const NewExpense = (props) =>{
    
    const saveExpenseDataHandler = (enteredExpenseData) =>{
        const renewexpenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        
        console.log(renewexpenseData);

        props.onAddExpense(renewexpenseData);
    }; 

    return (
        <div className="new-expense">
            <ExpenseFrom onSaveExpenseDate={saveExpenseDataHandler} />
        </div>  
    );
}

export default NewExpense;