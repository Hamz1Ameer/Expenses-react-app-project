import './ExpensesDate.css'
const ExpensesDate = (props) => {
    const month = props.date.toLocaleString('en-US', { month: 'long' });
    const day = props.date.toLocaleString('en-US', { day: '2-digit' });
    const year = props.date.getFullYear();
    return <div className='date-month-year'>
        <div>{month}</div>
        <div className='year'>{year}</div>
        <div className='day'>{day}</div>
    </div>
}

export default ExpensesDate;