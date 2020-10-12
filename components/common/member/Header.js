import Link from 'next/link';
import React, { Component } from 'react';
import { connect } from 'react-redux';

let flag = false;
let flagSocket = false;

class Header extends Component {
    async componentDidUpdate() {
        const { socket } = this.props.socketReducer;
        const { tronWeb, tronWebState } = this.props.contractReducer;

        if (tronWebState.loggedIn === true && tronWeb) {
            const from = tronWeb.defaultAddress.base58;

            if (from !== false) {
                if (!flag) {
                    flag = true;
                    // call api get data

                }
            }
        }

        if (socket !== null) {
            if (!flagSocket) {
                flagSocket = true;
                // listen socket

            }
        }
    }

    componentWillUnmount() {
        flag = false;
        flagSocket = false;
    }

    render() {
        return (
            <ul>
                <li>
                    <Link href="/"><a>Home</a></Link>
                </li>
                <li>
                    <Link href="/about"><a>About</a></Link>
                </li>
            </ul>
        )
    }
}

const mapStateToProps = state => ({
    contractReducer: state.contractReducer,
    socketReducer: state.socketReducer
});

export default connect(mapStateToProps)(Header);