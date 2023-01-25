import { useContext, useState } from "react";
import { Box, styled } from "@mui/material";
import { Chat } from "@mui/icons-material";
import { AccountContext } from "../../../context/AccountProvider";
import HeaderMenu from "./HeaderMenu";
import InfoDrawer from "../../drawer/InfoDrawer";

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
    const [openDrawer, setOpenDrawer] = useState(false);

    const toggleDrawer = () => {
        setOpenDrawer(true);
    }

    return (
        <>
            <Wrapper>
                <Image src={account.picture} alt="dp" onClick={toggleDrawer} />
                <IconsWrapper>
                    <Chat />
                    <HeaderMenu setOpenDrawer={setOpenDrawer} />
                </IconsWrapper>
            </Wrapper>
            <InfoDrawer open={openDrawer} setOpen={setOpenDrawer} />
        </>
    )
}

export default Header;