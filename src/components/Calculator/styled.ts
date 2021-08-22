import styled from 'styled-components';

interface CalculatorStyleProps {
    theme: object;
}

export const CalculatorContainer=styled.div<CalculatorStyleProps>`
    width:40%;
    height: 100%;
    background-color:${(props) => props.theme.calcBackground};
`;

export const Body = styled.body<CalculatorStyleProps>`
    background-color: ${(props)=> props.theme.mainBackground};
    min-width:100vw;
    min-height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
`;