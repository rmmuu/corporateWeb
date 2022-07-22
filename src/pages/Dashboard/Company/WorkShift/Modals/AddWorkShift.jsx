import React,{useRef}from "react";
import { Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { CreateCompanyWorkShift } from "../../../../../reduxToolkit/CompanyWorkShift/CompanyWorkShiftApi";
const AddWorkShift = (props) => {
  const inputRef = useRef(null);
  const dispatch=useDispatch();

  const handleSubmit=()=>{
    dispatch(CreateCompanyWorkShift(inputRef.current.value))
  }

  return (
    <Modal
    {...props}
    size="md"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <button onClick={props.onHide} className="modal-close-btn">
      X
    </button>
    <span className="main-modal-heading">ADD WORK SHIFT</span>
    <div className="unlink-modal-body">
      <span
        className="modal-desc-text"
        style={{ color: "#000", fontSize: "14px", fontWeight: 400,textAlign:"left" }}
      >
        Enter the name of work shift
      </span>
      <div className="mt-3" style={{position:"relative"}}>
        <label className="rejection-note-label">WORK SHIFT</label>
        <input
          style={{height: "45px",
            borderRadius: "12px"}}
          ref={inputRef}
          type="tex"
          placeholder="Shift Name"
          id="message"
          name="message"
          className="rejection-note-field w-100"
        />
      </div>
      <div className="btn-div">
        <button
          className="button-sec btn-cancel"
          style={{ color: "red" }}
          onClick={props.onHide}
        >
          CANCEL
        </button>
        <button
          className="button-sec btn-confirm"
          onClick={()=>{handleSubmit();props.onHide()}}
        >
          CREATE
        </button>
      </div>
    </div>
  </Modal>
  );
};

export default AddWorkShift;
