import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    width: 100%;
    height: 500px;
    padding: 10px;
`;

const Info = ({ messages, style }) => {
    return (
        <Wrapper style={{ backgroundColor: style.backgroundColor }}>
            <h2>{style.title}</h2>
            {messages.map((msg) => (
                <li>{msg.input}</li>
            ))}
        </Wrapper>
    );
};

export default Info;
