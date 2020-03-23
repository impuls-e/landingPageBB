import React from "react"
import { graphql, StaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import "./styles.css"

const BackgroundSection = ({ className }) => (
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
					className={`intro-background`}
					fluid={imageData}
				>
					<div className="intro-content">
						<h2 className="intro-title">
							Descubra Como Ter Cabelos Longos e Volumosos em 30 Segundos
						</h2>
						<p>Sem Grampos, Sem Cola, Sem Danos ❤️</p>
						<a href="/">
							{" "}
							<button>Escolher Aplique! </button>{" "}
						</a>
					</div>
				</BackgroundImage>
			)
		}}
	/>
)

export default function Intro({ className }) {
	return (
		<div className="intro">
			<BackgroundSection />
		</div>
	)
}
