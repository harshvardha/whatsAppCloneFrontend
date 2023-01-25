import { Drawer, Box, Typography, styled } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import Profile from "./Profile";

const drawerStyle = {
    left: 17,
    top: 17,
    height: '95.7%',
    width: '30%',
    boxShadow: 'none'
}

const Header = styled(Box)`
    background-color: #008069;
    height: 6.6875rem;
    color: #ffffff;
    display: flex;
    & > svg, & > p {
        margin-top: auto;
        margin-left: 0.9375rem;
        margin-bottom: 0.9375rem;
        font-weight: 600;
    }
`;

const Wrapper = styled(Box)`
    background-color: #ededed;
    height: 85%;
`;

export const InfoDrawer = ({ open, setOpen }) => {
    const handleClose = () => {
        setOpen(false);
    }

    return (
        <Drawer
            open={open}
            onClose={handleClose}
            PaperProps={{ sx: drawerStyle }}
            style={{ zIndex: 1500 }}
        >
            <Header>
                <ArrowBack onClick={() => setOpen(false)} />
                <Typography>Profile</Typography>
            </Header>
            <Wrapper>
                <Profile />
            </Wrapper>
        </Drawer>
    )
}

export default InfoDrawer;