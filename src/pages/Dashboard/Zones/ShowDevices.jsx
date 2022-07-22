import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import house_plane from "../../../assets/images/house_plane@2x.png";
import map_solid from "../../../assets/images/map-solid.svg";
import ic_info from "../../../assets/images/ic-info.svg";
import ShowDeviceModal from "./Modal/ShowDeviceModal";
import ShowDeviceMapModal from "./Modal/showDeviceMapModal";
import ShowDeviceListModal from "./Modal/ShowDeviceListModal";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { GetListZoneMap, GetZoneDevicesLists, SetZoneImageCoordinate, ZoneDetailFatherAndChild } from "../../../reduxToolkit/EmployeeZones/EmployeeZonesApi";
import { useDispatch, useSelector } from "react-redux";
import ImageMarker from 'react-image-marker';
import RemovePlanModal from "./Modal/RemovePlanModal";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import deviceMarker from '../../../assets/images/ic-marker.svg'
import { useDrag, useDrop } from "react-dnd";

const ShowDevices = () => {
  const [ProfileImage, setProfileImage] = useState("");
  const [viewPlane, setViewPlane] = React.useState('');
  const [selectedZone, setSelectedZone] = React.useState('');
  const [isDeviceList, setIsDeviceList] = React.useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  let [markers, setMarkers] = useState({});
  const [imageMarkers, setImageMarkers] = useState([]);


  console.log(imageMarkers);
  console.log(markers);

  const CustomMarker = (imageMarkers) => {
    console.log(imageMarkers);

    if (viewPlane === selectedZone?.id) {
      return (
        <>
          {
            imageMarkers.map((marker, index) => {
              return (
                <Popup trigger={
                  <div class="marker">
                    <svg width="30px" height="43px" viewBox="0 0 48 72">
                      <path d="M24,0 C11.406,0 0,10.209 0,22.806 C0,35.4 10.407,50.436 24,72 C37.593,50.436 48,35.4 48,22.806 C48,10.209 36.597,0 24,0 L24,0 Z M24,33 C19.029,33 15,28.971 15,24 C15,19.029 19.029,15 24,15 C28.971,15 33,19.029 33,24 C33,28.971 28.971,33 24,33 L24,33 Z"></path>
                    </svg>
                  </div>
                }
                  position="top">
                  <div className="pop_up_zone_img">
                    <h1>{marker?.name}</h1>
                    <p>{marker?.description}</p>
                  </div>
                </Popup>
              )

            })
          }

        </>
      );
    } else {
      return (<></>)
    }


  };

  console.log(viewPlane)

  const dispatch = useDispatch();

  const { zoneDetailFatherAndChild, getListZoneMap, createZonePlane, deleteImgZonePlane,
    setZoneImageCoordinate, getZoneDevicesLists, uploadImgZonePlane } = useSelector(state => state.EmployeeZonesSlice)

  console.log(zoneDetailFatherAndChild)
  console.log(getListZoneMap)
  console.log(deleteImgZonePlane)
  console.log(uploadImgZonePlane)
  console.log(getZoneDevicesLists)


  const handleChange = (event) => {
    setViewPlane(event.target.value);
  };

  // get the coordinates of the mouse click
  const printCoordinates = (e) => {
    const { width, height } = e.target.getBoundingClientRect();
    const { offsetX, offsetY } = e.nativeEvent;

    console.log(offsetX, offsetY);

    // calculate percentage, subtract border/endzone percentage(10), map 80% to 100%, calculate yardage
    setX(Math.round(((((offsetX / width) * 100) - 10) / 80) * 100));
    // calculate percentage, subtract top-border percentage(5), map 90% to 100%, calculate yardage (53.3 yards total width)
    setY(Math.round(((((offsetY / height) * 100) - 5) / 90) * 53.3));
  };

  //drag
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "image",
    item: { id: '123' },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    })
  }))
  //drop
  const [{ isOver }, drop] = useDrop({
    accept: 'image',
    drop: (item) => { addDeviceToImage(item?.id) },
    collect: monitor => ({
      isOver: !!monitor.isOver(),
    }),
  });

  const addDeviceToImage = (id) => {
    alert("hi")
    console.log(id)
  }



  useEffect(() => {
    const data = {
      zoneId: localStorage.getItem('singlezoneId')
    }
    dispatch(GetListZoneMap(data))
  }, [createZonePlane, deleteImgZonePlane, uploadImgZonePlane])

  // get the selected zone map

  useEffect(() => {

    const checked = getListZoneMap?.filter(item => item.id === viewPlane)
    console.log(checked)
    setSelectedZone(checked[0])

  }, [selectedZone, viewPlane, getListZoneMap])


  useEffect(() => {

    const filtered = zoneDetailFatherAndChild?.devices?.filter(item => item.axisPositionX || item?.axisPositionY > 0)
    console.log(filtered)
    const checkDeviceImg = filtered?.map(item => ({ top: item.axisPositionX, left: item.axisPositionY, ...item }))
    console.log(checkDeviceImg)
    setImageMarkers(checkDeviceImg)
  }, [selectedZone, zoneDetailFatherAndChild])


  useEffect(() => {
    const data = {
      zonePlaneId: selectedZone?.id
    }
    dispatch(GetZoneDevicesLists(data))
  }, [selectedZone?.id])
  useEffect(() => {
    dispatch(ZoneDetailFatherAndChild({ zoneId: localStorage?.getItem("singlezoneId") }))
  }, [setZoneImageCoordinate])


  return (

    <>
      <div className="container_fluid show_device">
        <div className="row">
          <div className="col-md-12">
            <div className="show_device_navigation">
              <div className="show_device_navigation_item">
                <Link to="/dashboard/singlezonedetails">
                  <i className="fa fa-arrow-left" aria-hidden="true"></i>
                </Link>
                <h4>ZONE INFORMATION</h4>

              </div>
              <div>
                <h6>corporate</h6>
                <p><span>IBL |</span> Intelligence Bereau Laboratory</p>
                <h6>ZONE</h6>
                <p>{zoneDetailFatherAndChild?.name}</p>
              </div>
              <div>
                <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
                  <InputLabel id="demo-select-small">View</InputLabel>
                  <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={viewPlane}
                    label="Age"
                    onChange={handleChange}
                  // onSelect={() => { checkedSelectedZone() }}
                  >
                    {
                      getListZoneMap?.map((item, index) => {
                        return (
                          <MenuItem value={item.id}>{item.name}</MenuItem>
                        )
                      })
                    }
                    <MenuItem value={"map"} selected>Map</MenuItem>

                  </Select>
                </FormControl>
                <Link to="#" data-toggle="modal"
                  data-target="#removePLan">REMOVE PLANE</Link>
                <RemovePlanModal id={selectedZone?.id} />
              </div>


            </div>

          </div>
        </div>
        <div className="showdevice_addbtn"
          data-toggle="modal"
          data-target="#showdeviceModal">
          <button className="btn btn-primary">
            <span>ADD PLANE</span>
            <img src={map_solid} alt="" />
          </button>
        </div>
        {/* <div className="showdevice_addmap"
          data-toggle="modal"
          data-target="#showdevicemapModal">
          <button className="btn btn-primary">
            <span>ADD MAP</span>
            <img src={globe_asia_solid} alt="" />
          </button>
        </div> */}
        <div
          className="showdevice_list"
          data-toggle="modal"
          data-target="#showdevice_listModal">
          <button className="btn btn-primary" onClick={() => { setIsDeviceList(true) }}>
            <img src={ic_info} alt="" />

          </button>
        </div>
        {/* image show  */}
        <div className="Image_container_zone" >
          {
            viewPlane === "map" ?

              <div >
                <div >
                  <iframe width="100%" height="598px" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=100&amp;height=600&amp;hl=en&amp;q=spain&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                  </iframe>

                </div>

              </div>
              // <div style={{ marginTop: "12rem" }}>
              //   <LefletMapZone latlng={[33.5651107, 73.0169135]} />
              // </div>
              :

              <div className="zone_plane_drag_drop_container">
                <div ref={drop}>
                  <ImageMarker
                    src={
                      selectedZone?.path === "" ||
                        selectedZone?.path === null ||
                        selectedZone?.path === undefined ? house_plane :

                        `data:${selectedZone?.path};base64,${selectedZone?.image}`

                    }
                    markers={imageMarkers}
                    onAddMarker={(marker) => {
                      setMarkers(marker);

                      console.log(markers.top)
                      console.log(markers.left)
                      setTimeout(() => {
                        const data = {
                          id: "40776723-e155-43e9-8cd5-0d1ebf860aae",
                          axisPositionX: markers?.top,
                          axisPositionY: markers?.left,

                        }
                        dispatch(SetZoneImageCoordinate({ data, setMarkers }))
                      }, 1000)


                    }}
                    // onAddMarker={(marker) => setMarkers(() => marker)}
                    markerComponent={() => CustomMarker(imageMarkers)}
                  />
                </div>
                {
                  isDeviceList &&
                  <div className="zone_plane_device_list">
                    <div className="cross_container">
                      <i class="fa fa-times cross_zone_device" aria-hidden="true"
                        onClick={() => { setIsDeviceList(false) }}
                      ></i>
                    </div>
                    <h4>DEVICES</h4>
                    <div className="device_lists">
                      <div className="left">
                        <img ref={drag} src={deviceMarker} alt="" />
                        <p>PDA 1</p>
                      </div>

                      <div className="right">
                        <p>A</p>
                        <i class="fa fa-times cross_zone_device" aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>
                }

                {/* <ShowDeviceListModal /> */}

              </div>



          }


          {/* <img

            src={
              // ProfileImage === "" ||
              //   ProfileImage === null ||
              //   ProfileImage === undefined
              //   ? house_plane
              //   : ProfileImage
              selectedZone?.path === "" ||
                selectedZone?.path === null ||
                selectedZone?.path === undefined ? house_plane :

                `data:${selectedZone?.path};base64,${selectedZone?.image}`

            }
            className="img-fluid img_zone"

            alt="employeedetail-person4"
            onClick={(e) => printCoordinates(e)}
          /> */}
          {/* <div >
            C
          </div> */}
          {/* <svg viewbox="0 0 30 43" style={{ position: 'absolute', top: '0', right: '50%', }}>
            <path id="p1" d="M40 99.5 C-22.5 57.5 0 0 40 0.5 C80 0 102.5 57.5 40 99.5z" stroke-width="1" stroke="grey" fill="tr" />
            <text style="font-size: 24px;">
              <textPath xlink:href="#p1" startOffset="50%" text-anchor="middle">1test text</textPath>
            </text>
          </svg> */}


        </div>

        <ShowDeviceModal setProfileImage={setProfileImage} />

        <ShowDeviceMapModal />



      </div>


    </>

  );
};

export default ShowDevices;
