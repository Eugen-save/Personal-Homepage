import { Icon, StyledButton } from "./styled";

export const Button = ({caption}) => (
    <StyledButton>
        {caption}
    </StyledButton>
)

export const ButtonWithIcon = ({caption}) => (
    <StyledButton>
        <Icon />{caption}
    </StyledButton>
)