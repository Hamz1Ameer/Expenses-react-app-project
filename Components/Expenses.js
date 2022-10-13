import './Expenses.css'
import ExpenseItems from "./ExpenseItems";


const Expenses = (props) => {
    return <div className='Expenses-div'>
        <ExpenseItems
            date={props.item[0].date}
            title={props.item[0].title}
            amount={props.item[0].amount}
        /><br />
        <ExpenseItems date={props.item[1].date} title={props.item[1].title} amount={props.item[1].amount} /><br />
        <ExpenseItems date={props.item[2].date} title={props.item[2].title} amount={props.item[2].amount} /><br />
        <ExpenseItems date={props.item[3].date} title={props.item[3].title} amount={props.item[3].amount} />
    </div>
}

export default Expenses;