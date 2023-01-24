import { useContext } from "react";
import { Dialog, Box, Typography, List, ListItem, styled } from "@mui/material";
import jwtDecode from "jwt-decode";
import { GoogleLogin } from "@react-oauth/google";
import { QR_CODE_IMAGE } from "../../constants/data";
import { AccountContext } from "../../context/AccountProvider";

const Wrapper = styled(Box)`
    display: flex;
`;

const Container = styled(Box)`
    padding: 3.5rem 0 3.5rem 3.5rem;
`;

const QRCode = styled("img")({
    height: 264,
    widht: 264,
    margin: "3.125rem 3.125rem"
});

const Title = styled(Typography)`
    font-size: 1.625rem;
    color: #525252;
    font-weight: 300;
    font-family: inherit;
    margin-bottom: 1.5625rem;
`;

const StyledList = styled(List)`
    & > li {
        padding: 0;
        margin-top: 0.9375rem;
        font-size: 1.125rem;
        color: #4a4a4a;
    }
`

const dialogStyle = {
    height: "96%",
    marginTop: "12%",
    width: "60%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden"
}

const LoginDialog = () => {
    const { setAccount } = useContext(AccountContext);

    const onLoginSuccess = (res) => {
        const decodedInfo = jwtDecode(res.credential);
        setAccount(decodedInfo);
        console.log(decodedInfo);
    }

    const onLoginError = (res) => {
        console.log(res);
    }

    return (
        <Dialog open={true} PaperProps={{ sx: dialogStyle }} hideBackdrop={true}>
            <Wrapper>
                <Container>
                    <Title>To use WhatsApp on your computer:</Title>
                    <StyledList>
                        <ListItem>1. Open WhatsApp on your phone</ListItem>
                        <ListItem>2. Tap Menu Settings on your phone and select WhatsApp Web</ListItem>
                        <ListItem>3. Point your phone to this screen to capture the code</ListItem>
                    </StyledList>
                </Container>
                <Box style={{ position: "relative" }}>
                    <QRCode src={QR_CODE_IMAGE} alt="qr code" />
                    <Box style={{ position: "absolute", top: "50%", transform: "translateX(22%)" }}>
                        <GoogleLogin
                            onSuccess={onLoginSuccess}
                            onError={onLoginError}
                        />
                    </Box>
                </Box>
            </Wrapper>
        </Dialog>
    )
}

export default LoginDialog;