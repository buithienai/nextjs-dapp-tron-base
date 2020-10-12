import React from 'react';

const ModalMaintenance = () => (
    <div className="modal-maintenance">
        <div className="modal-dialog action-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
                <div className="maintenance-image">
                    <img src="../../static/img/bg-maintenance.png" alt="Maintenance" />
                </div>
                <div className="maintenance-text text-center">
                    Unfortunately the site is down for a bit of maintenance right now.
                    <p>Please check back later. Thank you!</p>
                </div>
            </div>
        </div>
    </div>
);

export default ModalMaintenance;
