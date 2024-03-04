import React, {useState} from 'react';
import './ExpenseForm.css'

const ExpenseForm = () =>
{

    const [enteredTitle, setEnterTitle] =useState('');
    const [enteredAmount, setEnteredAmount]= useState('');
    const [enteredDate,setEnteredDate] = useState('');

    const titleChangeHandeler = (event) =>{
        setEnterTitle(event.target.value)
        // console.log(enteredTitle);
        // console.log(setEnterTitle(event.target.value));

    }

    // console.log(setEnterTitle(event.target.value));
    // console.log(setEnterTitle)

    
    const amountChangeHandler = (event)=>{
        setEnteredAmount(event.target.value)
    }

    const dateChangeHandler=(event)=>{
        setEnteredDate(event.target.value)
    }

    const submitHandler=(event)=>{
        event.preventDefault();
        const expenseData = {
            Titel: enteredTitle,
            amount: enteredAmount,
            date: new Date (enteredDate)
        }
        console.log(expenseData);
    }

    return(
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__controls'>
                    <label>Title</label>
                    <input type='text' onChange={titleChangeHandeler}/>
                </div>

                <div className='new-expense__controls'>
                    <label>Amount</label>
                    <input type='number' min="0.01" step="0.01" onChange={amountChangeHandler}/>
                </div>

                <div className='new-expense__controls'>
                    <label>Date</label>
                    <input type='date' min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler}/>
                </div>

                <div className='new-expense__actions'>
                    <button type='submit'>Add Expense</button>
                </div>
            </div>
        </form>
    )
}

export default ExpenseForm;