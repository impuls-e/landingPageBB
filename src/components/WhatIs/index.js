import React from "react"
import "./styles.css"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import Button from "../Button"
export default function WhatIs() {
	const data = useStaticQuery(graphql`
		query ImgWhatIs {
			image: file(relativePath: { eq: "whatis.png" }) {
				childImageSharp {
					fluid {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`)
	return (
		<div className="container whatis">
			<Img
				fluid={data.image.childImageSharp.fluid}
				alt="Imagem com logo de marcas que recomendam a Bela Belinda"
			/>
			<section className="what-description">
				<h2>O Que é o Aplique BelaBelinda?</h2>
				<h4>✔ Cabelos Longos e Volumosos em 30 Segundos</h4>
				<p>
					Fim da Vergonha com cabelos Finos e Ralos. Agora você pode ter seu
					melhor look TODOS os dias.
				</p>
				<h4>✔ Sem Esforço ou Manutençāo</h4>
				<p>
					Fácil de colocar, usar, e manter; com nossos apliques você nāo vai
					mais precisar gastar tempo ou dinheiro no cabeleireiro.
				</p>
				<h4>✔ Nāo causa danos aos seus fios</h4>
				<p>
					Diferentemente de todos os outros tipos de aplique, BelaBelinda nāo
					causa danos aos seus fios, a sua cabeça ou aos folículos capilares.
				</p>
				<h4>✔ Exclusiva Tecnologia SYNT™ </h4>
				<p>
					Criado com Polímeros de alta resistência com fibras Idênticas ao
					natural que funcionam como "pentes invisíveis"; podendo fazer
					chapinha, babyliss e lavar..
				</p>
				<Button title="Ver menu de cores" />
			</section>
		</div>
	)
}
