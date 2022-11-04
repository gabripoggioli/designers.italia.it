import * as React from "react"
import './section-editorial.scss'
import ReactMarkdown from "react-markdown"
import TextImageCta from "../text-image-cta/text-image-cta"
import Numbers from "../numbers/numbers"
import TitleText from "../title-text/title-text"
import ImgFull from "../img-full/img-full"
import ImageIcons from "../image-icons/image-icons"
import Highlight from "../highlight/highlight"
import Card from "../card/card"
import Kangaroo from "../kangaroo/kangaroo"

const SectionEditorial = ({
  title,
  headingLevel,
  text,
  full,
  centered,
  bgColor,
  components,
  menu
}) => {

  const SwitchComponents = {
    Highlight,
    Card,
    Kangaroo,
    TextImageCta,
    Numbers,
    TitleText,
    ImgFull,
    ImageIcons,
  };

  //heading level
	let HLevel
	if (headingLevel) {
		HLevel = `h${headingLevel}`;
	} else {
		HLevel = `h2`
	}
  let grid
  if(full) {
    grid="col-12"
  }else{
    grid="col-10 offset-1 col-lg-7 offset-lg-1"
    + `${centered ? ' m-auto' : ''}`
  }

  let styles = "section-editorial"
  + `${bgColor=="light" ? ' bg-light' : ''}`

  return(
    <section className={styles}>
        <div className="container-xxl">
          <div className="row">
            <div className={grid}>
              {title && <HLevel className={text ? "mb-1" : "mb-0"}>{title}</HLevel>}
              {text &&
                <div className="text-container mb-5">
                  <ReactMarkdown>{text}</ReactMarkdown>
                </div>
              }
              {components &&
                components.map((item,index) => {
                  const Switcher = SwitchComponents[item.name]
                  return(
                    <Switcher key={"switcher-"+index} {...item}/>
                  )
                })
              }
            </div>
            {menu &&
              <div className="d-none d-lg-block col-lg-3 offset-lg-1 affix-parent">
                <div className="sidebar-wrapper my-lg-0 affix-top">
                  <div className="sidebar-linklist-wrapper">
                    <div className="link-list-wrapper">
                      <ul className="link-list">
                        <li><a className="list-item medium active" href="#"><span>Link lista 1 (attivo)</span></a>
                        </li>
                        <li><a className="list-item medium" href="#"><span>Link lista 3</span></a>
                        </li>
                        <li><a className="list-item medium" href="#"><span>Link lista 4</span></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            }
          </div>
        </div>
    </section>
  )
}

export default SectionEditorial
