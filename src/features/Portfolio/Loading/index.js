import { Circle, LoadingMessage, Wrapper } from "../styled";

export const Loading = () => {

    return (
        <>
        <Wrapper>
            <LoadingMessage>
                Please wait, projects are being loaded...😊
            </LoadingMessage>
            <Circle />
        </Wrapper>
        </>
    );
};