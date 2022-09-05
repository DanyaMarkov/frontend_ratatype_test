// import { Modal } from "react-bootstrap";

import Modal from "react-bootstrap/Modal";

import { observer } from "mobx-react-lite";
import css from "./ModalChoose.module.css";
import TakeCards from "../BloodBones/BloodBones";
import BloodBones from "../BloodBones/BloodBones";
import { useEffect } from "react";

const ModalChoose = observer(({ show, onHide, curType }) => {
    useEffect(() => {
        // alert(curType);
    }, [onHide]);

    return (
        <Modal show={show} onHide={onHide} centered size="lg">
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-name-vcenter">
                    Всем привет
                </Modal.Title>
            </Modal.Header>
            <div className={css.modalContent}>
                {curType === "takeCards" ? <TakeCards /> : <BloodBones />}
            </div>
        </Modal>
    );
});

export default ModalChoose;
