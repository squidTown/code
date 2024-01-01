import React from "react";
import ReactModal from "react-modal";
import { EmailCheck } from "../pages/EmailCheck";

const customModalStyles: ReactModal.Styles = {
  overlay: {
    backgroundColor: "rgb(79 79 81 / 40%)",
  },
  content: {
    width: "600px",
    height: "700px",
    zIndex: "150",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "10px",
    backgroundColor: "#ffffff00",
    justifyContent: "center",
    overflow: "auto",
    border: "none",
  },
};

const Email = (props: { value: boolean; setModal: any; setBtnTxt: any; }) => {
  return (
    <ReactModal
      isOpen={props.value}
      onRequestClose={() => props.setModal(false)}
      ariaHideApp={false}
      shouldCloseOnOverlayClick={true}
      style={customModalStyles}
    >
      <EmailCheck setBtnTxt={props.setBtnTxt} setValue={props.setModal} />
    </ReactModal>
  );
};

export default Email;
