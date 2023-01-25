import { Box } from "@mui/material";
import Header from "./Header";
import SearchBox from "./Search";
import Conversations from "./Conversations";

export const Menu = () => {

    return (
        <Box>
            <Header />
            <SearchBox />
            <Conversations />
        </Box>
    )
}

export default Menu;