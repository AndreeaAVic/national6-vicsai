import "./ToDoItem.css";

export function ToDoItem(props) {
    console.log(props);

    return (
        <div className="to-do-item">
            <input type="checkbox" defaultChecked={props.checkValue} />
            <p>{props.label}</p>
            <img 
                src="https://www.flaticon.com/svg/vstatic/svg/748/748023.svg?token=exp=1618938237~hmac=cdad5d00f44b62c6cce76081ce2fa5e9" 
                alt="trash" 
                onClick={() => props.removeItem(props.label)}
            />
        </div>
    );
}