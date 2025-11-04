"use client";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
import { Card, ListGroup } from "react-bootstrap";
import type { RootState } from "../../store";

interface Todo {
    id: string;
    title: string;
}

export default function TodoList() {
    const todos = useSelector<RootState, Todo[]>(
        (state) => state.todosReducer.todos
    );

    return (
        <div id="wd-todo-list-redux">
            <h2 className="mb-3">Todo List</h2>
            <Card className="shadow-sm">
                <ListGroup variant="flush">
                    <TodoForm />
                    {todos.map((todo) => (
                        <TodoItem key={todo.id} todo={todo} />
                    ))}
                </ListGroup>
            </Card>
            <hr />
        </div>
    );
}
