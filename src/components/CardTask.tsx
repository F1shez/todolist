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
            className={"mt-2 mb-2 ml-4 " + (todo.completed ? "flex line-through decoration-gray-500" : "flex")}
        >
            <input onChange={() => handleToggleComplete(todo.id)} type="checkbox" name="" id="" />
            <div className={"ml-1 " + (todo.completed ? "text-gray-500" : "text-black")}>{todo.text}{" "}</div>
        </li>
    );
}