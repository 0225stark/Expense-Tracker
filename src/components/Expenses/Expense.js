import React from 'react';
import './Expense.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';

const Expense = (props) => {
    return (
        <Card className='expense'>
            {
                props.item.map(
                    expenseVariable => (
                        <ExpenseItem  
                            date={ expenseVariable.date } 
                            title={ expenseVariable.title } 
                            amount={ expenseVariable.amount } />
                    )
                )  
            }
        </Card>
    );
    
}


export default Expense;
