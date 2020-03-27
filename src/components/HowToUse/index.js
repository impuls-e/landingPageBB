import React from "react"

import "./styles.css"

export default function HowToUse() {
	return (
		<div className="container how-to-use">
			<div className="htu-wrap">
				<h3>Veja Como é Super Simples De Usar</h3>
				<h4>Seu Melhor Look Sem Depender de Ninguém!</h4>
				<div className="iframe-container">
					<iframe
						width="1140"
						height="641"
						src="https://www.youtube.com/embed/zXxXoqp9PBY"
						frameborder="0"
						allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
						allowfullscreen
					></iframe>
				</div>
			</div>
		</div>
	)
}
