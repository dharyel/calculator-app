import styled from 'styled-components';

export const CalcHeaderContainer = styled.div`
    width:100%;
    height: 50px;
    background-color:grey;
    display:flex;
    justify-content: space-between;
    align-items:center;
`;

export const CalcHeaderText = styled.p`

`;

export const ThemeSwitcherContainer = styled.div`
    width:150px;
    display:flex;
    align-items:center;
    //background-color:blue;
`;

export const ThemeSwitcherText = styled.p`
    width: 50px;
`;

export const ThemeSwitcherSliderContainer = styled.div`
    width:100px;
    display:flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;

export const ThemeSwitcherSliderDiskContainer = styled.div`
    width:80px;
    height:20px;
    background-color:darkgrey;
    display:flex;
    align-items: center;
    border-radius:10px;
`;

export const ThemeSwitcherSliderDisk = styled.div`
    background-color:red;
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

export const ThemeSwitcherSliderNumber = styled.p`
    margin: 0 5px;
    cursor:pointer;
`;