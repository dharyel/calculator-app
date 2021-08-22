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

export interface CalcHeaderProps{
    choosenTheme:number;
    handleChoosenTheme: (themeNumber: number) => void;
    children?: React.ReactNode;
}

export const CalcHeader = (props:CalcHeaderProps) =>{

    return( 
        <CalcHeaderContainer>

            <CalcHeaderText>Calc {props.choosenTheme}</CalcHeaderText>
            
            <ThemeSwitcherContainer>
                <ThemeSwitcherText>Theme</ThemeSwitcherText>
                <ThemeSwitcherSliderContainer>
                    <ThemeSwitcherSliderNumberContainer>
                        <ThemeSwitcherSliderNumber onClick={()=>props.handleChoosenTheme(1)}>1</ThemeSwitcherSliderNumber>
                        <ThemeSwitcherSliderNumber onClick={()=>props.handleChoosenTheme(2)}>2</ThemeSwitcherSliderNumber>
                        <ThemeSwitcherSliderNumber onClick={()=>props.handleChoosenTheme(3)}>3</ThemeSwitcherSliderNumber>
                    </ThemeSwitcherSliderNumberContainer>
                    <ThemeSwitcherSliderDiskContainer>
                        <ThemeSwitcherSliderDisk/>
                    </ThemeSwitcherSliderDiskContainer>
                </ThemeSwitcherSliderContainer>
                
            </ThemeSwitcherContainer>

        </CalcHeaderContainer>
    )
}