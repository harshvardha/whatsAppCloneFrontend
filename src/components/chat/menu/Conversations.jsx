import { useEffect, useState, useContext } from "react";
import { Box, Divider, styled } from "@mui/material";
import Conversation from "./Conversation";
import { getUsers } from "../../../service/Supplier";
import { AccountContext } from "../../../context/AccountProvider";

const Component = styled(Box)`
    height: 81vh;
    overflow: overlay;
`;

const StyledDivider = styled(Divider)`
    margin-top: 10px;
    background: #e9edef;
    opacity: 0.6;
`;

const Conversations = () => {
    const { account } = useContext(AccountContext);
    const [users, setUsers] = useState();

    useEffect(() => {
        const fetchData = async () => {
            let response = await getUsers();
            setUsers(response);
        }
        fetchData();
    }, [])

    return (
        <Component>
            {users?.map(user => (
                // user.sub !== account.sub &&
                <>
                    <Conversation user={user} />
                    <StyledDivider />
                </>
            ))}
        </Component>
    )
}

export default Conversations;