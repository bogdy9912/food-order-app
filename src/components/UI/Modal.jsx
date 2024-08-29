import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children, open, className = "", ...props }) => {
  const refDialog = useRef();

  useEffect(() => {
    const modal = refDialog.current;
    if (open) {
      modal.showModal();
    }

    return () => modal.close();
  }, [open]);
  return createPortal(
    <dialog ref={refDialog} className={`modal ${className}`}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
};

export default Modal;
