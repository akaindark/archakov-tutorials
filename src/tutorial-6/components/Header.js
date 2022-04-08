import React from "react";
import {Link, useNavigate} from "react-router-dom";
import {Nav, Button} from 'react-bootstrap';
import {useLocation} from "react-router-dom";

export default function Header() {
  const [isAuth, setIsAuth] = React.useState(false);
  const {pathname} = useLocation();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (localStorage.getItem('token')) {
      setIsAuth(true);
    }else {
      setIsAuth(false);
    }
  }, [pathname]);

  const handleClickAuth = () => {
    if(isAuth && window.confirm('Вы уверены, что хотите выйти?')) {
      localStorage.removeItem('token');
      navigate('/');
      setIsAuth(false);
    } else {
      navigate('/login');
    }
  }


  return (
    <header className='header'>
      <Link to="/"><h2>React Blog</h2></Link>
      <Nav variant="pills">
        <Nav.Item>
          <Nav.Link to="/" as={Link} active={pathname === '/'}>Главная</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link to='/about' as={Link} active={pathname === '/about'}>Обо мне</Nav.Link>
        </Nav.Item>
        <Button onClick={handleClickAuth} variant={isAuth ? "danger" : "dark"}>
          {isAuth ? 'Выйти' : 'Войти'}
        </Button>
      </Nav>
    </header>
  )
}