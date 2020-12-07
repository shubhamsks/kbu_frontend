import React, {useState} from 'react'
import {Menu, Segment, Input, Icon} from 'semantic-ui-react'
import NavBarItem from "./NavBarItem";
import logo from '../../assets/logo1.png'
import {useAuth} from '../../contexts/AuthContext'
import SearchTool from "../../containers/SearchTools/SearchTools";

function NavBar() {
  const {isAuth} = useAuth();
  return (

    <Segment inverted>

      <Menu inverted pointing secondary>
        <img alt='logo' style={{width: '60px'}} src={logo}/>
        <NavBarItem to='/' name='Home'/>
        <NavBarItem to='/tools' name='Tools'/>
        <NavBarItem to='/about' name='About'/>
        {isAuth ? <NavBarItem to='/auth/logout' name='Logout'/>
          :
          <NavBarItem to='/auth' name='Login/Register'/>}
        {isAuth ?
          <NavBarItem to='/tools/add' name='Add'/> :
          ''}
        <SearchTool/>
      </Menu>
    </Segment>

  )
}

export default NavBar;