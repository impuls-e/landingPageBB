import React from 'react'
import './styles.css'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Button from '../Button'

import { FaFacebookSquare, FaInstagram } from 'react-icons/fa'
export default function Footer() {
	const data = useStaticQuery(graphql`
		query imgFooter {
			image: file(relativePath: { eq: "logo-belabelinda.png" }) {
				childImageSharp {
					fluid {
						...GatsbyImageSharpFluid
					}
				}
			}
			card: file(relativePath: { eq: "cred-card.png" }) {
				childImageSharp {
					fluid(maxWidth: 360) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`)

	return (
		<React.Fragment>
			<div className="container footer">
				<Button className="footer-button" title="VER CORES" />
				<div className="contact">
					<div className="section">
						<Img
							fluid={data.image.childImageSharp.fluid}
							alt="Logo da Bela Belinda"
						/>
						<p className="help">Precisa de Ajuda?</p>
						<p>
							<a
								className="online"
								href="https://www.tidio.com/talk/wdgmfi0uu8o3vdjqtb9u08aih43jcjtw"
							>
								Ir Para Atendimento Online
							</a>
						</p>
						<p>Ou Fale com a gente através do email:</p>
						<p className="help">suporte.belabelinda@gmail.com</p>
						<p>Seg - Sex: 9h às 18h</p>
						<p>BelaBelinda 34.117.404/0001-81</p>
					</div>
					<div className="section">
						<h5>Informaçōes:</h5>
						<a
							className="online"
							href="https://belabelinda.com/pages/sobre-nos"
						>
							Sobre Nós
						</a>
						<a
							className="online"
							href="https://belabelinda.com/pages/sobre-nos"
						>
							Política de privacidade
						</a>
						<a
							className="online"
							href="https://belabelinda.com/pages/sobre-nos"
						>
							Termos de uso
						</a>
						<a
							className="online"
							href="https://belabelinda.com/pages/sobre-nos"
						>
							Política de troca ou devoluçāo
						</a>
						<a
							className="online"
							href="https://belabelinda.com/pages/sobre-nos"
						>
							Embaixadoras
						</a>
						<a
							className="online"
							href="https://belabelinda.com/pages/sobre-nos"
						>
							Prazos e Entregas
						</a>
					</div>
					<div className="section last">
						<h5>Assine nossa newsletter</h5>
						<form>
							<input placeholder="E-mail" type="text" />
							<button>Me Inscrever</button>
						</form>
						<h5>Segue a gente!</h5>
						<div className="social-icons">
							<a href="https://www.facebook.com/belabelindaapliques/">
								<FaFacebookSquare />
							</a>
							<a href="https://www.instagram.com/belabelindabr/">
								<FaInstagram />
							</a>
						</div>
					</div>
				</div>
				<p className="credits">
					© 2020 <a href="https://belabelinda.com/">Bela Belinda</a> | Por
					<a href="https://impuls-e.works"> Impulse</a>
				</p>
				<div className="cred-card">
					<Img
						fluid={data.card.childImageSharp.fluid}
						alt="Cartões de pagamento"
					/>
				</div>
			</div>
		</React.Fragment>
	)
}
