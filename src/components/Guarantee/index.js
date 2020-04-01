import React from 'react'
import './styles.css'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Button from '../Button'

export default function Header() {
	const data = useStaticQuery(graphql`
		query imgPag {
			image: file(relativePath: { eq: "pag-brasil.png" }) {
				childImageSharp {
					fluid {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`)

	return (
		<>
			<div className="container guarantee">
				<Img
					fluid={data.image.childImageSharp.fluid}
					alt="Logo da Bela Belinda"
				/>
				<aside>
					<h3>
						GARANTIA COMPLETA: Se você nāo AMAR ou a cor nāo bater, nós trocamos
						para você❤️
					</h3>
					<p>
						<span>✔ Pode Ficar Tranquila!</span> Comprar o aplique BelaBelinda é
						fácil e confiável. Milhares de mulheres já compraram
					</p>
					<p>
						<span>✔</span> Nosso maior objetivo como loja é oferecer produtos de
						qualidade máxima para nossas clientes. Para isso buscamos a parceria
						do sistema mais seguro do Brasil, que GARANTE que você receberá o
						seu produto em sua casa com total segurança.
					</p>
					<Button title="VER MENU DE CORES" />
				</aside>
			</div>
		</>
	)
}
