import React from "react"
import "./styles.css"
import { useStaticQuery, graphql } from "gatsby"
import Button from "../Button"

import Img from "gatsby-image"

export default function Famous() {
	const data = useStaticQuery(graphql`
		query FamousQuery {
			allMdx(
				filter: { frontmatter: { tag: { eq: "famous" } } }
				sort: { fields: [frontmatter___order], order: ASC }
			) {
				edges {
					node {
						frontmatter {
							name
							text
							imgUrl {
								childImageSharp {
									fixed(height: 200) {
										...GatsbyImageSharpFixed
									}
								}
							}
						}
					}
				}
			}
		}
	`)
	const famous = data.allMdx.edges
	const generateKey = pre => {
		return `${pre}_${new Date().getTime()}`
	}
	return (
		<div className="container famous">
			<h3>O que a Mídia e os Famosos Dizem Sobre os Apliques BelaBelinda</h3>

			{famous.map(fame => (
				<div key={generateKey(fame.node.frontmatter.name)} className="item">
					<Img
						fixed={fame.node.frontmatter.imgUrl.childImageSharp.fixed}
						alt="An image for a famous"
					/>
					<h4>{fame.node.frontmatter.name}</h4>
					<p>{fame.node.frontmatter.text}</p>
				</div>
			))}
			<Button title="Escolher aplique" />
		</div>
	)
}
