import React from "react";
import iccancel from "../../../../assets/images/ic-cancel.svg";

const AddBuildingModel = () => {
  return (
    <div class="modal buildingadd_card" id="addbuilding_modal">
      <div class="modal-dialog">
        <div class="modal-content w-75">
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
            <div className="text-center buildingadd_modal">
              <h3>BUILDING</h3>
            </div>
            <div className="container-fluid input_zones">
              <div class="form-group">
                <input
                  type="number"
                  class="form-control"
                  placeholder="1000000000000002"
                  id="usr"
                />
              </div>

              <div class="form-group">
                <input
                  type="name"
                  class="form-control"
                  placeholder="NAME *"
                  id="usr"
                />
              </div>
              <select class="form-select" aria-label="Default select example">
                <option selected>Status</option>
                <option value="1">Active</option>
                <option value="2">Non Active</option>
              </select>
              <button className="btn btn-lg">add</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBuildingModel;
