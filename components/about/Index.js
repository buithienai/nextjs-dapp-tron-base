import React, { Component } from 'react';
import { connect } from 'react-redux';
import Layout from '../common/member/Layout';

let flag = false;
let flagSocket = false;

class About extends Component {
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
            <Layout>
                <main role="main" className="main">
                    <div className="news-items content-wrapper">
                        <h2 className="title">About</h2>
                    </div>
                </main>
            </Layout>
        );
    }
}

const mapStateToProps = state => ({
    userReducer: state.userReducer,
    socketReducer: state.socketReducer,
    contractReducer: state.contractReducer
});

export default connect(mapStateToProps)(About);
