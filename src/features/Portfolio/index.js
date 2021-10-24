import { Case, Header, LogoGit, SubHeader, Wrapper } from "./styled";
import { Tile } from "../../common/Tile";
import { useSelector } from "react-redux";
import { fetchPortfolio, selectPortfolio, selectStatus } from "./portfolioSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { Loading } from "./Loading";
import { Error } from "./Error";

export const Portfolio = () => {

    const portfolio = useSelector(selectPortfolio);
    const status = useSelector(selectStatus);
    
    const dispatch = useDispatch();

    useEffect(() => dispatch(fetchPortfolio()), [dispatch]);


    return (
        <>
        <Wrapper>
            <LogoGit />
            <Header>Portfolio</Header>
            <SubHeader>My recent projects</SubHeader>

        {status === "loading" ? (
            <Loading />
        ) : status === "error" ? (
            <Error />
        ) : (
            <Case>
            {Object.keys(portfolio).map(repo => {
                return (
                    <Tile 
                        key={repo}
                        title={portfolio[repo].name}
                        body={portfolio[repo].description}
                        linkRepo={portfolio[repo].html_url}
                        linkDemo={portfolio[repo].name}
                    />
                )
            }
            )}
        </Case>
        )
    }
            </Wrapper>
        </>
    );
};