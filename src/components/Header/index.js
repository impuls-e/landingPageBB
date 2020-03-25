import React, { useState } from "react"
import "./styles.css"
import { Link, useStaticQuery, graphql } from "gatsby"
import HamburgerMenu from "react-hamburger-menu"
import PropTypes from "prop-types"
import Img from "gatsby-image"

import { MdEmail } from "react-icons/md"
import { FaFacebookSquare, FaInstagram } from "react-icons/fa"

export default function Header() {
	const data = useStaticQuery(graphql`
		query ImgHeader {
			image: file(relativePath: { eq: "logo-belabelinda.png" }) {
				childImageSharp {
					fluid {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`)
	const [movClick, setMovClick] = useState(false)
	const [hamburguer, setHamburguer] = useState(false)

	const clickStyle = movClick ? "click" : ""

	function handleClick() {
		setHamburguer(!hamburguer)
		setMovClick(!movClick)
	}
	Header.propTypes = {
		siteTitle: PropTypes.string,
	}

	Header.defaultProps = {
		siteTitle: ``,
	}

	return (
		<>
			<header className="header">
				<div className={`wrapper ${clickStyle}`}>
					<div className="firstcolumn">
						<button onClick={handleClick} className={`icon ${clickStyle}`}>
							<HamburgerMenu
								isOpen={hamburguer}
								width={25}
								height={16}
								strokeWidth={2}
								rotate={0}
								color="#000"
								borderRadius={0}
								animationDuration={0.5}
								menuClicked={handleClick}
							/>
						</button>
					</div>
					<Link className="logo" to="/">
						<Img
							fluid={data.image.childImageSharp.fluid}
							alt="Logo da Bela Belinda"
						/>
					</Link>
					<ul className="menu">
						<li>
							<Link to="/">Produtos</Link>
						</li>
						<li>
							<Link to="/technologies">Sobre Nós</Link>
						</li>
						<li>
							<Link to="/experiences">Perguntas Frequentes</Link>
						</li>
						<li>
							<Link to="/projects">Blog</Link>
						</li>
						<li>
							<Link to="/projects">Rastreio</Link>
						</li>
					</ul>
					<div className="lastcolumn">
						<div className="login-desktop">
							<Link to="/">Entrar</Link>
							<select
								class="currency-picker"
								name="currencies"
								data-default-shop-currency="BRL"
							>
								<option value="BRL" selected="selected">
									BRL
								</option>
								<option value="INR">INR</option>
								<option value="GBP">GBP</option>
								<option value="CAD">CAD</option>
								<option value="USD">USD</option>
								<option value="AUD">AUD</option>
								<option value="EUR">EUR</option>
								<option value="JPY">JPY</option>
							</select>
						</div>
						<div className="carrinho">
							<a href="/cart" class="cart">
								<svg
									aria-hidden="true"
									focusable="false"
									role="presentation"
									class="icon icon-cart"
									viewBox="0 0 37 40"
								>
									<path d="M36.5 34.8L33.3 8h-5.9C26.7 3.9 23 .8 18.5.8S10.3 3.9 9.6 8H3.7L.5 34.8c-.2 1.5.4 2.4.9 3 .5.5 1.4 1.2 3.1 1.2h28c1.3 0 2.4-.4 3.1-1.3.7-.7 1-1.8.9-2.9zm-18-30c2.2 0 4.1 1.4 4.7 3.2h-9.5c.7-1.9 2.6-3.2 4.8-3.2zM4.5 35l2.8-23h2.2v3c0 1.1.9 2 2 2s2-.9 2-2v-3h10v3c0 1.1.9 2 2 2s2-.9 2-2v-3h2.2l2.8 23h-28z"></path>
								</svg>
								<span>R$ 0,00</span>
							</a>
						</div>
					</div>
				</div>
				<div className={`aside ${clickStyle}`}>
					<div className="aside-menu">
						<Link to="/">Produtos</Link>
						<Link to="/">Sobre Nós</Link>
						<Link to="/">Perguntas Frequentes</Link>
						<Link to="/">Blog</Link>
						<Link to="/">Rastreio</Link>
						<div className="login">
							<Link to="/">Entrar</Link>
							<select
								class="currency-picker"
								name="currencies"
								data-default-shop-currency="BRL"
							>
								<option value="BRL" selected="selected">
									BRL
								</option>
								<option value="INR">INR</option>
								<option value="GBP">GBP</option>
								<option value="CAD">CAD</option>
								<option value="USD">USD</option>
								<option value="AUD">AUD</option>
								<option value="EUR">EUR</option>
								<option value="JPY">JPY</option>
							</select>
							<MdEmail />
						</div>
					</div>
				</div>
				<div class="frete">
					<div className="social-icons">
						<a href="https://www.facebook.com/belabelindaapliques/">
							<FaFacebookSquare />
						</a>
						<a href="https://www.instagram.com/belabelindabr/">
							<FaInstagram />
						</a>
					</div>
					<p> A belabelinda paga o seu frete ❤️</p>
					<p class="email">
						<a href="mailto:suporte.belabelinda@gmail.com">
							suporte.belabelinda@gmail.com
						</a>
					</p>
				</div>
			</header>
		</>
	)
}
