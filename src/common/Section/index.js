import { Header, List, ListItem, Wrapper } from "./style";

const Section = ({title, elements}) => (
    <Wrapper>
        <Header>
            {title}
        </Header>
        <List>
            {elements.map(element => (
                <ListItem key={element}>
                    {element}
                </ListItem>
            ))}
        </List>
    </Wrapper>
);

export default Section;