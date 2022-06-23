import React, { useState } from "react";
import AddZoneModal from "./Modal/AddZoneModal";
import ZonesCard from "./ZonesCard";
const Zones = () => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <div className='head'>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '600' }}>PANEL DEVICE</h2>
        <button
          style={{ width: '15%', height: '30px', cursor: 'pointer' }}
          className="btn btn-sm"
          onClick={() => setModalShow(true)}
        >
          ADD ZONE
          <i class="fa fa-plus" aria-hidden="true"></i>
        </button>
      </div>
      <div className="subhead">
        <h5>Zones</h5>
        <p>Total 4</p>
      </div>
      <ZonesCard />

      {/* Add Building Modal Start */}
      <AddZoneModal
        title="Zone"
        check="false"
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      {/* Add Building Modal End */}
    </>
  );
};
export default Zones;
