import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import { isAndroid, isMobile } from "react-device-detect";
import { connect } from 'react-redux';
import * as appAction from '../../../redux/actions/appActions';

class ModalNotification extends Component {
    handleClose = () => {
        this.props.updatedDataUser({ isModal: false });
    }

    handleSubmit = () => {
        window.location.reload();
    }

    renderText = () => {
        if (isMobile) {
            if (isAndroid) {
                return (
                    <div className="text">Please download <a href="https://play.google.com/store/apps/details?id=com.tronlinkpro.wallet" target="_blank">Tronlink Wallet</a> to Dapp</div>
                );
            }

            return (
                <div className="text">Please download <a href="https://apps.apple.com/us/app/tronlink/id1453530188" target="_blank">Tronlink Wallet</a> to Dapp</div>
            );
        }

        return (
            <div className="text">Please install <a href="https://www.tronlink.org/" target="_blank">Tronlink extension</a> then reload page to Dapp</div>
        );
    }

    renderButton = () => {
        if (isMobile) {
            if (isAndroid) {
                return (
                    <a
                        className="btn btn-primary"
                        href="https://play.google.com/store/apps/details?id=com.tronlinkpro.wallet"
                        target="_blank"
                    >Download</a>
                );
            }

            return (
                <a
                    className="btn btn-primary"
                    href="https://apps.apple.com/us/app/tronlink/id145353018"
                    target="_blank"
                >Download</a>
            );
        }

        return (
            <button
                type="submit"
                className="btn btn-primary"
                onClick={this.handleSubmit}
            >Reload</button>
        );
    }

    render() {
        const { isModal } = this.props;
        const { isDarkMode } = this.props.userReducer;

        return (
            <Modal show={isModal} onHide={this.handleClose} id="depositModal" className="modal-popup">
                <div className={isDarkMode ? '' : 'light-mode light-mode-modal-rank'}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="registerStep1ModalLabel">Message</h5>
                        </div>
                        <div className="modal-body">
                            <div className="form">
                                {this.renderText()}
                                <div className="form-group btn-list">
                                    <button
                                        type="button"
                                        className="btn btn-cancel"
                                        onClick={this.handleClose}
                                    >Cancel</button>
                                    {this.renderButton()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        );
    }
}

const mapStateToProps = state => ({
    userReducer: state.userReducer
});

const mapDispatchToProps = dispatch => ({
    updatedDataUser: (data) => dispatch(appAction.updatedDataUser(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalNotification);