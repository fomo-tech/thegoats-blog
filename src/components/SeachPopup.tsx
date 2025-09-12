'use client'

import clsx from 'clsx';
import React from 'react'

interface SeachPopupProps {
    isOpen?: boolean;
    onClose?: () => void;
}


const SeachPopup: React.FC<SeachPopupProps> = ({ isOpen, onClose }) => {
    console.log(isOpen);

    return (
        <div className={clsx("search-popup", {
            'visible': isOpen,
        })}>
            {/* close button */}
            <button type="button" className="btn-close" aria-label="Close" onClick={onClose} />
            {/* content */}
            <div className="search-content">
                <div className="text-center">
                    <h3 className="mb-4 mt-0">Press ESC to close</h3>
                </div>
                {/* form */}
                <form className="d-flex search-form">
                    <input
                        className="form-control me-2"
                        type="search"
                        placeholder="Search and press enter ..."
                        aria-label="Search"
                    />
                    <button className="btn btn-default btn-lg" type="submit">
                        <i className="icon-magnifier" />
                    </button>
                </form>
            </div>
        </div>

    )
}

export default SeachPopup