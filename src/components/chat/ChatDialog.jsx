import { Dialog, Box, styled } from '@mui/material';
import Menu from './menu/Menu';
import EmptyChat from './chat/EmptyChat';

const dialogStyle = {
    height: "96%",
    width: "100%",
    margin: "1rem",
    maxWidth: "100%",
    borderRadius: 0,
    maxHeight: "100%",
    overflow: "hidden"
}

const Wrapper = styled(Box)`
    display: flex;
`;

const LeftComponent = styled(Box)`
    min-width: 28.125rem;
`;
const RightComponent = styled(Box)`
    width: 73%;
    min-width: 18.75rem;
    height: 100%;
    border: 1px solid rgba(0,0,0,0.14);
`;

export const ChatDialog = () => {
    return (
        <Dialog
            open={true}
            PaperProps={{ sx: dialogStyle }}
            hideBackdrop={true}
            maxWidth={'md'}
        >
            <Wrapper>
                <LeftComponent>
                    <Menu />
                </LeftComponent>
                <RightComponent>
                    <EmptyChat />
                </RightComponent>
            </Wrapper>
        </Dialog>
    )
}

export default ChatDialog;