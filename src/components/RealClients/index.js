import React from "react"
import "./styles.css"
import RealClientsSlick from "../RealClientsSlick"
import Button from "../Button"
export default function RealClients() {
	return (
		<div className="container clients">
			<RealClientsSlick />
			<Button title="Escolher aplique" />
		</div>
	)
}
