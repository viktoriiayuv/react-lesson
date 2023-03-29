import css from './Modal.module.css';
const Modal = ({ img: { src, alt }, closeModal }) => {
  return (
    <div className={css.backdrop}>
      <div className={css.modal}>
        <img src={src} alt={alt}></img>
        <button type={css.button} onClick={closeModal}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
