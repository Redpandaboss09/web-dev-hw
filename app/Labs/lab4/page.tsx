"use client"
import store from "./store";
import { Provider } from "react-redux";

import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import EventObject from "./EventObject";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DateStateVariable";
import ObjectStateVariable from "./ObjectStateVariable";
import ArrayStateVariable from "./ArrayStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import ReduxExamples from "./ReduxExamples/page";


export default function Lab4(){
    function sayHello() {
        alert("Hello");
    }
    return (
        <Provider store={store}>
            <div id="wd-passing-functions">
                <h2>Lab 4</h2>
                <ClickEvent></ClickEvent>
                <PassingDataOnEvent></PassingDataOnEvent>
                <PassingFunctions theFunction={sayHello} />
                <EventObject></EventObject>
                <Counter></Counter>
                <BooleanStateVariables></BooleanStateVariables>
                <StringStateVariables></StringStateVariables>
                <DateStateVariable></DateStateVariable>
                <ObjectStateVariable></ObjectStateVariable>
                <ArrayStateVariable></ArrayStateVariable>
                <ParentStateComponent></ParentStateComponent>
                <ReduxExamples></ReduxExamples>
            </div>
        </Provider>
    );
}