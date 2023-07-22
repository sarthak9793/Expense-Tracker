export default function ExpenseItemContainer(props){
    return(
        // <div className="flex flex-col bg-custom-container-color rounded-xl w-1/2 mx-auto">

        // </div>
        // To get around the problem we do this, receive the props object and inside {} write props.children. props.children includes all the content that was between the closing and opening tags of the ExpenseItemContainer
        <div className="flex flex-col bg-custom-container-color rounded-xl max-w-3xl mx-auto">
            {props.children}        
        </div>
    )

}