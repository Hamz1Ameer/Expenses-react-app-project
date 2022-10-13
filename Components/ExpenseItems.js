import ExpensesDate from './ExpensesDate';
import './ExpenseItems.css'

const ExpenseItems = (props) => {
    return <div className='ExpensesItems-div'>
        <ExpensesDate date={props.date} className='date-class' />
        <h2 className='title-class'>{props.title} </h2>
        <div className='amount-class'>${props.amount}</div>
    </div>
}

export default ExpenseItems;