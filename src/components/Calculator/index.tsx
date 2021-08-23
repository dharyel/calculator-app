import React, {useState} from 'react';
import { CalculatorContainer, Body } from './styled';
import { CalcHeader } from '../CalcHeader';
import CalcDisplay from '../CalcDisplay';
import { themeColor1, themeColor2, themeColor3 } from '../../colors';
import { colorThemeInterface
 } from '../../colors';
import { CalcOperation } from '../../calcInterface';

export const Calculator = () => {
    const [choosenTheme, setChoosenTheme] = useState(1);
    const [calcValue, setCalcValue] = useState("0");

    const handleChoosenTheme = (themeNumber:number):void =>{
        setChoosenTheme(themeNumber);
    }

    const getColorTheme = ():colorThemeInterface => {
        switch (choosenTheme){
            case 1:
                return themeColor1;
                break;
            case 2:
                return themeColor2;
                break;
            case 3:
                return themeColor3;
                break;
            default:
                return themeColor1;
                break;
        }  
    }

    const CalcPressButton = (value:string,calcOperation:CalcOperation):void=>{
        let newValue:string;

        switch (calcOperation){
            case CalcOperation.delete:
                if (calcValue.length>0){
                    newValue = calcValue.slice(0,-1);
                    setCalcValue(newValue);
                }
                break;
            case CalcOperation.reset:
                newValue = "0";
                setCalcValue(newValue);
                break;
            case CalcOperation.equal:
                newValue = eval(calcValue);
                setCalcValue(newValue);
                break;
            default:
                setCalcValue(`${calcValue}${value}`);
                break;
        }
    }

    return(
    <Body theme={getColorTheme()}>
        <CalculatorContainer theme={getColorTheme()}>
            <CalcHeader
                theme={getColorTheme()}
                choosenTheme={choosenTheme}  
                handleChoosenTheme={handleChoosenTheme}
            />

            <CalcDisplay calcValue={calcValue} theme={getColorTheme()}/>
        </CalculatorContainer>
    </Body>
    );
}