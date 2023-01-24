import { useContext } from "react";
import { AppBar, Toolbar, styled, Box } from "@mui/material";
import LoginDialog from "./account/LoginDialog";
import ChatDialog from "./chat/ChatDialog";
import { AccountContext } from "../context/AccountProvider";

// styled components
const LoginHeader = styled(AppBar)`
    height: 14.3rem;
    background-color: #00bfa5;
    box-shadow: none;
`;

const Header = styled(AppBar)`
    height: 7.8125rem;
    background-color: #00A884;
    box-shadow: none;
`

const Wrapper = styled(Box)`
    height: 100vh;
    background: #DCDCDC;
`

const Messenger = () => {
    const { account } = useContext(AccountContext);

    return (
        <Wrapper>
            {account ?
                <>
                    <Header>

                    </Header>
                    <ChatDialog />
                </>
                :
                <>
                    <LoginHeader>

                    </LoginHeader>
                    <LoginDialog />
                </>
            }
        </Wrapper>
    )
}

export default Messenger;