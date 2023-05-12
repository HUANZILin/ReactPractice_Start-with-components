import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  //Custom-made components must be named with uppercase character
  const title = props.title;
  const date = props.date;
  const amount = props.amount;

  return (
    <div className="expense-item">
      {/* To write basic JavaScrip code, put the code inside the curly braces */}
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
