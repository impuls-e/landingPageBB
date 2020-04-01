import React, { createRef, useState, useEffect } from 'react'

import './styles.css'

export default function HowToUse() {
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
	return (
		<div className="container how-to-use">
			<div className="htu-wrap">
				<h3>Veja Como é Super Simples De Usar</h3>
				<h4>Seu Melhor Look Sem Depender de Ninguém!</h4>
				<div className="iframe-container" ref={container}>
					{showVideo ? (
						<iframe
							width="1140"
							height="641"
							src="https://www.youtube.com/embed/zXxXoqp9PBY"
							frameBorder="0"
							allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
							allowfullscreen="allowfullscreen"
						/>
					) : (
						undefined
					)}
				</div>
			</div>
		</div>
	)
}
