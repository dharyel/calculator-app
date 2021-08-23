import styled from 'styled-components';
import { CalcOperation } from '../../calcInterface';

interface Props{
    backgroundColor?: string;
    color?:string;
    shadowColor?:string;
    keyValue?:string;
    children?:React.ReactNode;
}

const getButtonMargin = (value:string | undefined):string => {
    console.log(value);

    switch (value){
        case "reset":
            return "0px 10px 0px 0px";
        case "del":
        case "+":
        case "-":
        case "*":
            return "0px 0px 10px 0px";
        case "equal":
            return "0px";
        default:
            return "0px 10px 10px 0px"; 
    }

    
}

export const BodyContainer = styled.div<Props>`
    background-color: ${(props)=> props.backgroundColor};
    height: 400px;
    margin:5px 0px;
    padding: 20px;
    border-radius:10px;

    display:flex;
    justify-content: center;
    align-items:center;

    flex-wrap:wrap;

`;

export const KeyButton = styled.div<Props>`
    background-color: ${(props)=> props.backgroundColor};
    height: 50px;
    width: ${(props)=> (props.keyValue=="reset" || props.keyValue=="equal") ? "42%":"20%"};
    border-radius:10px;
    text-align:center;
    padding: 5px;
    margin:${(props)=> getButtonMargin(props.keyValue)};
    box-shadow: 0px -4px 5px inset ${(props)=> props.shadowColor};
    cursor: pointer;
`;

export const KeyButtonText = styled.p<Props>`
    color:${(props)=> props.color};
    font-weight:bold;
`;