import { Button, FormControl, ListGroupItem } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";
import type { RootState, AppDispatch } from "../../store";

interface Todo {
    title: string;
}

export default function TodoForm() {
    const { todo } = useSelector<RootState, { todo: Todo }>(
        (s) => s.todosReducer
    );
    const dispatch = useDispatch<AppDispatch>();

    return (
        <ListGroupItem className="d-flex align-items-center gap-2">
            <FormControl
                placeholder="Learn Mongo"
                value={todo.title}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    dispatch(setTodo({ ...todo, title: e.target.value }))
                }
                className="flex-grow-1"
            />
            <Button
                variant="warning"
                onClick={() => dispatch(updateTodo(todo))}
                id="wd-update-todo-click"
            >
                Update
            </Button>
            <Button
                variant="success"
                onClick={() => dispatch(addTodo(todo))}
                id="wd-add-todo-click"
            >
                Add
            </Button>
        </ListGroupItem>
    );
}
