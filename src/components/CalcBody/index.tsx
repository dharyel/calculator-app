import React from 'react';
import { CalcOperation } from '../../calcInterface';
import { colorThemeInterface } from '../../colors';

import { 
    BodyContainer,
    KeyButton,
    KeyButtonText
 } from './styled';

 interface Props{
    CalcPressButton: (value: string, calcOperation: CalcOperation) => void;
    theme:colorThemeInterface;
    children?:React.ReactNode;
 }

 export default (props:Props) =>{
    return (
    <BodyContainer backgroundColor={props.theme.calcBackground}>    
        {/*PRIMEIRA LINHA*/}
        <KeyButton 
            onClick={()=> props.CalcPressButton("7",CalcOperation.number)} 
            backgroundColor={props.theme.normalKeys}
            shadowColor={props.theme.normalKeysShadow}
            keyValue={"7"}>
            <KeyButtonText color={props.theme.normalKeysText}>7</KeyButtonText>
        </KeyButton>

        <KeyButton 
            onClick={()=> props.CalcPressButton("8",CalcOperation.number)} 
            backgroundColor={props.theme.normalKeys}
            shadowColor={props.theme.normalKeysShadow}
            keyValue={"8"}>
            <KeyButtonText color={props.theme.normalKeysText}>8</KeyButtonText>
        </KeyButton>

        <KeyButton 
            onClick={()=> props.CalcPressButton("9",CalcOperation.number)} 
            backgroundColor={props.theme.normalKeys}
            shadowColor={props.theme.normalKeysShadow}
            keyValue={"9"}>
            <KeyButtonText color={props.theme.normalKeysText}>9</KeyButtonText>
        </KeyButton>

        <KeyButton 
            onClick={()=> props.CalcPressButton("",CalcOperation.delete)} 
            backgroundColor={props.theme.delReset}
            shadowColor={props.theme.delResetShadow}
            keyValue={"del"}>
            <KeyButtonText color={props.theme.delResetText}>DEL</KeyButtonText>
        </KeyButton>

        {/*SEGUNDA LINHA*/}
        <KeyButton 
            onClick={()=> props.CalcPressButton("4",CalcOperation.number)} 
            backgroundColor={props.theme.normalKeys}
            shadowColor={props.theme.normalKeysShadow}
            keyValue={"4"}>
            <KeyButtonText color={props.theme.normalKeysText}>4</KeyButtonText>
        </KeyButton>

        <KeyButton 
            onClick={()=> props.CalcPressButton("5",CalcOperation.number)} 
            backgroundColor={props.theme.normalKeys}
            shadowColor={props.theme.normalKeysShadow}
            keyValue={"5"}>
            <KeyButtonText color={props.theme.normalKeysText}>5</KeyButtonText>
        </KeyButton>

        <KeyButton 
            onClick={()=> props.CalcPressButton("6",CalcOperation.number)} 
            backgroundColor={props.theme.normalKeys}
            shadowColor={props.theme.normalKeysShadow}
            keyValue={"6"}>
            <KeyButtonText color={props.theme.normalKeysText}>6</KeyButtonText>
        </KeyButton>

        <KeyButton 
            onClick={()=> props.CalcPressButton("+",CalcOperation.sum)} 
            backgroundColor={props.theme.normalKeys}
            shadowColor={props.theme.normalKeysShadow}
            keyValue={"+"}>
            <KeyButtonText color={props.theme.normalKeysText}>+</KeyButtonText>
        </KeyButton>

        {/*TERCEIRA LINHA*/}
        <KeyButton 
            onClick={()=> props.CalcPressButton("1",CalcOperation.number)} 
            backgroundColor={props.theme.normalKeys}
            shadowColor={props.theme.normalKeysShadow}
            keyValue={"1"}>
            <KeyButtonText color={props.theme.normalKeysText}>1</KeyButtonText>
        </KeyButton>

        <KeyButton 
            onClick={()=> props.CalcPressButton("2",CalcOperation.number)} 
            backgroundColor={props.theme.normalKeys}
            shadowColor={props.theme.normalKeysShadow}
            keyValue={"2"}>
            <KeyButtonText color={props.theme.normalKeysText}>2</KeyButtonText>
        </KeyButton>

        <KeyButton 
            onClick={()=> props.CalcPressButton("3",CalcOperation.number)} 
            backgroundColor={props.theme.normalKeys}
            shadowColor={props.theme.normalKeysShadow}
            keyValue={"3"}>
            <KeyButtonText color={props.theme.normalKeysText}>3</KeyButtonText>
        </KeyButton>

        <KeyButton 
            onClick={()=> props.CalcPressButton("-",CalcOperation.subtract)} 
            backgroundColor={props.theme.normalKeys}
            shadowColor={props.theme.normalKeysShadow}
            keyValue={"-"}>
            <KeyButtonText color={props.theme.normalKeysText}>-</KeyButtonText>
        </KeyButton>

        {/*QUARTA LINHA*/}
        <KeyButton 
            onClick={()=> props.CalcPressButton(".",CalcOperation.comma)} 
            backgroundColor={props.theme.normalKeys}
            shadowColor={props.theme.normalKeysShadow}
            keyValue={"."}>
            <KeyButtonText color={props.theme.normalKeysText}>.</KeyButtonText>
        </KeyButton>

        <KeyButton 
            onClick={()=> props.CalcPressButton("0",CalcOperation.number)} 
            backgroundColor={props.theme.normalKeys}
            shadowColor={props.theme.normalKeysShadow}
            keyValue={"0"}>
            <KeyButtonText color={props.theme.normalKeysText}>0</KeyButtonText>
        </KeyButton>

        <KeyButton 
            onClick={()=> props.CalcPressButton("/",CalcOperation.divide)} 
            backgroundColor={props.theme.normalKeys}
            shadowColor={props.theme.normalKeysShadow}
            keyValue={"/"}>
            <KeyButtonText color={props.theme.normalKeysText}>/</KeyButtonText>
        </KeyButton>

        <KeyButton 
            onClick={()=> props.CalcPressButton("*",CalcOperation.multiply)} 
            backgroundColor={props.theme.normalKeys}
            shadowColor={props.theme.normalKeysShadow}
            keyValue={"*"}>
            <KeyButtonText color={props.theme.normalKeysText}>x</KeyButtonText>
        </KeyButton>

        {/*QUINTA LINHA*/}
        <KeyButton 
            onClick={()=> props.CalcPressButton("reset",CalcOperation.reset)} 
            backgroundColor={props.theme.delReset}
            shadowColor={props.theme.delResetShadow}
            keyValue={"reset"}>
            <KeyButtonText color={props.theme.delResetText}>RESET</KeyButtonText>
        </KeyButton>

        <KeyButton 
            onClick={()=> props.CalcPressButton("equal",CalcOperation.equal)} 
            backgroundColor={props.theme.sliderDiskEqual}
            shadowColor={props.theme.sliderDiskEqualShadow}
            keyValue={"equal"}>
            <KeyButtonText color={props.theme.equalText}>=</KeyButtonText>
        </KeyButton>
    </BodyContainer>
     
     );
 }
