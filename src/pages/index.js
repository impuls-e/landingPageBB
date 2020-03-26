import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Intro from "../components/Intro"
import Recomendations from "../components/Recomendations"
import Transformation from "../components/Transformation"

const IndexPage = () => (
	<Layout>
		<SEO title="Bela Belinda" />
		<Intro />
		<Recomendations />
		<Transformation />
	</Layout>
)

export default IndexPage
