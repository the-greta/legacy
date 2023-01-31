import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

const BusinessCard = (props) => {
    return (
        <Container>
            <Image
                src={props.src}
                width={320}
                height={200}
                quality={100}
                placeholder="blur"
            />
            <h3>{props.title}</h3>
            <Context>
                {props.children}
            </Context>
        </Container>
    );
};

export default BusinessCard;

const Container = styled.div`
    text-align: center;
`
const Context = styled.p`
    color: ${({theme})=> theme.colors.gray};
`
