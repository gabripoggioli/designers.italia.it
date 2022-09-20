import * as React from "react"
import "../scss/styles.scss"
import "../js/globals"

import Skiplinks from "../components/skiplinks/skiplinks"
import Header from "../components/header/header"
import Footer from "../components/footer/footer"
import BackToTopEl from "../components/back-to-top/back-to-top"
import HeaderSlim from "../components/header-slim/header-slim"
import NavWrapper from "../components/nav-wrapper/nav-wrapper"
import HeaderCenter from "../components/header-center/header-center"
import HeaderData from '../data/header.json'

const MainTemplate = ({children}) => {
	return (
    <>
      <Skiplinks/>
      <Header data={HeaderData}>
			<HeaderSlim data={HeaderData.header_slim}/>
			<NavWrapper>
				<HeaderCenter data={HeaderData.header_center}/>
			</NavWrapper>
		</Header>
      <main id="main">
        {children}
      </main>
      <Footer/>
      <BackToTopEl
        positionTop={0}
        scrollLimit={100}
        duration={800}
        easing="easeInOutSine"
      />
    </>
	)
}

export default MainTemplate
