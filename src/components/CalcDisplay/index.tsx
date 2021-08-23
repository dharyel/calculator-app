import React, {useState} from 'react';
import {
        CalcDisplayContainer, 
        CalcDisplayText} 
                            from './styled';
import { colorThemeInterface } from '../../colors';

interface Props{
    theme:colorThemeInterface;
    calcValue:string;
    children?: React.ReactNode;
}

export default (props: Props) => {

    

    const handleDisplayCalcValue = ():string =>{
        return props.calcValue;
    }

    
    return (
    <CalcDisplayContainer backgroundColor={props.theme.calcBackground}>
        <CalcDisplayText color={props.theme.displayText}>{handleDisplayCalcValue()}</CalcDisplayText>
    </CalcDisplayContainer>);
}