import React, { useState } from "react";
import Title from "./components/Title";
import Info from "./components/Info";

function App() {
    let [messages, setMessages] = useState([]);
    let [style, setStyle] = useState({
        backgroundColor: "#2894ff",
        title: "This Todo page!",
    });

    return (
        <div>
            <Title messages={messages} setMessages={setMessages} style={style} setStyle={setStyle} />
            <Info messages={messages} setMessages={setMessages} style={style} setStyle={setStyle} />
        </div>
    );
}

export default App;
