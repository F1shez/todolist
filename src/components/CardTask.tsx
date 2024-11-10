import { useDispatch } from "react-redux";
import { Todo, toggleComplete } from "../todoSlice";

interface CardTaskProps {
    todo: Todo
}

export function CardTask({ todo }: CardTaskProps) {
    const dispatch = useDispatch();

    const handleToggleComplete = (id: number) => {
        dispatch(toggleComplete(id));
    };
    return (
        <li
            key={todo.id}
            className={todo.completed ? "flex line-through decoration-gray-500" : "flex"}
        >
            <input onChange={() => handleToggleComplete(todo.id)} type="checkbox" name="" id="" />
            <div className={todo.completed ? "ml-2 text-gray-500" : "ml-2 text-black"}>{todo.text}{" "}</div>
        </li>
    );
}