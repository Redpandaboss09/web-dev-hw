import { useState } from "react";
import { useSelector } from "react-redux";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import type { RootState } from "./store";

interface Todo {
    id: string;
    title: string;
}

export default function ArrayStateVariable() {
    const todos = useSelector<RootState, Todo[]>((s) => s.todosReducer.todos);

    const [array, setArray] = useState<number[]>([1, 2, 3, 4, 5]);
    const addElement = () => setArray([...array, Math.floor(Math.random() * 100)]);
    const deleteElement = (index: number) =>
        setArray(array.filter((_, i) => i !== index));

    return (
        <div id="wd-array-state-variables">
            <h2>Array State Variable</h2>
            <button onClick={addElement}>Add Element</button>
            <ul>
                {array.map((item, index) => (
                    <li key={index}>
                        {item}
                        <button onClick={() => deleteElement(index)}>Delete</button>
                    </li>
                ))}
            </ul>
            <hr />
            <ListGroup>
                {todos.map((todo) => (
                    <ListGroupItem key={todo.id}>{todo.title}</ListGroupItem>
                ))}
            </ListGroup>
            <hr />
        </div>
    );
}
