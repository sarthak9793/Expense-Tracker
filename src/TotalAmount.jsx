import { useEffect, useState } from "react";

export default function TotalAmount({expenseList}){    
    const [TotalAmount, setTotalAmount] = useState(0)
    useEffect(()=>{
        let sum = 0;
        expenseList.forEach((expenseObj)=>{
            sum+=parseInt(expenseObj.amount)
        })
        setTotalAmount(sum)        
    }, [expenseList])
    return(
        <div className="flex max-w-3xl mx-auto">
            <div className="bg-custom-total-amount-color ml-auto mt-6 rounded-xl p-4 text-white font-extrabold">
                Total Amount: {TotalAmount} $
            </div>
        </div>

    )
}