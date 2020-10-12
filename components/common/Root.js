import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ToastContainer } from "react-toastify";
import io from 'socket.io-client';
import TronWeb from 'tronweb';
import configs from '../../configs/index';
import * as appAction from '../../redux/actions/appActions';
import './styles/ReactToastify.scss';

let account = false;

class Root extends Component {
	async componentDidMount() {
		if (this.props.socketReducer.socket === null) {
			const socket = io(configs.urlSocket, {
				origin: '*',
				transports: ['websocket']
			});

			this.props.updateSocket({ socket });
		}

		await new Promise(async (resolve) => {
			const tronWebState = {
				installed: !!window.tronWeb,
				loggedIn: window.tronWeb && window.tronWeb.ready
			};

			if (tronWebState.installed) {
				this.props.createTronWeb({
					tronWebState: {
						installed: true,
						loggedIn: true
					},
					tronWeb: window.tronWeb
				});

				account = window.tronWeb.defaultAddress.base58;
				return resolve();
			}

			let tries = 0;

			const timer = setInterval(async () => {
				if (tries >= 10) {
					const { mainNetProvider } = configs.contracts;

					window.tronWeb = new TronWeb(
						mainNetProvider,
						mainNetProvider,
						mainNetProvider
					);

					this.props.createTronWeb({
						tronWebState: {
							installed: false,
							loggedIn: false
						},
						tronWeb: window.tronWeb
					});

					account = window.tronWeb.defaultAddress.base58;

					this.props.updatedDataUser({ isModal: true });

					clearInterval(timer);
					return resolve();
				}

				tronWebState.installed = !!window.tronWeb;
				tronWebState.loggedIn = window.tronWeb && window.tronWeb.ready;

				if (!tronWebState.installed) {
					return tries++;
				}

				account = window.tronWeb.defaultAddress.base58;

				this.props.createTronWeb({
					tronWebState,
					tronWeb: window.tronWeb
				});

				resolve();
			}, 100);
		});

		await this.initialContract();

		window.tronWeb.on('addressChanged', () => {
			if (account !== false) {
				if (account !== this.props.contractReducer.tronWeb.defaultAddress.base58) {
					localStorage.clear();
					window.location.href = '/';
				}
			}
		});
	}

	initialContract = async () => {
		this.props.createContract();
	}

	componentWillUnmount() {
		this.props.socketReducer.socket.close();
	}

	render() {
		return (
			<>
				<ToastContainer
					pauseOnFocusLoss={false}
					hideProgressBar={true}
				/>
			</>
		);
	}
}

const mapStateToProps = state => ({
	contractReducer: state.contractReducer,
	userReducer: state.userReducer,
	socketReducer: state.socketReducer
});

const mapDispatchToProps = dispatch => ({
	createContract: () => dispatch(appAction.createContract()),
	createTronWeb: (data) => dispatch(appAction.createTronWeb(data)),
	updatedDataUser: (data) => dispatch(appAction.updatedDataUser(data)),
	updateSocket: (data) => dispatch(appAction.updateSocket(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Root);