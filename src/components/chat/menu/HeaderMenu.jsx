import { useState } from "react";
import { MoreVert } from "@mui/icons-material";
import { Menu, MenuItem, styled } from "@mui/material";

const MenuOption = styled(MenuItem)`
    font-size: 0.875reml
    padding: 0.9375rem 3.75rem 0.3125rem 1.5rem;
    color: #4a4a4a;
`;

export const HeaderMenu = ({ setOpenDrawer }) => {
    const [open, setOpen] = useState(null);

    const handleClose = () => {
        setOpen(null);
    }

    const handleClick = (event) => {
        setOpen(event.currentTarget)
    }

    return (
        <>
            <MoreVert onClick={handleClick} />
            <Menu
                anchorEl={open}
                keepMounted
                open={open}
                onClose={handleClose}
                getContentAnchorE1={null}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center'
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                }}
            >
                <MenuOption onClick={() => { handleClose(); setOpenDrawer(true); }}>Profile</MenuOption>
            </Menu>
        </>
    )
}

export default HeaderMenu;