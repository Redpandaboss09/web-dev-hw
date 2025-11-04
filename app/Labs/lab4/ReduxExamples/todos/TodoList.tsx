"use client"
import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
import { Card, ListGroup } from "react-bootstrap";

export default function TodoList() {
    const { todos } = useSelector((state: any) => state.todosReducer);
    return (
        <div id="wd-todo-list-redux">
            <h2 className="mb-3">Todo List</h2>
            <Card className="shadow-sm">
                <ListGroup variant="flush">
                    <TodoForm />
                    {todos.map((todo: any) => (
                        <TodoItem todo={todo} />
                    ))}
                </ListGroup>
            </Card>
            <hr/></div>);}
