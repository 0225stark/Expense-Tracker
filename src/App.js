import React, { useState } from 'react';
import Expense from './components/Expenses/Expense'; 
import NewExpense from './components/NewExpenses/NewExpense';

let Dummy_expense = [
    {
        title: 'Tavel',
        date: new Date(2023,0,10),
        amount: 250,
    },
    { 
        title: 'Book',
        date: new Date(2023,0,10),
        amount: 500,
    },
    {
        title: 'Lunch',
        date: new Date(2023,0,10),
        amount: 150,
    },
    {
        title: 'Internet',
        date: new Date(2023,0,10),
        amount: 400,
    }
];


const App = () => {
    
    const [oldexpense, setExpenses ] = useState(Dummy_expense);

    const addExpenseHandler = (newexpense) =>{
        const updatedExpense = [newexpense, ...oldexpense];
        setExpenses(updatedExpense);
        console.log(updatedExpense);
    };

    return (
        <div>
            <NewExpense onAddExpense={ addExpenseHandler } />
            <Expense item={oldexpense}/>
        </div>
    );
}


export default App;