import Head from 'next/head';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Root from '../Root';
import '../styles/ReactToastify.scss';
import Header from './Header';

let flag = false;
let flagSocket = false;

class Layout extends Component {
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

	renderContent = () => {
		return (
			<div>
				<div className="container-fluid">
					<Header />
					{this.props.children}
				</div>
			</div>
		);
	}

	render() {
		return (
			<>
				<Head>
					<title>Nextjs Dapp Tron</title>
					<meta charSet="utf-8" />
					<meta name="viewport" content="initial-scale=1.0, width=device-width" />
					<link rel="icon" href="../../../static/img/favicon.ico" />
					<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossOrigin="anonymous" />
					<link rel="stylesheet" href="../../../static/css/jquery.custom-scrollbar.css" />
					<link rel="stylesheet" href="./../../static/css/main.css" />
					<link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap" rel="stylesheet" />
				</Head>
				<Root />
				{this.renderContent()}
				<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
				<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js"></script>
				<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
				<script src="../../../static/js/jquery.custom-scrollbar.js"></script>
				{/* <script src="../../../static/js/vconsole.min.js"></script> */}
				{/* <script type="text/javascript" src="../../../static/js/myVconsole.js" /> */}
			</>
		);
	}
}

const mapStateToProps = state => ({
	socketReducer: state.socketReducer,
	contractReducer: state.contractReducer
});

export default connect(mapStateToProps)(Layout);
