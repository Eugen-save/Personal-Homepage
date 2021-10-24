import { Button } from "../../../common/Button";
import { ErrorHeader, ErrorMessage, Link, StyledError, Wrapper } from "../styled";
import {ReactComponent as Danger} from "./danger.svg";

export const Error = () => {

    return (
        <>
        <Wrapper>
            <StyledError>
                <Danger />
                <ErrorHeader>
                    Ooops! Something went wrong... 😒
                </ErrorHeader>
                <ErrorMessage>
                    Sorry, failed to load Github projects.<br />
                    You can check them directly on Github.
                </ErrorMessage>
                <Link 
                    href="https://github.com/Eugen-save" 
                    target="_blanc">
                        <Button 
                            caption="Got to GitHub" 
                        />
                    </Link>
            </StyledError>
        </Wrapper>
        </>
    );
};