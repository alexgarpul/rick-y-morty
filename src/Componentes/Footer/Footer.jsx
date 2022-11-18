import React from 'react'
import './Footer.css'
import { GithubLogo, Alien, FacebookLogo } from "phosphor-react";

const Footer = () => {
  return (
    <div>
      <a className='' href=''> <GithubLogo size={32} color="#030303" weight="bold" /> </a>
      <a className='' href=''> <Alien size={32} color="#030303" weight="bold" /> </a>
      <a className='' href=''> <FacebookLogo size={32} color="#030303" weight="bold" /></a>
      <a className='' href=''> <GithubLogo size={32} color="#030303" weight="bold" /> </a>
    </div>
  )
}

export default Footer