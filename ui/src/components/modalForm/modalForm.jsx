import { useState,useImperativeHandle, forwardRef } from 'react';
import Modal from 'react-bootstrap/Modal';
import FormStudyAbroad from "../formStudyAbroad/formStudyAbroad";
import "./index.scss"
import {IoMdClose} from "react-icons/io"
const ModalForm = forwardRef((props, ref) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  useImperativeHandle(ref, () => ({
    open: () => {
      setShow(true);
    }
  }));
  return (
    <>
     <Modal show={show} onHide={handleClose} dialogClassName="custom-modal-form-submit">
        <div className='close' onClick={handleClose}><IoMdClose /></div>
        
          <FormStudyAbroad />
        
      
      </Modal>
    </>
  );
})

export default ModalForm;