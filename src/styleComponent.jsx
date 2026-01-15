import styled from 'styled-components'

const Heading = styled.h1 `
    color: red;
    border: 2px solid black;
    padding: 10px;
    width: 360px;
    border-radius: 5px
`;

const Button = styled.button({
    color: 'green',
    margin: '10px',
    padding: '8px',
    width: '110px',
    borderRadius: '5px'
});

export default function styleComponent() {
    // const Heading = styled.h1 `
    //     color: red
    // `;

    return <>
        <Heading> Styled Component </Heading>
        <Heading> Heading </Heading>
        <Heading> Normal component </Heading>
        <Heading> Define outside component </Heading>
        <Heading> Define inside component </Heading>

        <Button> Log In </Button>
        <Button> Sign Un </Button>
        <Button> Back </Button>
        <Button> Forward </Button>
    </>
}