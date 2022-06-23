
import React, { useState } from 'react'
import CustomDatatable from '../../../../components/customDatatable'
import { FaRegTrashAlt } from 'react-icons/fa';
import SaveIcon from "@mui/icons-material/Save";
import CreateEventModal from "../subComponents/createEventModal"

const Vehicles = () => {
 
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const employeeTable = [
        {
            icon: <FaRegTrashAlt style={{ fill: '#e24c4b' }} />,
            columns : [
                {
                  name: "BRAND",
                  label: "BRAND",
                  options: {
                    filter: true,
                  },
                },
                {
                  name: "SUB_BRAND",
                  label: "SUB-BRAND",
                  options: {
                    filter: true,
                    sort: false,
                  },
                },
                {
                  name: "MODEL",
                  label: "MODEL",
                  options: {
                    filter: true,
                    sort: false,
                  },
                },
                {
                  name: "PLATES",
                  label: "PLATES",
                  options: {
                    filter: true,
                    sort: false,
                  },
                },
                {
                  name: "COLOR",
                  label: "COLOR",
                  options: {
                    filter: true,
                    sort: false,
                  },
                },
                {
                    name: "S_N",
                    label: "S/N",
                    options: {
                      filter: true,
                      sort: false,
                    },
                  },
                  {
                    name: "OPT",
                    label: "OPT",
                    options: {
                      filter: true,
                      sort: false,
                    },
                  }
              ],
              data : [
                {
                    BRAND: "Joe James",
                    SUB_BRAND: "Test Corp",
                    MODEL: "Yonkers",
                    PLATES: "NY",
                    COLOR: "NY",
                    S_N: "NY",
                    OPT: <FaRegTrashAlt style={{ fill: '#e24c4b' }} />,
                }
              ]
          }
        ]
  
    return (
        <div className='vehicles'>
            <div className="vehicleTable">
                <div className="head">
                    <div className="add_vehicle">
                        <button className="btn btn-lg" onClick={() => handleShow(true)}>
                            CREATE EVENT
                            <SaveIcon />
                        </button>
                        <CreateEventModal
                            show={show}
                            onHide={() => handleClose(false)}
                        />
                    </div>
                </div>

                <CustomDatatable tableData={employeeTable} />
            </div>
           
        </div>
    )
}

export default Vehicles