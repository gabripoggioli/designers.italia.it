import * as React from "react"
import Template from "../templates/tmpl-base"
import {Seo} from "../components/seo/seo"
import Pagedata from "./index.yaml"

const Index = () => {
  return(
    <Template Pagedata={Pagedata}>
      <p>Home page</p>
    </Template>
  )
}

export default Index

export const Head = () => (
	<Seo
    title = {Pagedata.seo.name}
    description = {Pagedata.seo.description}
    image = {Pagedata.seo.image}
    twitterImage = {Pagedata.seo.twitterImage}
    pathname = {Pagedata.seo.pathname}
    canonical = {Pagedata.seo.canonical}
  >
  </Seo>
)