import styled from "styled-components";

const ContainerBase = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Container = (props) => {
    return (
        <ContainerBase {...props}>{props.children}</ContainerBase>
    )
}
export default Container;