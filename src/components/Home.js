import React, {Component} from 'react';
import styles2 from '../styles/header.js'

export default class Home extends Component{
    render() {
        return (
            <div id="homeContainer">
                <div style={styles2.bannerContainer}>
					<img src='src/assets/industry-3264970_1920.jpg' style={styles2.bannerImg}/>
				</div>

                <h1 id='hello'>Home Page</h1>
            </div>
			)
	}
}

