import { Description, Frame, LinkItem, Links, StyledTile, Text, Title } from "./styled";


export const Tile = ({title, body, linkDemo, linkRepo}) => {

const demoURL = "https://eugen-save.github.io/";

    return (
        <StyledTile>
            <Text>
            <Title>{title}</Title>
            <Description>{body}</Description>
            <Links>
                <Frame>Demo:<LinkItem href={`${demoURL}${linkDemo}`}>Link to Demo version</LinkItem></Frame>
                <Frame>Code:<LinkItem href={linkRepo}>Link to Repository</LinkItem></Frame>
            </Links>
            </Text>
        </StyledTile>
    );
};