import React, { Component } from 'react'
import { Image } from 'antd'
import baisha from './../../assets/images/白沙.png'
import shuangxi from './../../assets/images/双喜.png'
import liqun from './../../assets/images/利群.png'
import furongwang from './../../assets/images/芙蓉王.png'
import xiaoxiongmao from './../../assets/images/小熊猫.png'

export default class Shop extends Component {
    render () {
        return (
            <div>
                <ul>
                    <li><Image preview={false} height='150px' src={baisha} /></li>
                    <li><Image preview={false} height='150px' src={shuangxi} /></li>
                    <li><Image preview={false} height='150px' src={liqun} /></li>
                    <li><Image preview={false} height='150px' src={furongwang} /></li>
                    <li><Image preview={false} height='150px' src={xiaoxiongmao} /></li>
                </ul>
            </div>
        )
    }
}
