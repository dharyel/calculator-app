import styled from 'styled-components';


interface StyleProps{
    backgroundColor?:string;
    color?:string;
}

export const CalcDisplayContainer = styled.div<StyleProps>`
    background-color: ${(props)=> props.backgroundColor};
    height: 80px;
    margin:5px 0px;
    padding: 20px;
    border-radius:5px;
    
    text-align:right;
    overflow-x: auto;
    overflow-y:hidden;
`;

export const CalcDisplayText = styled.p<StyleProps>`
    color: ${(props)=> props.color};
    font-weight:bold;
`;