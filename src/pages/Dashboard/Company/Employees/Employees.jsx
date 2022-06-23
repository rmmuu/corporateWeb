import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllCompanyEmployees } from '../../../../Apis/CompanyEmployee';
import EmployeeVehicleCard from "../../../../components/EmployeeVehicleCard";
import TablePagination from '@mui/material/TablePagination';
import HashLoader from "react-spinners/HashLoader";
import { override } from "../../../../Helpers/spinnercss";

export const Employees = ({ noOfEmployees }) => {
  const userdata = JSON.parse(sessionStorage.getItem("userdata"));
  const companyId = "bc9789f1-3f16-4759-851d-5501cc37ec97";

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(4);
  const [employeeData, setEmployeeData] = useState();

  useEffect(() => {

    const pagination = {
      order: true,
      page: 1,
      size: 10,
      sortBy: "id"
    }

    getAllCompanyEmployees(pagination).then(({ data: { data } }) => {
      setEmployeeData(data)
      // console.log(data)
    }).catch(error => {
      // toast.error("something went wrong.")
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
      <div className="employeeVehicleHead">
        <div>
          <h3>
            Employees
            <Link to="/dashboard/company/employees">
              <sub>view more</sub>
            </Link>
          </h3>
          <p>
            Total <span>{noOfEmployees}</span>
          </p>
        </div>
        <Link to="/dashboard/company/addemployee">
          <button className="addNewEmployeeBtn">Add new Employee</button>
        </Link>
      </div>
      <div className="row mb-3">
        {
          employeeData ?
            employeeData?.content?.map(item => (
              <div className="col-12 col-md-6" style={{ marginTop: "4.5rem" }} key={item.id}>
                <EmployeeVehicleCard employeeCardData={item} />
              </div>
            )) :
            <div className="overlay">
              <HashLoader loading="true" css={override} size={50} color="#fff" />
            </div>
        }
        <div className="col-10 mt-2">
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
      </div>
    </>
  );
};
