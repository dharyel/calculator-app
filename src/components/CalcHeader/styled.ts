import styled from 'styled-components';

interface StyleProps{
    backgroundColor?:string;
    color?:string;
    fontSize?:string;
    left?:string;
}

export const CalcHeaderContainer = styled.div`
    width:100%;
    height: 50px;
    display:flex;
    justify-content: space-between;
    align-items:center;
    padding:10px 30px;
`;

export const CalcHeaderText = styled.p<StyleProps>`
    color:${(props)=> props.color};
    font-size: 32px;
    font-weight:bold;
`;

export const ThemeSwitcherContainer = styled.div`
    width:150px;
    display:flex;
    align-items:center;
    //background-color:blue;
`;

export const ThemeSwitcherText = styled.p<StyleProps>`
    color:${props=> props.color};
    position:relative;
    left:-30px;
`;

export const ThemeSwitcherSliderContainer = styled.div`
    width:100px;
    display:flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;

export const ThemeSwitcherSliderDiskContainer = styled.div<StyleProps>`
    width:80px;
    height:20px;
    background-color:${props => props.backgroundColor};
    display:flex;
    align-items: center;
    border-radius:10px;
`;

export const ThemeSwitcherSliderDisk = styled.div<StyleProps>`
    background-color:${props => props.backgroundColor};
    position:relative;
    left: ${props => props.left}; //5%   42%    78%
    width: 15px;
    height: 15px;
    border-radius:50%;
    margin-top:auto;
    margin-bottom:auto;
`;

export const ThemeSwitcherSliderNumberContainer = styled.div`
    width:80px;
    display:flex;
    justify-content:space-between;
`;

export const ThemeSwitcherSliderNumber = styled.p<StyleProps>`
    margin: 0 5px;
    cursor:pointer;
    color:${props=> props.color};
    font-size:12px;
`;