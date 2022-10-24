import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div className='footer'>
                <ul className='footer-container'>
                    <li className='footer-li'><a href="https://twitter.com/TunKitTrngL1">Twitter</a></li>
                    <li className='footer-li'><a href="#">Codepen</a></li>
                    <li className='footer-li'><a href="mailto:truongletuankiet.longan@gmail.com">Email</a></li>
                    <li className='footer-li'><a href="#">Dribbble</a></li>
                    <li className='footer-li'><a href="https://github.com/zhangliejunjie">Github</a></li>
                    <li className='footer-li'>
                        <p>👋</p>
                    </li>
                </ul>
            </div>
        )
    }
}
