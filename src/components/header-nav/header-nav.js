import * as React from "react"
import Button from "../button/button"
import Icon from "../icon/icon"
import HeaderMenu from "../header-menu/header-menu"

const HeaderNav = ({data}) => {
	return(
	<div className={"it-header-navbar-wrapper" + ' '+data.theme} id={data.id}>
		<div className="container">
			<div className="row">
				<div className="col-12">
					<nav className="navbar navbar-expand-lg has-megamenu" aria-label={data.ariaLabel}>
						<Button customStyle="custom-navbar-toggler" type="button" dataBsToggle="navbarcollapsible" ariaControls={data.nav.id} ariaExpanded="false" srOnly={data.toggler.srOnly}>
							<Icon icon="sprites.svg#it-burger"/>
						</Button>
						<div className="navbar-collapsable" id={data.nav.id}>
							<div className="overlay"></div>
							<div className="close-div">
								<Button addonStyle="close-menu">
									<Icon icon="sprites.svg#it-close-big"/>
								</Button>
							</div>
							<HeaderMenu>
								
							</HeaderMenu>
						</div>
					</nav>
				</div>
			</div>
		</div>	
	</div>
	)
}

export default HeaderNav