import React, { useEffect, useState } from 'react'
import packageImg from '../../../../assets/images/package.png'
import ic_excel from '../../../../assets/images/ic-excel.svg'
import ic_pdf from '../../../../assets/images/pdf-icon.png'
import ic_download from '../../../../assets/images/ic_download.PNG';
import demoImg from '../../../../assets/images/companyImg.png';
import notify1 from '../../../../assets/images/notify1.png'
import notify2 from '../../../../assets/images/notify2.svg'
import notify3 from '../../../../assets/images/notify3.png'
import notify4 from '../../../../assets/images/notify4.png'
import notify5 from '../../../../assets/images/notify5.png'
import excel_image from '../../../../assets/images/excel-image.png';
import pdf_image from '../../../../assets/images/pdf-image.png';
import word_image from '../../../../assets/images/word-image.png';
import { TablePagination } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import NoEvent from '../../Events/NoEvent';
import { URL } from '../../../../Apis/Constants';
import { GetListNotifications } from '../../../../reduxToolkit/Notifications/NotificationsApi';

const NotificationsTab = () => {
  let body;
  var today = new Date();
  today.setDate(today.getDate() + 5);
  let time_in_miliseconds = today.getTime();
  const dispatch = useDispatch();
  const notificationlist = useSelector(state => state?.NotificationsSlice?.getListNotifications);
  // console.log(notificationlist)

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  useEffect(() => {
    body = {
      date: time_in_miliseconds,
      pagination: {
        order: true,
        page: page,
        size: rowsPerPage,
        sortBy: "id"
      }
    }
    dispatch(GetListNotifications(body));
  }, [])

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    body = {
      date: time_in_miliseconds,
      pagination: {
        order: true,
        page: newPage,
        size: rowsPerPage,
        sortBy: "id"
      }
    }
    dispatch(GetListNotifications(body));
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value));
    setPage(0);
    body = {
      date: time_in_miliseconds,
      pagination: {
        order: true,
        page: page,
        size: parseInt(event.target.value),
        sortBy: "id"
      }
    }
    dispatch(GetListNotifications(body));
  };

  const handleDownloadImage = (item) => {
    console.log(item)
    const bearerToken = sessionStorage.getItem("bearerToken");
    fetch(`${URL}image-service/download-by-id/${item.id}/option/notification_image`, {
      method: 'GET',
      headers: {
        "Accept": "application/json",
        'Content-Type': 'application/png',
        "Authorization": "Bearer " + bearerToken,
      }
    })
      .then((response) => response.blob())
      .then((blob) => {
        // Create blob link to download
        const url = window.URL.createObjectURL(
          new Blob([blob]),
        );
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute(
          'download',
          `${item.path}`,
        );
        // Append to html link element page
        document.body.appendChild(link);
        // Start download
        link.click();
        // Clean up and remove the link
        link.parentNode.removeChild(link);
      });
  }


  const handleDownloadFile = (item) => {
    console.log(item)
    fetch(`${URL}image-service/download-by-id/${item?.id}/option/notification_file`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/pdf',
        "Authorization": `Bearer ${sessionStorage.getItem("bearerToken")}`,
      },
    })
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(
          new Blob([blob]),
        );
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute(
          'download',
          `${item?.path}`,
        );
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
      });
  }

  return (
    <div className="col-12 mx-auto notifications">
      {
        notificationlist?.content?.length !== 0 ?
          <>
            {
              notificationlist?.content?.map(item => (
                <div className='notificationBox' key={item?.id}>
                  <div style={{ width: "35%" }}>
                    <p className='P1'>
                      <img
                        src={
                          item?.notificationType.id === 1 ?
                            notify1 :
                            item?.notificationType.id === 2 ?
                              notify2 :
                              item?.notificationType.id === 3 ?
                                notify3 :
                                item?.notificationType.id === 4 ?
                                  notify4 :
                                  item?.notificationType.id === 5 ?
                                    notify5 : packageImg
                        }
                        className="notifyIcon"
                        alt="package"
                      />
                      <span>{item?.notificationType?.id === 4 ? item?.type : item?.notificationType?.name}</span>
                    </p>
                    <p className='P3'>{item?.title}</p>
                    <p className='P4'>{item?.message}</p>
                    <p className='dateText'>
                      {
                        item?.notificationType?.id === 2 ?
                          `Date Meeting: ${new Date(item?.createdAt).toLocaleString()}` :
                          null
                      }
                    </p>
                  </div>
                  {
                    item?.path !== "none" && item?.path.split("_")[1] === "file" ?
                      <div className='downloadFileDiv'>

                        <img
                          src={
                            item?.path?.split('.').pop() === "pdf" ? pdf_image :
                              item?.path?.split('.').pop() === "xlsx" ? excel_image :
                                item?.path?.split('.').pop() === "docx" || item?.path?.split('.').pop() === "pptx" ? word_image : pdf_image
                          }
                          className="mr-3"
                          style={{ width: "50px" }}
                          alt={item?.path}
                        />
                        <div>
                          <p
                            style={{
                              width: "9rem",
                              wordBreak: "break-all"
                            }}
                          >
                            {item?.path !== "none" ? item?.path : null}
                          </p>
                          {/* <p><span>tamaño: </span>4MB.</p> */}
                        </div>
                        <img
                          src={ic_download}
                          className="cancelIcon"
                          alt="download"
                          onClick={() => handleDownloadFile(item)}
                        />
                      </div> : null
                  }
                  {
                    item?.path !== "none" && item?.path.split("_")[1] === "image" ?
                      <div className='downloadFileDiv'>
                        <img
                          src={`data:image/${item?.path.split('.')[1]};base64,${item?.image}`}
                          className="demoImg"
                          alt={item?.path}
                        />
                        <img
                          src={ic_download}
                          className="cancelIcon"
                          alt="package"
                          onClick={() => handleDownloadImage(item)}
                        />
                      </div>
                      : null
                  }
                  <div className='text-right'>
                    <p className='P2'>
                      {new Date(item?.createdAt).toDateString()} <br />
                      {new Date(item?.createdAt).toTimeString().split('G')[0]}
                    </p>
                    <p className='P3'> <span>Created By: </span>{item?.user?.name}</p>
                  </div>
                </div>
              ))
            }
            <div className='d-flex justify-content-center'>
              <TablePagination
                component="div"
                rowsPerPageOptions={[10, 16, 22]}
                count={notificationlist?.totalElements}
                page={page}
                onPageChange={handleChangePage}
                labelRowsPerPage="Notifications per page"
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </div>
          </> :
          <NoEvent title="Notifications" />
      }
    </div>
  )
}

export default NotificationsTab