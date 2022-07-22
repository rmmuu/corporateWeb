import React, { useEffect, useState } from "react";
import SingleEmployeeCard from "./SingleEmployeeCard";
import { getAllCompanyEmployees } from "../../../../../Apis/CompanyEmployee";
import TablePagination from '@mui/material/TablePagination';

const EmployeeCards = ({ orderBy, sortBy }) => {
  const [employeeData, setEmployeeData] = useState();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(4);

  useEffect(() => {

    const body = {
      order: sortBy === 'asc' ? true : false,
      page: page,
      size: rowsPerPage,
      sortBy: orderBy ? orderBy : "id"
    }

    getAllCompanyEmployees(body).then(({ data: { data } }) => {
      setEmployeeData(data)
      // console.log(data)
    }).catch(error => {
      // toast.error("something went wrong.")
    })

  }, [page, rowsPerPage, orderBy, sortBy])

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value));
    setPage(0);
  };



  return (
    <>
      {/* <div style={{ display: "flex" }} className="mt-2"> */}
      <div className="row mt-5 mr-2">
        {
          employeeData?.content?.map((character) => (
            <>
              <div className="col-md-3">
                <SingleEmployeeCard
                  index={character.id}
                  character={character}
                  key={character.id}
                />
              </div>
            </>
          ))
        }
      </div>
      {/* </div> */}
      <div className="d-flex justify-content-center">
        <TablePagination
          component="div"
          rowsPerPageOptions={[2, 4, 6, 8]}
          count={employeeData?.totalElements}
          page={page}
          onPageChange={handleChangePage}
          labelRowsPerPage="Users per page"
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </div>
    </>
  );
};

export default EmployeeCards;
