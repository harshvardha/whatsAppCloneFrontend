import { useContext } from "react";
import { Box, styled } from "@mui/material";
import { Chat, MoreVert } from "@mui/icons-material";
import { AccountContext } from "../../../context/AccountProvider";

const Wrapper = styled(Box)`
    height: 3.5rem;
    background: #ededed;
    padding: 0.5rem 1rem;
    display: flex;
    align-items: center;
`;

const IconsWrapper = styled(Box)`
    margin-left: auto;
    & > * {
        margin-left: 2px;
        padding: 0.5rem;
        color: #000;
    };
    & :first-child {
        font-size: 2.7rem;
        margin-right: 0.5rem;
        margin-top: 0.1875rem;
    };
    & :last-child {
        font-size: 2.7rem;
    }
`;

const Image = styled('img')({
    height: 40,
    width: 40,
    borderRadius: '50%'
})

const Header = () => {
    const { account } = useContext(AccountContext);

    return (
        <Wrapper>
            <Image src={account.picture} alt="dp" />
            <IconsWrapper>
                <Chat />
                <MoreVert />
            </IconsWrapper>
        </Wrapper>
    )
}

export default Header;