import React from 'react';
import styled from 'styled-components';

const FooterMenu = ({children}) => {
    return (
        <Container>
            <Section>
                {children}
            </Section>
        </Container>
    );
};

export default FooterMenu;

const Container = styled.div`
    display: flex;
    justify-content: space-between;
`
const Section = styled.section`
    gap: 1.5rem;
    display: flex;
    flex-direction: row;
    width: fit-content;
`