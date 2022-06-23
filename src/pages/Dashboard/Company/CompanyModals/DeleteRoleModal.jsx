import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { toast } from "react-toastify";
import { removeUserRole, deleteRole } from "../../../../Apis/roles";
import cancel from '../../../../assets/images/ic-cancel.svg'

const DeleteRoleModal = (props) => {
    const userdata = JSON.parse(sessionStorage.getItem("userdata"));
    const companyId = "bc9789f1-3f16-4759-851d-5501cc37ec97";
    const [loading, setLoading] = useState(false);

    const handleDeleteUser = () => {
        console.log(props.deleteitemname)
        if (props.deleteitemname === "role") {
            setLoading(true)
            deleteRole(props.deleteid).then(({ data: { data } }) => {
                props.onHide();
                props.setLoading(data)
                setLoading(false)
            }).catch(error => {
                toast.error("something went wrong in deleerole")
                setLoading(false)
            })
        } else if (props.deleteitemname === "user") {
            removeUserRole(props.deleteid).then(({ data: { data } }) => {
                setLoading(false)
            }).catch(error => {
                toast.error("something went wrong in removeroletouser")
                setLoading(false)
            })
        }

    }

    return (
        <Modal
            className="documents-panel-modal"
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    Delete {props.deleteitemname}
                </Modal.Title>
                <img onClick={() => props.onHide()} className="modalClose" src={cancel} alt="" />
            </Modal.Header>
            <Modal.Body className="docsModalBody">
                <div style={{
                    fontSize: "14px",
                    marginBottom: "1rem",
                    textAlign: "center",
                    color: "#707070",
                }}
                >
                    Please. confirm the action the delete the role CEO.
                    All the employees with this role must have a role so we
                    will assign NONE meanwhile you assign their new role.
                </div>
                <div className="buttonArea">
                    <button className="btns btn btn-light" onClick={() => props.onHide()}>Cancel</button>
                    <button className="btn btn-success" onClick={handleDeleteUser}>
                        {
                            loading ? "Deleting...!" : "Delete"
                        }
                    </button>
                </div>
            </Modal.Body>

        </Modal>
    )
}

export default DeleteRoleModal