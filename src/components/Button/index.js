import { ButtonContainer } from "./styles";

const Button = ({ label, onClick, isBlank, isEquals }) => {
    return (
        <ButtonContainer onClick={onClick} type="button" isBlank={isBlank} isEquals={isEquals}>
            {label}
        </ButtonContainer>
    );
}

export default Button;
