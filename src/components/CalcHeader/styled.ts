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
    padding: 10px 10px;
    margin:5px 0px;
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
    left:-15px;
    font-size:13px;
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
    left: ${props => props.left}; //3%   38%    80%
    width: 15px;
    height: 15px;
    border-radius:50%;
    margin-top:auto;
    margin-bottom:auto;
    transition: left 0.3s ease-in-out;
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
    font-size:10px;

    :hover{
        filter: opacity(50%);
    }
`;