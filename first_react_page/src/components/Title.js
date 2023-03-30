import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Title = ({ messages, setMessages, style, setStyle }) => {
    //改變標題---
    let [title, setTitle] = useState("Title 1");
    const changeTitleHandler = () => {
        setTitle("Title Change");
    };
    //新增add job
    let [input, setInput] = useState("");
    const sumbitHandler = (e) => {
        e.preventDefault();
        setMessages([...messages, { input, id: uuidv4() }]);
        setInput("");
    };
    const inputHandler = (e) => {
        setInput(e.target.value);
    };
    //修改背景顏色和標題文字

    const changeTodoBgHandler = () => {
        setStyle({
            backgroundColor: "#2894ff",
            title: "This Todo page!",
        });
    };

    const changeAboutBgHandler = () => {
        setStyle({
            backgroundColor: "#FF8000",
            title: "This about Page",
        });
    };

    return (
        <div>
            <h2>{title}</h2>
            <button onClick={changeTitleHandler}>Change Title</button>
            <form>
                <input onChange={inputHandler} value={input} type='text' />
                <button onClick={sumbitHandler}>Add Job</button>
            </form>
            <li>
                <a href='#' onClick={changeTodoBgHandler}>
                    ToDo Page
                </a>
            </li>
            <li>
                <a href='#' onClick={changeAboutBgHandler}>
                    About Page
                </a>
            </li>
        </div>
    );
};

export default Title;
