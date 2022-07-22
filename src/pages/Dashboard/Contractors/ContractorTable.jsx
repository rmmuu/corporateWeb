import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import TablePagination from '@mui/material/TablePagination';
import { getAllEmployeeContractors } from '../../../reduxToolkit/EmployeeContractors/EmployeeContractorsSlice';
import { GetAllEmployeeContractors } from '../../../reduxToolkit/EmployeeContractors/EmployeeContractorsApi';
import ContractorOptionMenu from './SubComponents/ContractorOptionMenu';
const ContractorTable = (toggleState) => {
  const dispatch = useDispatch();

  const fetchAllContractors = useSelector(getAllEmployeeContractors);

  const [pagePagination, setPagePagination] = useState(0);
  const [rowsPerPageProvider, setRowsPerProvider] = useState(8);

  const handleChangePageProvider = (event, newPage) => {
    setPagePagination(newPage);
  };

  const handleChangeRowsPerPageProvider = event => {
    setRowsPerProvider(parseInt(event.target.value));
    setPagePagination(0);
  };

  const dropDownProps = {
    panel: 'provider',
    firstItem: 'DOWNLOAD FILE',
    secondItem: 'VIEW DETAILS '
  }
 
  useEffect(() => {
    const body = {
      pagination: {
        "order": true,
        "page": pagePagination,
        "size": rowsPerPageProvider,
        "sortBy": "id"
      }
    }
    dispatch(GetAllEmployeeContractors(body));
  }, [pagePagination, rowsPerPageProvider])

  return (
    <>
      {
        fetchAllContractors?.content?.length !== 0 ?
          <div className="providersTables">
            <table style={{ width: "100%" }}>
              <thead>
                <th className='first'>COMPANY NAME</th>
                <th>MANAGER</th>
                <th>STATUS</th>
                <th>EMAIL</th>
                <th>NUMBER</th>
                <th className='last'>options</th>
              </thead>
              {
                fetchAllContractors?.content?.map((item, index) => (
                  <tr key={index}>
                    <td className='first'>{item?.contractorCompanyName}</td>
                    <td>Maria Anders</td>
                    <td>{item?.user?.status?.name.replaceAll('_', ' ')}</td>
                    <td>{item?.user?.email}</td>
                    <td>{item?.user?.phoneNumber}</td>
                    <td className='last'>
                    <ContractorOptionMenu dropDownProps={dropDownProps} data={item} />
                    </td>
                  </tr>
                ))
              }
            </table>
          </div> :
          <p>no found</p>
        // <NoEvent />


      }

      <div className="d-flex justify-content-center">
        <TablePagination
          component="div"
          rowsPerPageOptions={[8, 16, 24]}
          count={fetchAllContractors?.totalElements}
          page={pagePagination}
          onPageChange={handleChangePageProvider}
          labelRowsPerPage="Provider per page"
          rowsPerPage={rowsPerPageProvider}
          onRowsPerPageChange={handleChangeRowsPerPageProvider}
        />
      </div>

    </>
  )
}

export default ContractorTable