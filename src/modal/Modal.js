import React from 'react'
import styles from "./modal.module.css"
import {useSelector} from 'react-redux'

export default function Modal() {

    let {title, Component}= useSelector(state=> state.ModalReducer);
    // console.log(provice)
    return (
        <div style={{ width: "380px", marginTop: "300px" }} className={`${title==="Điểm đi" ? styles["di"] : styles["den"]} modal`} id="ModalLocaltion" tabIndex={-1} aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">{title}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div className="modal-body">
                        {Component}
                    </div>
                    {/* <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Send message</button>
                    </div> */}
                </div>
            </div>
        </div>
    )
}
