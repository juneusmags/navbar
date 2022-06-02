import React from 'react'
import { links } from '../data'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/esm/ListGroupItem'
import {GiHamburgerMenu} from 'react-icons/gi'
import { useState } from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
const Navbar = () => {
    const [showLink, setShowLink] = useState(false)
    const linksContainer = useRef(null)
    const linkList = useRef(null)
    const showLinkHandler = () => {
        setShowLink(!showLink)
        console.log(showLink)
     }

     useEffect(()=>{
        const linksHeight = linkList.current.getBoundingClientRect().height
        console.log(linksHeight)
        if(showLink){
            linksContainer.current.style.height = `${linksHeight}`
        }
        else{
            linksContainer.current.style.height = "0px"
        }
     },[showLink])
  return (
    <>
        <div className="d-flex justify-content-between m-3">
            <h1>Logo</h1>
            <GiHamburgerMenu onClick = {showLinkHandler}/>
        </div>
        <div ref = {linksContainer}>

            <ListGroup style = {{display : `${!showLink ? "none" : "flex"}`}} ref  = {linkList}>
                    {links.map((link)=>{
                        const {id, url, text} = link
                        return (
                        <ListGroupItem key = {id}>
                            {text}
                        </ListGroupItem>
                        )
                    })}
            </ListGroup>

        </div>
        
    </>
  )
}

export default Navbar