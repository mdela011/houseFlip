import React, {Component} from 'react';
import {Button,DatePicker} from 'antd';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

import styles from './styles/global.js'
import styles2 from './styles/header.js'

//nav menu
import NavMenu from './components/NavMenu'
//screens
import Home from './components/Home'
import Listings from './components/Listings'
import About from './components/About'
import Reviews from './components/Reviews'
import ContactUs from './components/ContactUs'

export default class App extends Component{
    render() {
        return (
					<Router>
							<div style={styles.home}>
										<NavMenu />
										{/* <div style={styles2.bannerContainer}>
												<img src='src/assets/industry-3264970_1920.jpg' style={styles2.bannerImg}/>
										</div> */}
										<Switch>
											<Route exact path="/" component={Home} />
											<Route exact path="/listings" component={Listings} />
											<Route exact path="/about" component={About} />
											<Route exact path="/reviews" component={Reviews} />
											<Route exact path="/contactus" component={ContactUs} />
										</Switch>
										{/* <Button type="primary">Test Button</Button>
									<DatePicker /> */}

							</div>
					</Router>
			)
	}
}