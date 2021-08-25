import styled from 'styled-components';
import {colorThemeInterface} from '../../colors';

interface CalculatorStyleProps {
    theme: colorThemeInterface;
}

export const CalculatorContainer=styled.div`
    width:500px;
    height: 100%;
    padding: 0px 30px;
    display:flex;
    flex-direction: column;
    
    @media screen and (max-width:500px){
        width: 100%;
        min-width:400px;
    }
`;

export const Body = styled.div<CalculatorStyleProps>`
    background-color: ${(props)=> props.theme.mainBackground};
    min-width:100vw;
    min-height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
`;