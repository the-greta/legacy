import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const ContactButton = (props) => {
	return (
		<>
			<Button href={props.href}>
				<span style={{letterSpacing: "0.2em"}}>{props.children}</span>
			</Button>
		</>
	);
};

export default ContactButton;

const Button = styled(Link)`
	display: block;
	text-decoration: none;
	padding: 1.5rem 3rem;
	border: 3px solid  ${({theme}) => theme.colors.white};
	color: ${({theme}) => theme.colors.white};
	background: ${({theme}) => theme.colors.secondary};
	font-size: 1.5rem;
	font-weight: 700;
	text-transform: uppercase;
	overflow: hidden;
	position: relative;
	z-index: 1;
	text-align: left;
	cursor: pointer;
	:before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 0;
		height: 100%;
		background-color: ${({theme}) => theme.colors.white};
		z-index: -1;
		transition: all .3s;
	}
	:after {
		content: "\\00a0🡲";
		position: relative;
		display: inline-block;
    transition: transform .3s ease;
	}
	:hover {
		color: ${({theme}) => theme.colors.secondary};
		:before {
			width: 100%;
		}
		:after {
			transform: translateX(50%);
    }
	}
`