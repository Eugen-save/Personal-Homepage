import { Conclusion, FaceBook, GitHub, Instagram, Intro, Link, LinkedIN, Mail, StyledLogo, Wrapper } from "./styled";


export const Contact = () => (
    <>
        <Wrapper>
            <Intro>
                let's talk!
            </Intro>
            <Mail href="mailto: {savelyev.eugeny@gmail.com}">savelyev.eugeny@gmail.com</Mail>
            <Conclusion>
            I’m always open to new projects whenever I have the time. 
            If you need website or web application, feel free to talk to me.
            </Conclusion>
            <StyledLogo>
                <Link href="https://github.com/Eugen-save" target="_blanc"><GitHub /></Link>
                <Link href="https://www.facebook.com/evgeny.savelyev29/" target="_blanc"><FaceBook /></Link>
                <Link href="https://www.linkedin.com/in/evgeny-savelyev/" target="_blanc"><LinkedIN /></Link>
                <Link href="https://www.instagram.com/eugen.save" target="_blanc"><Instagram /></Link>
            </StyledLogo>
        </Wrapper>
    </>
)