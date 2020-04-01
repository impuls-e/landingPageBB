import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Button from '../Button'
import './styles.css'

export default function StepByStep() {
	const data = useStaticQuery(graphql`
		query {
			step1: file(relativePath: { eq: "step1.webp" }) {
				childImageSharp {
					fluid(maxWidth: 350, quality: 100) {
						...GatsbyImageSharpFluid_withWebp
					}
				}
			}
			step2: file(relativePath: { eq: "step2.webp" }) {
				childImageSharp {
					fluid(maxWidth: 350, quality: 100) {
						...GatsbyImageSharpFluid_withWebp
					}
				}
			}
			step3: file(relativePath: { eq: "step3.webp" }) {
				childImageSharp {
					fluid(maxWidth: 350, quality: 100) {
						...GatsbyImageSharpFluid_withWebp
					}
				}
			}
		}
	`)

	return (
		<div className="container step">
			<div className="step-by-step">
				<div className="item">
					<div>
						<Img fluid={data.step1.childImageSharp.fluid}></Img>
					</div>
					<div className="step-text">
						<h3>1.Escolha Sua Cor</h3>
						<p>18 cores com Blindagem e Fibras idênticas as naturais.</p>
					</div>
				</div>

				<div className="item">
					<div>
						<Img fluid={data.step2.childImageSharp.fluid}></Img>
					</div>
					<div className="step-text">
						<h3>2.Coloque o Aplique</h3>
						<p>
							Ajuste o elástico invisível de alta durabilidade com conforto e
							segurança máximos.
						</p>
					</div>
				</div>

				<div className="item">
					<Img fluid={data.step3.childImageSharp.fluid}></Img>
					<div className="step-text">
						<h3>3.Tenha Cabelos Perfeitos</h3>
						<p>
							Você pode fazer chapinha, babyliss e lavar! Agora use pra sair,
							dançar e ficar maravilhosa.
						</p>
					</div>
				</div>
			</div>
			<Button title="SIM, QUERO ESCOLHER A COR DO MEU APLIQUE!" />
		</div>
	)
}
