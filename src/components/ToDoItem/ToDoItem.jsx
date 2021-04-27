import "./ToDoItem.css";

export function ToDoItem(props) {
    console.log(props);

    return (
        <div className="to-do-item">
            <input type="checkbox" defaultChecked={props.checkValue} />
            <p>{props.label}</p>
            <img 
                src="https://image.freepik.com/free-icon/trash-bin-symbol_318-10194.jpg" 
                alt="trash" 
                onClick={() => props.removeItem(props.label)}
            />
        </div>
    );
}