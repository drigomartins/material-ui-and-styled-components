import styled from "styled-components";
import Button from '@material-ui/core/Button';
import Container from '../../../components/container';

const MyButton = styled(Button)`
    && {
        background: linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%);
        border: 0;
        border-radius: 3px;
        box-shadow: 0 3px 5px 2px rgba(255, 105, 135, .3);
        color: white;
        height: 48px;
        padding: 0 30px;
    }
`;

export const StyledComponents = () => {
    return (
        <Container>
            <MyButton>Styled Components</MyButton>
        </Container>
    )
}

export default StyledComponents;