import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Container from '../../../components/container';

const useStyles = makeStyles(theme => ({
    button: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
    }
}));

export const MaterialMakeStyles = () => {
    const classes = useStyles();

    return (
        <Container>
            <Button className={classes.button}>Material UI - Styled Components</Button>
        </Container>
    )
}

export default MaterialMakeStyles;


