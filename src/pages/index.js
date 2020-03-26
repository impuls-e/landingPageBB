import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Intro from "../components/Intro"
import Recomendations from "../components/Recomendations"
import WhatIs from "../components/WhatIs"

const IndexPage = () => (
	<Layout>
		<SEO title="Bela Belinda" />
		<Intro />
		<Recomendations />
		<WhatIs />
	</Layout>
)

export default IndexPage
