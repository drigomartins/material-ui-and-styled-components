import React from 'react';
import { ThemeProvider } from "styled-components";
import Button from '@material-ui/core/Button';
import styled from "styled-components";
import Container from '../../../components/container';

const theme = ({
    typography: {
        fontSize: '1rem'
    }
});

const MyButton = styled(Button)`
    && {
        font-size: ${props => props.theme.typography.fontSize};
    }
`;

export const StyledComponentsThemeProvider = () => {
    return (
        <Container>
            <ThemeProvider theme={theme}>
                <MyButton>font-size: 1rem</MyButton>
            </ThemeProvider>
        </Container>
    );
}

export default StyledComponentsThemeProvider;


