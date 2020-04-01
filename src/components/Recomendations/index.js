import React from 'react'
import './styles.css'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'

export default function Recomendations() {
	const data = useStaticQuery(graphql`
		query ImgRecomendations {
			image: file(relativePath: { eq: "recomendations.webp" }) {
				childImageSharp {
					fluid {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`)
	return (
		<div className="container recomendations">
			<h3>Aplique Internacionalmente Recomendado Por:</h3>
			<Img
				fluid={data.image.childImageSharp.fluid}
				alt="Imagem com logo de marcas que recomendam a Bela Belinda"
			/>
		</div>
	)
}
