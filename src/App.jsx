import ExpenseItem from "./ExpenseItem"
import ExpenseItemContainer from "./ExpenseItemContainer"
import ExpenseForm from "./ExpenseForm"
import TotalAmount from "./TotalAmount"
import { useState } from "react"

function App() {
  const [expenseList, setExpenseList] = useState([])

  const addExpense = (formData) => {
    const timeArr = formData.date.split('-')
    const year = timeArr[0]
    const monthNames = ["Jan", "Feb", "Mar", "Apr",
    "May", "June", "July", "Aug",
    "Sept", "Oct", "Nov", "Dec"]
    if(timeArr[1]<10)
      timeArr[1] = timeArr[1].slice(-1)[0]
    const month = monthNames[timeArr[1]-1]
    const date = timeArr[2]
    setExpenseList([...expenseList, {title: formData.title, time: {date: date, month: month, year: year}, amount: formData.amount}])
  }

  return (
    <>
      <h1 className="text-center text-6xl mb-10 font-customFont2 underline">Expense Tracker</h1>
      {/* This was fine */}
      {/* <div className="flex flex-col bg-custom-container-color rounded-xl w-1/2 mx-auto">
        {expenses.map((expenseObj)=>(<ExpenseItem time={expenseObj.time} label={expenseObj.label} price={expenseObj.price}/>))}
      </div> */}
      {/* But to demonstrate how to render a component within a component I am making the div container a seperate component */}
      <ExpenseItemContainer>
        {expenseList.map((expenseObj)=>(<ExpenseItem time={expenseObj.time} title={expenseObj.title} price={expenseObj.amount}/>))}
      </ExpenseItemContainer>
      {/* But this code has a problem, When we render the ExpenseItemContainer component, then whatever was returned from the ExpenseItemContainer component replaces <ExpenseItemContainer>......</ExpenseItemContainer> including the content between <ExpenseItemContainer>...</ExpenseItemContainer>. Therefore what we get is just an empty div. To have access to the content between the opening and closing tags of a component, inside that component, we can use props.children. We receive the props object in the ExpenseItemContainer component and put {props.children} between <div></div> */}
      {/* Gist: Component ke andar kisi component ko render karna hota hai then ham parent component mein props.children use karke nested content ko parent component ke andar place kar sakte hain */}
      <ExpenseForm addExpense={addExpense}/>
      <TotalAmount expenseList={expenseList}/>
      
    </>
  )
}

export default App
