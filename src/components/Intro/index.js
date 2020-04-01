import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import introGif from '../../images/intro.gif'
import './styles.css'

import video from '../../images/intro.webm'

import { isMobile } from 'react-device-detect'

const MobileBackgroundSection = ({ className }) => (
	<StaticQuery
		query={graphql`
			query {
				desktop: file(relativePath: { eq: "intro.webp" }) {
					childImageSharp {
						fluid(quality: 90, maxWidth: 1920) {
							...GatsbyImageSharpFluid_withWebp
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
		{/* <div className="intro-mobile-gif"></div> */}
		<video className="teste" autoPlay muted loop>
			<source autoPlay src={video} type='video/webm;codecs="vp8, vorbis"' />
		</video>
		<div className="intro-mobile-content">
			<h1>
				Descubra Como Ter Cabelos Longos e Volumosos Em Menos De 30 Segundos
			</h1>
			<h3>Sem Grampos, Sem Cola, Sem Danos</h3>

			<a href="/">
				<span>ESCOLHER APLIQUE!</span>{' '}
			</a>
		</div>
	</>
)

export default function Intro({ className }) {
	return (
		<div className="intro">
			{isMobile ? <DesktopBackgroundSection /> : <MobileBackgroundSection />}
		</div>
	)
}
