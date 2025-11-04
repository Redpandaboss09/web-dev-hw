import {Button, ListGroupItem} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";

export default function TodoItem({ todo, }: {
    todo: { id: string; title: string };
}) {
    const dispatch = useDispatch();
    return (
        <ListGroupItem className="d-flex align-items-center justify-content-between" key={todo.id}>
            <div className="fs-5">{todo.title}</div>
            <div className="d-flex gap-2">
                <Button
                    variant="primary"
                    size="sm"
                    onClick={() => dispatch(setTodo(todo))}
                    id="wd-set-todo-click"
                >
                    Edit
                </Button>
                <Button
                    variant="danger"
                    size="sm"
                    onClick={() => dispatch(deleteTodo(todo.id))}
                    id="wd-delete-todo-click"
                >
                    Delete
                </Button>
            </div>
        </ListGroupItem>);}