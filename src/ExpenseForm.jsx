import { useState } from "react"

export default function ExpenseForm({addExpense}){  
    const [formData, setFormData] = useState({title: "", amount: "", date: ""})
    const handleChange = (evt) => {
        setFormData({...formData, [evt.target.name]: evt.target.value})
    }
    const handleSubmit = (evt) => {
        evt.preventDefault()
        addExpense(formData)
        setFormData({title: "", amount: "", date: ""})
    }


    return(
        <form className="bg-custom-form-bg-color max-w-3xl mx-auto mt-6 rounded-xl p-4 flex flex-col space-y-6" onSubmit={handleSubmit}>
            <div className="flex flex-wrap space gap-4">
                <div className="flex flex-col">
                    <label htmlFor="title" className="font-semibold">Title</label>
                    <input type="text" className="rounded-md mt-2 h-9 p-2 w-80" value={formData.title} name="title" onChange={handleChange} required />
                </div>
                <div className="flex flex-col ">
                    <label htmlFor="amount" className="font-semibold">Amount</label>
                    <input type="number" min={0} className="rounded-md mt-2 h-9 p-2 w-80" value={formData.amount} name="amount" onChange={handleChange} required />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="date" className="font-semibold">Date</label>
                    <input type="date" className="rounded-md mt-2 h-9 p-2 w-80" value={formData.date} name="date" onChange={handleChange} required />
                </div>
            </div>
            <div>
                <button className="bg-custom-button-color py-2 px-4 rounded-lg text-white">Add Expense</button>
            </div>
        </form>
        
    )
}