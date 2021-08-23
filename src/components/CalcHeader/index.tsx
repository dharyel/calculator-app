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

import { colorThemeInterface } from '../../colors';

export interface CalcHeaderProps{
    theme:colorThemeInterface;
    choosenTheme:number;
    handleChoosenTheme: (themeNumber: number) => void;
    children?: React.ReactNode;
}

export const CalcHeader = (props:CalcHeaderProps) =>{

    return( 
        <CalcHeaderContainer>

            <CalcHeaderText color={props.theme.headerText}>calc</CalcHeaderText>
            
            <ThemeSwitcherContainer>
                <ThemeSwitcherText color={props.theme.headerText}>THEME</ThemeSwitcherText>
                <ThemeSwitcherSliderContainer>
                    <ThemeSwitcherSliderNumberContainer>
                        <ThemeSwitcherSliderNumber color={props.theme.headerText} onClick={()=>props.handleChoosenTheme(1)}>1</ThemeSwitcherSliderNumber>
                        <ThemeSwitcherSliderNumber color={props.theme.headerText} onClick={()=>props.handleChoosenTheme(2)}>2</ThemeSwitcherSliderNumber>
                        <ThemeSwitcherSliderNumber color={props.theme.headerText} onClick={()=>props.handleChoosenTheme(3)}>3</ThemeSwitcherSliderNumber>
                    </ThemeSwitcherSliderNumberContainer>
                    <ThemeSwitcherSliderDiskContainer backgroundColor={props.theme.sliderBackground}>

                        <ThemeSwitcherSliderDisk 
                            backgroundColor={props.theme.sliderDiskEqual} 
                            left={props.choosenTheme==1? '3%':props.choosenTheme==2? '38%':'80%'} 
                            />
                    </ThemeSwitcherSliderDiskContainer>
                </ThemeSwitcherSliderContainer>
                
            </ThemeSwitcherContainer>

        </CalcHeaderContainer>
    )
}