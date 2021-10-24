import { Brightness, Caption, ModeWrapper, Toggle, ToggleButton, Wrapper } from "./styled"


export const SwitchButton = ({caption, onClick, shifted}) => {

    return (
        <>
            <ModeWrapper>
                <Wrapper>
                <Caption>
                    {caption}
                </Caption>
                <ToggleButton 
                    onClick={onClick}
                >
                    <Toggle
                        shifted={shifted}
                    >
                        <Brightness />
                    </Toggle>
                </ToggleButton>
                </Wrapper>
            </ModeWrapper>
        </>
    )
}