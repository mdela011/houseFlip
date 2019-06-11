import React, {Component} from 'react';
import {Menu,Avatar} from 'antd';

import {Link} from 'react-router-dom'
import styles from '../styles/header.js'

export default class NavMenu extends Component{
    render() {
        return (
            <div>
                <Link to="/">
                    <img id='logo' src='src/assets/house-2492054_1280.png' style={styles.logo} />
                </Link>
                {/* <Avatar style={{float:'left'}} size={70} src='src/assets/house-2492054_1280.png'/> */}
				<Menu id='menu' mode='horizontal' style={styles.nav}>
                        <Menu.Item><Link to="/">Home</Link></Menu.Item>
                        <Menu.Item><Link to="/listings">Listings</Link></Menu.Item>
                        <Menu.Item><Link to="/about">About</Link></Menu.Item>
                        <Menu.Item><Link to="/reviews">Reviews</Link></Menu.Item>
                        <Menu.Item><Link to="/contactus">Contact Us</Link></Menu.Item>
                    
                </Menu>
                <br />
            </div>
			)
	}
}

