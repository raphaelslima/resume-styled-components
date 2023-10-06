import styled from "styled-components";

interface Props {
    backgroundColor?: string
}

export const Button = styled.button<Props>`
    background-color: ${(prop)=> prop.backgroundColor ? prop.backgroundColor : prop.theme.colors.green};
    width: 100px;
    height: 60px;

    &:hover{
        background-color: ${(prop)=> prop.backgroundColor === prop.theme.colors.red ? 'blue' : 'red'};
    }
`