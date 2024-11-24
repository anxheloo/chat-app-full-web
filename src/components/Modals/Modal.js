const Modal = ({ children, closeModal }) => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.2)] flex items-center justify-center z-[999] p-2"
      onClick={closeModal}
    >
      {children}
    </div>
  );
};

export default Modal;
