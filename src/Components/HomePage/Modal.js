import '../../Styles/Modal.css'

export function Modal({ isOpen, toggleOpen, children }) {

    const handleOverlayClick = (e) => {
        if (e.target.classList.contains('overlay')) {
            toggleOpen();
        }
    };

    const handleModalClick = (e) => {
        e.stopPropagation();
    };
    
    return (
        <div className={`overlay ${isOpen ? 'open' : ''}`} onClick={handleOverlayClick}>
            <div className='modal' onClick={handleModalClick}>
                {children}
            </div>
        </div>
    );
}