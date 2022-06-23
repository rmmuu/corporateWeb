import React from "react";
import iccancel from "../../../../assets/images/ic-cancel.svg";

const ShowDeviceListModal = () => {
  return (
    <div class="modal" id="showdevice_listModal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div>
            <img
              src={iccancel}
              className="close profile_ancel_img"
              data-dismiss="modal"
              alt=""
            />
          </div>

          {/* <!-- Modal body --> */}
          <div class="modal-body">
            <div className="container">
              <div className="text-center">
                <h1>DEVICES</h1>
              </div>
              <p>
                PDA 1
                <span>
                  A
                  <img src={iccancel} alt="" />
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowDeviceListModal;
