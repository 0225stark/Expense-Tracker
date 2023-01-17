import React, { useState } from "react";
import './ExpenseForm.css';


const ExpenseForm = (props) =>{
    
    const [entertitle,setentertitle] = useState('');
    const [enteramount,setenteramount] = useState('');
    const [enterdate,setenterdate] = useState('');

    const titlechangehandler = (event) =>{
        setentertitle(event.target.value);
    };
    const amountchangehandler = (event) =>{
        setenteramount(event.target.value);
    };
    const datechangehandler = (event) =>{
        setenterdate(event.target.value);
    };

    const submithandler = (event) =>{
        event.preventDefault();

        const expenseData={
            title: entertitle,
            amount: enteramount,
            date: new Date(enterdate)
        };

        props.onSaveExpenseDate(expenseData);

        setenteramount('');
        setenterdate('');
        setentertitle('');
    };

    return (
        <form onSubmit={submithandler}>
            <div className="expenseform">
                <div className="expenseformdetails">
                    <label>Title</label>
                    <input type="text" value={entertitle} onChange={titlechangehandler} />
                </div>
                <div className="expenseformdetails">
                    <label>Amount</label>
                    <input type="number" min="0.1" step="0.1" value={ enteramount } onChange={ amountchangehandler } />
                </div>
                <div className="expenseformdetails">
                    <label>Date</label>
                    <input type="date" value={ enterdate } onChange={ datechangehandler }/>
                </div>
            </div>

            <div className="new-action"> 
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;