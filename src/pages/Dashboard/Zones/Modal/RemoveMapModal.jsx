import React from "react";

const RemoveMapModal = () => {
  <div class="modal buildingadd_card" id="removePLan">
    <div class="modal-dialog modal-md zonescard_m_center">
      <div class="modal-content ">
        {/* <!-- Modal Header --> */}
        <div>
          <img
            src={iccancel}
            className="close profile_ancel_img"
            data-dismiss="modal"
            alt=""
          />
        </div>
        {/* <!-- Modal body --> */}
        <div class="modal-body ">
          <div className="container-fluid ">
            <div
              className="row"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <h1>
                <b>Remove Map</b>
              </h1>
              <br />

              <h4 className="mt-3">DO YOU WANT TO REMOVE THIS MAP?</h4>
              <div className="mt-3 col-md-10">
                <button className="btn btn-danger btn-lg  btn-block">
                  Confirm 
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>;
};

export default RemoveMapModal;
