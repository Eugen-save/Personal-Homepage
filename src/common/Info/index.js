import { ButtonWithIcon } from "../Button";
import { About, Name, Wrapper, Image, MainInfo, MailTo, Caption } from "./styled";

export const Info = () => (
    <>
    <Wrapper>
        <Image />
        <MainInfo>
            <Caption>This is</Caption>
            <Name>Evgeny Savelyev</Name>
            <About>👨🏻‍💻  I’m a passionate Frontend Developer in love with React, currently looking for new job opportunities.</About>
            <MailTo href="mailto: {savelyev.eugeny@gmail.com}"><ButtonWithIcon caption="Hire me"></ButtonWithIcon></MailTo>
        </MainInfo>
    </Wrapper>
    </>
)