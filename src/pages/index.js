import * as ListIconOutline from "react-huge-icons/outline";
import * as ListIconSolid from "react-huge-icons/solid";
import * as ListIconBulk from "react-huge-icons/bulk";
import ShowIcon from "@/components/ShowIcon";
import React from "react";
import Head from "next/head";
import styled, { keyframes } from "styled-components";

export default function Home() {
	const GradientColors =
		"linear-gradient(90deg, rgba(14,165,233,1) 0%, rgba(253,184,39,1) 50%, rgba(14,165,233,1) 100%)";

	const GradientAnimation = keyframes`
	0% {
	  background-position: 0% 50%;
	}
	50% {
	  background-position: 100% 50%;
	}
	100% {
	  background-position: 200% 50%;
	}
  `;

	const GradientText = styled.h1`
		background: ${GradientColors};
		background-size: 200% auto;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		animation: ${GradientAnimation} 3s linear infinite;
	`;
	return (
		<>
			<Head>
				<title>Zero Limit</title>
				<meta
					name="description"
					content="Developer of ReactJs and NextJs app packages | Zero Limit"
				/>
				<meta
					name="google-site-verification"
					content="ltvuxmUAGhZP4OALQhuFZLnIq7WJHqxCs6LPJ8JrjJM"
				/>
			</Head>

			<main>
				<Head>
					<title>React Icons package, Huge Icons</title>
					<meta
						name="description"
						content="React Icons package, Huge Icons | Zero LimLimitit"
					/>
				</Head>

				<header className="text-center my-5 lg:my-10">
					
					<GradientText className="text-base md:text-2xl lg:text-4xl xl:text-5xl lg:h-16">
						Huge Icons Name - React | Flutter | Vue!
					</GradientText>

				</header>

				<div className="container">
					<ShowIcon
						listOfIcons={{
							outline: ListIconOutline,
							bulk: ListIconBulk,
							solid: ListIconSolid,
						}}
					/>
				</div>
			</main>
		</>
	);
}
