export default function ExpenseItem({time, title, price}){

    return(
        <div className="bg-custom-expenseItem-bg-color flex mx-4 my-2 first-of-type:mt-7 last-of-type:mb-7 rounded-xl text-white">
            <div className="flex flex-col bg-black text-white p-2 m-2 rounded-lg border-2 border-white text-center px-5">
                <div>{time.month}</div>
                <div>{time.year}</div>
                <div className="font-bold text-2xl">{time.date}</div>
            </div>
            <div className="flex w-full justify-between">
                <h2 className="my-auto font-extrabold ml-3 text-xl">{title}</h2>
                <div className="bg-custom-price-color my-auto px-6 py-3 rounded-xl border-[1px] border-white mr-2 font-extrabold text-lg">${price}</div>
            </div>
        </div>

    )
}