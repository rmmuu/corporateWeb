import React, { useState, useEffect } from "react";
import SingleVehicleCard from "./SingleVehicleCard";
import TablePagination from '@mui/material/TablePagination';
import { getAllCompanyVehicles } from "../../../../Apis/companyVehicle";
import { toast } from "react-toastify";

const VehicleCards = () => {
  const [vehicleData, setVehicleData] = useState();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(4);

  useEffect(() => {

    const body = {
      order: true,
      page: page,
      size: rowsPerPage,
      sortBy: "id"
    }

    getAllCompanyVehicles(body).then(({ data: { data } }) => {
      setVehicleData(data)
      // console.log(data)
    }).catch(error => {
      toast.error("something went wrong.")
    })

  }, [page, rowsPerPage])

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value));
    setPage(0);
  };

  return (
    <>
      <div className="row mt-5 mr-2">
        {
          vehicleData?.content?.map(item => (
            <div className="col-md-4" key={item.id}>
              <SingleVehicleCard vehicle={item.vehicle} />
            </div>
          ))
        }
      </div>
      <div className="d-flex justify-content-center">
        <TablePagination
          component="div"
          rowsPerPageOptions={[2, 4, 6, 8]}
          count={vehicleData?.totalElements}
          page={page}
          onPageChange={handleChangePage}
          labelRowsPerPage="Vehicles per page"
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </div>
    </>
  );
};

export default VehicleCards;
