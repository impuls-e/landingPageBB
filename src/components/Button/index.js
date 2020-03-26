import React from "react"
import "./styles.css"
export default function Button({ title }) {
	return (
		<a
			href="https://www.belabelinda.com/collections/frontpage"
			className="button"
		>
			{title}
		</a>
	)
}
