import React from 'react'

import { useStaticQuery, graphql } from 'gatsby'
import './styles.css'
import Video from '../Video'
export default function HowToUse() {
	const data = useStaticQuery(graphql`
		query VideoInicialQuery {
			allMdx(filter: { frontmatter: { tag: { eq: "video-inicial" } } }) {
				edges {
					node {
						frontmatter {
							videoSrcURL
							videoTitle
						}
					}
				}
			}
		}
	`)

	return (
		<div className="container how-to-use">
			<div className="htu-wrap">
				<h3>Veja Como é Super Simples De Usar</h3>
				<h4>Seu Melhor Look Sem Depender de Ninguém!</h4>
				<div className="iframe-container">
					<Video
						videoSrcURL={data.allMdx.edges[0].node.frontmatter.videoSrcURL}
						videoTitle={data.allMdx.edges[0].node.frontmatter.videoTitle}
						width="1140"
						height="641"
					/>
				</div>
			</div>
		</div>
	)
}
