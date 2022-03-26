import React from "react";
import {Nav} from 'react-bootstrap';

export default function Header(){
  return(
    <header className='header'>
        <h2>React Blog</h2>
        <Nav variant="pills">
          <Nav.Item>
            <Nav.Link href="/">Главная</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href='/about'>Обо мне</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href='/login'>Войти</Nav.Link>
          </Nav.Item>
        </Nav>
      </header>
  )
}