import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Intro from "../components/Intro"
import Recomendations from "../components/Recomendations"
import WhatIs from "../components/WhatIs"
import Transformation from "../components/Transformation"
import RealClients from "../components/RealClients"

const IndexPage = () => (
	<Layout>
		<SEO title="Bela Belinda" />
		<Intro />
		<Recomendations />
		<WhatIs />
		<Transformation />
		<RealClients />
	</Layout>
)

export default IndexPage
