import React, {useState} from 'react';
import {
        CalcDisplayContainer, 
        CalcDisplayText} 
                            from './styled';
import { colorThemeInterface } from '../../colors';

export interface Props{
    theme:colorThemeInterface;
    children?: React.ReactNode;
}

export default (props: Props) => {

    const [calcValuesArray, setCalcValuesArray] = useState<string[]>([]);
    const [calcValueString, setCalcValueString] = useState("0");
    
    
    const handleUpdateCalcValueString = ():void =>{

    }

    
    return (
    <CalcDisplayContainer backgroundColor={props.theme.calcBackground}>
        <CalcDisplayText color={props.theme.displayText}>{calcValueString}</CalcDisplayText>
    </CalcDisplayContainer>);
}