import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { GetIncomingEventsPageable } from '../../../reduxToolkit/EmployeeEvents/EmployeeEventsApi';
import { GetAllPageableProvider } from '../../../reduxToolkit/EmployeeProviders/EmployeeProvidersApi';
import TablePagination from '@mui/material/TablePagination';
import ProviderDropDown from "./SubComponents/providerDropDown";

const ProviderTable = (toggleState) => {
  const dispatch = useDispatch();

  const { getAllPageableProvider } = useSelector(state => state.EmployeeProviderSlice)
  console.log(getAllPageableProvider)

  const [pagePagination, setPagePagination] = useState(0);
  const [rowsPerPageProvider, setRowsPerProvider] = useState(4);

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
  // var arr = [1, 2, 3, 4, 5, 6]

  useEffect(() => {


    const body = {

      pagination: {
        "order": true,
        "page": pagePagination,
        "size": rowsPerPageProvider,
        "sortBy": "id"
      }
    }
    dispatch(GetAllPageableProvider(body));
  }, [pagePagination, rowsPerPageProvider])

  return (
    <>
      {
        getAllPageableProvider?.content?.length !== 0 ?
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
                getAllPageableProvider?.content?.map((item, index) => (
                  <tr key={index}>
                    <td className='first'>{item?.providerCompanyName}</td>
                    <td>Maria Anders</td>
                    <td>{item?.user?.status?.name}</td>
                    <td>{item?.user?.email}</td>
                    <td>{item?.user?.phoneNumber}</td>
                    <td className='last'>
                      <ProviderDropDown dropDownProps={dropDownProps} userId={item?.user?.id} pid={item?.id} statusTo={item?.user?.status?.id} />
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
          rowsPerPageOptions={[2, 4, 6, 8]}
          count={getAllPageableProvider?.totalElements}
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

export default ProviderTable