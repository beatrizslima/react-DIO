import styled, {css} from "styled-components";

export const ButtonContainer = styled.button`
    background: #b4bde9;
    border-radius: 22px;
    position: relative;

    color: #000;
    padding: 3px 12px;
    min width: 120px;
    width: 100%;

    ${({variant}) => variant != "primary" && css`
        min-width: 167px;
        height: 33px;
        background: #b54196;

        &::after{
            content: '';
            position: absolute;
            border: 1px solid #c94ba8;
            top: -5px;
            left: -6px;
            width: calc(100% + 10px);
            height: calc(100% + 10px);
            border-radius: 22px;
        }
    `}
`