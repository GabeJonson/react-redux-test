import styled from "styled-components";

export const Add = styled.div`
    width: ${props => props.width || "50px"};
    height: ${props => props.width || "50px"};
    padding: ${props => props.padding || "0"};
    text-align: center;
    background: #f33;
    border-radius: ${props => props.padding || "50%"};
    position: fixed;
    bottom: 20px;
    right: 20px;

    a {
        width: 100%;
        height: 100%;
        font-size: 30px;
        font-weight: bold;
        line-height: 50px;
        text-decoration: none;
        color: #fff;
        display: inline-block;
    }
`;
