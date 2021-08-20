import React from 'react';
import {
    CalcHeaderContainer,
    CalcHeaderText,
    ThemeSwitcherContainer,
    ThemeSwitcherText,
    ThemeSwitcherSliderContainer,
    ThemeSwitcherSliderDiskContainer,
    ThemeSwitcherSliderDisk,
    ThemeSwitcherSliderNumberContainer,
    ThemeSwitcherSliderNumber
} from './styled';

interface CalcHeaderProps{

    children?: React.ReactNode;
}

export const CalcHeader = (props:CalcHeaderProps) =>{

    return( 
    <>
        <CalcHeaderContainer>

            <CalcHeaderText>Calc</CalcHeaderText>
            
            <ThemeSwitcherContainer>
                <ThemeSwitcherText>Theme</ThemeSwitcherText>
                <ThemeSwitcherSliderContainer>
                    <ThemeSwitcherSliderNumberContainer>
                        <ThemeSwitcherSliderNumber>1</ThemeSwitcherSliderNumber>
                        <ThemeSwitcherSliderNumber>2</ThemeSwitcherSliderNumber>
                        <ThemeSwitcherSliderNumber>3</ThemeSwitcherSliderNumber>
                    </ThemeSwitcherSliderNumberContainer>
                    <ThemeSwitcherSliderDiskContainer>
                        <ThemeSwitcherSliderDisk/>
                    </ThemeSwitcherSliderDiskContainer>
                </ThemeSwitcherSliderContainer>
                
            </ThemeSwitcherContainer>

        </CalcHeaderContainer>
    </>
    )
}