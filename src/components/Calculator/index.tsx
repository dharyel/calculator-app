import React, {useState} from 'react';
import { CalculatorContainer, Body } from './styled';
import { CalcHeader } from '../CalcHeader';
import { themeColor1, themeColor2, themeColor3 } from '../../colors';
import { colorThemeInterface
 } from '../../colors';
export const Calculator = () => {
    const [choosenTheme, setChoosenTheme] = useState(1);
    
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

    return(
    <Body theme={getColorTheme()}>
        <CalculatorContainer theme={getColorTheme()}>
            <CalcHeader
                theme={getColorTheme()}
                choosenTheme={choosenTheme}  
                handleChoosenTheme={handleChoosenTheme}
            />
        </CalculatorContainer>
    </Body>
    );
}