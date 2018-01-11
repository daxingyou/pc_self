import React, {Component} from 'react';
import {observer} from 'mobx-react';
import './Home.scss'

import HomeMainTop from './HomeMainTop/HomeMainTop'
import HomeMainLottery from './HomeMainLottery/HomeMainLottery'
import HomeMainActive from './HomeMainActive/HomeMainActive'
import HomeMainBottom from './HomeMainBottom/HomeMainBottom'

@observer
export default class Home extends Component {
    shouldComponentUpdate(){
        return (this.props.router.location.action === 'PUSH')
    };

    render() {
        const main = [
            <HomeMainTop key="HomeMainTop"/>,
            <HomeMainLottery key="HomeMainLottery"/>,
            <HomeMainActive key="HomeMainActive"/>,
            <HomeMainBottom key="HomeMainBottom"/>,
        ];
        return (
            <div className="home_main">
                {main}
            </div>
        )
    }
}
