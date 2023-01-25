import { Box, Typography, styled } from "@mui/material";

const Component = styled(Box)`
    display: flex;
    height: 45px;
    padding: 13px 0;
    cursor: pointer;
    align-items: center;
    margin-top: 15px;
`;

const Image = styled('img')({
    width: 80,
    height: 50,
    borderRadius: "50%",
    padding: '0 14px'
});

export const Conversation = ({ user }) => {
    return (
        <Component>
            <Box>
                <Image src={user.picture} alt="dp" />
            </Box>
            <Box>
                <Typography>{user.name}</Typography>
            </Box>
        </Component>
    )
}

export default Conversation;