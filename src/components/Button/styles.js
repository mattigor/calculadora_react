import styled from 'styled-components';

export const ButtonContainer = styled.button `
    padding: 20px;
    border: ${props => (
        props.isEquals ? "2px solid transparent" : "1px solid transparent"
    )};
    border-radius: 50px;
    background-color: ${props => (
        props.isBlank ? "#AAA" : props.isEquals ? "#44dc54" : "#00AAF0"
    )};
    color: #FFFFFF;
    font-size: 24px;
    font-weight: 700;
    flex: 1;
    cursor: pointer;
    margin: 5px 7px;

    &:hover {
        opacity: 0.6;
    }
`
