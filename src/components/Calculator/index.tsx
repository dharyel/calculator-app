import React, {useState} from 'react';
import { CalculatorContainer, Body } from './styled';
import { CalcHeader } from '../CalcHeader';
import CalcDisplay from '../CalcDisplay';
import { themeColor1, themeColor2, themeColor3 } from '../../colors';
import { colorThemeInterface
 } from '../../colors';
import { CalcOperation } from '../../calcInterface';
import CalcBody from '../CalcBody';

export const Calculator = () => {
    const [choosenTheme, setChoosenTheme] = useState(1);
    const [calcValue, setCalcValue] = useState("");

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
                newValue = "";
                setCalcValue(newValue);
                break;
            case CalcOperation.equal:
                if (calcValue.length<1) break;

                newValue=calcValue;

                for (let i=(newValue.length-1);i>0;i--){
                    
                    let lastChar=newValue.charAt(i);

                    if (lastChar=="-" || lastChar=="+" || lastChar=="/" || lastChar=="*"){
                        newValue = newValue.slice(0,-1);
                    }else{
                        break;
                    }
                }
                
                newValue = eval(newValue).toString();
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

            <CalcBody 
                CalcPressButton={CalcPressButton} 
                theme={getColorTheme()}
            />
        </CalculatorContainer>
    </Body>
    );
}