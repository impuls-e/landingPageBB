import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

import './styles.css'

// import video from '../../images/intro.webm'

import { isMobile } from 'react-device-detect'

const MobileBackgroundSection = ({}) => (
	<StaticQuery
		query={graphql`
			query {
				desktop: file(relativePath: { eq: "intro.png" }) {
					childImageSharp {
						fluid(quality: 90, maxWidth: 1920) {
							...GatsbyImageSharpFluid
						}
					}
				}
			}
		`}
		render={data => {
			// Set ImageData.
			const imageData = data.desktop.childImageSharp.fluid
			return (
				<BackgroundImage
					Tag="section"
					className={`intro-desktop-background`}
					fluid={imageData}
				>
					<div className="intro-content">
						<h1>Descubra Como Ter Cabelos Longos e Volumosos em 30 Segundos</h1>
						<p>Sem Grampos, Sem Cola, Sem Danos ❤️</p>

						<a href="/">
							{' '}
							<button>ESCOLHER APLIQUE! </button>{' '}
						</a>
					</div>
				</BackgroundImage>
			)
		}}
	/>
)

const DesktopBackgroundSection = () => (
	<>
		{/* <video className="teste" autoPlay muted loop>
			<source autoPlay src={video} type='video/webm;codecs="vp8, vorbis"' />
		</video> */}
		<div className="intro-mobile-gif"></div>
		<div className="intro-mobile-content">
			<h1>
				Descubra Como Ter Cabelos Longos e Volumosos Em Menos De 30 Segundos
			</h1>
			<h3>Sem Grampos, Sem Cola, Sem Danos</h3>

			<a href="https://belabelinda.com/collections/frontpage">
				<span>ESCOLHER APLIQUE!</span>{' '}
			</a>
		</div>
	</>
)

export default function Intro({}) {
	return (
		<div className="intro">
			{isMobile ? <DesktopBackgroundSection /> : <MobileBackgroundSection />}
		</div>
	)
}
