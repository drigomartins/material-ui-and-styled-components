import React from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Container from '../../../components/container';

const theme = createMuiTheme({
    typography: {
        button: {
            fontSize: '1rem',
        },
    },
});

export const MaterialThemeProvider = () => {
    return (
        <Container>
            <ThemeProvider theme={theme}>
                <Button>font-size: 1rem</Button>
            </ThemeProvider>
        </Container>
    );
}

export default MaterialThemeProvider;