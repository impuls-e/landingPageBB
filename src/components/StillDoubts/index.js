import React, { createRef, useState, useEffect } from 'react'
import './styles.css'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'

export default function StillDoubts() {
	const [showVideo, setShowVideo] = useState(false)

	const container = createRef()

	useEffect(() => {
		const videoObserver = new IntersectionObserver(onVideoIntersection, {
			rootMargin: '100px 0px',
			threshold: 0.25,
		})
		if (window && 'IntersectionObserver' in window) {
			if (container && container.current) {
				videoObserver.observe(container.current)
			}
		} else {
			setShowVideo(true)
		}
	}, [container])
	function onVideoIntersection(entries) {
		if (!entries || entries.length <= 0) {
			return
		}

		if (entries[0].isIntersecting) {
			setShowVideo(true)
			videoObserver.disconnect()
		}
	}
	const data = useStaticQuery(graphql`
		query ImgStillDoubt {
			image: file(relativePath: { eq: "comparativeBoard.png" }) {
				childImageSharp {
					fluid {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`)

	return (
		<section className="container stillDoubt">
			<div className="first-content">
				<div className="first-content-description">
					<h3>Ainda se convencendo?</h3>
					<p>
						Relaxa! A gente entende! Assiste o video pra ver a opiniāo completa
						e independente de alguém que já comprou o Aplique BelaBelinda.
					</p>
				</div>
				<div className="iframe-container" ref={container}>
					{showVideo ? (
						<iframe
							src="https://www.youtube.com/embed/vDlIaC_79mk"
							frameBorder="0"
							allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
						/>
					) : (
						undefined
					)}
				</div>
			</div>
			<div className="second-content">
				<div className="iframe-container" ref={container}>
					{showVideo ? (
						<iframe
							src="https://www.youtube.com/embed/lRDcl7rYnPI"
							frameborder="0"
							allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
							allowfullscreen
						/>
					) : (
						undefined
					)}
				</div>
				<div className="iframe-container" ref={container}>
					{showVideo ? (
						<iframe
							src="https://www.youtube.com/embed/MH_kDlgWLPk"
							frameborder="0"
							allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
							allowfullscreen
						/>
					) : (
						undefined
					)}
				</div>
				<div className="iframe-container" ref={container}>
					{showVideo ? (
						<iframe
							src="https://www.youtube.com/embed/H5clAuZeZR8"
							frameborder="0"
							allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
							allowfullscreen
						/>
					) : (
						undefined
					)}
				</div>
			</div>
			<div className="third-content">
				<div className="teste1">
					<h3>Veja o Quadro Comparativo:</h3>
					<p>
						Por nāo causar danos, nāo precisar de manutençāo ou de cabeleireiro
						e ser mais acessível financeiramente, o aplique BelaBelinda é
						comprovadamente superior a todos os outros tipos de aplique.
					</p>
				</div>
				<div className="teste2">
					<Img
						fluid={data.image.childImageSharp.fluid}
						alt="Logo da Bela Belinda"
					/>
				</div>
			</div>
		</section>
	)
}
