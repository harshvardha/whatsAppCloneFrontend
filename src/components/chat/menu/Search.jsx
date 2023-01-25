import { Box, InputBase, styled } from "@mui/material";
import { Search } from "@mui/icons-material";

const Wrapper = styled(Box)`
    background-color: #fff;
    height: 2.8125rem;
    border-bottom: 1px solid #f2f2f2;
    display: flex;
    align-items: center;
`;

const Container = styled(Box)`
    background-color: #f0f2f5;
    position: relative;
    margin: 0 0.8125rem;
    width: 100%;
    border-radius: 10px;
`;

const Icon = styled(Box)`
    position: absolute;
    height: 100%;
    padding: 0.375rem 0.5rem;
    color: #919191;
`;

const InputField = styled(InputBase)`
    width: 100%;
    padding: 1rem;
    padding-left: 4.0625rem;
    height: 0.9375rem;
    font-size: 0.865rem;
`;

const SearchBox = () => {
    return (
        <Wrapper>
            <Container>
                <Icon>
                    <Search fontSize="small" />
                </Icon>
                <InputField
                    placeholder="Search"
                />
            </Container>
        </Wrapper>
    )
}

export default SearchBox;