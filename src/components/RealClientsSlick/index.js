import React from 'react'
import './styles.css'
import { useStaticQuery, graphql } from 'gatsby'

import Img from 'gatsby-image'

export default function RealClientsSlick() {
	const data = useStaticQuery(graphql`
		query ClientQuery {
			allMdx(filter: { frontmatter: { tag: { eq: "client" } } }) {
				edges {
					node {
						frontmatter {
							name
							text
							imgUrl {
								childImageSharp {
									fluid(maxHeight: 270) {
										...GatsbyImageSharpFluid
									}
								}
							}
						}
					}
				}
			}
		}
	`)
	const clients = data.allMdx.edges
	const generateKey = pre => {
		return `${pre}_${new Date().getTime()}`
	}
	return clients.map(client => (
		<div key={generateKey(client.node.frontmatter.name)} className="item">
			<Img
				fluid={client.node.frontmatter.imgUrl.childImageSharp.fluid}
				alt="An image for a client"
			/>
			<h4>{client.node.frontmatter.name}</h4>
			<p>{client.node.frontmatter.text}</p>
		</div>
	))
}
