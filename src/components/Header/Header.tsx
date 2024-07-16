import { useState } from "react";
import { Link } from 'react-router-dom';
import PopHeader from '../popups/PopHeader/PopHeader';

export default function Header() {
  const [showPopHeader, setShowPopHeader] = useState(false);

  const handleOpenPopHeader = () => {
    setShowPopHeader(true);
  };

  const handleClosePopHeader = () => {
    setShowPopHeader(false);
  };

  return (
    <div className="relative flex justify-center items-center w-[1160px] mt-[50px]">
      {showPopHeader && <div className="fixed inset-0 z-10" onClick={handleClosePopHeader}></div>}
      {showPopHeader && <PopHeader onClose={handleClosePopHeader} />}
      <div className="flex justify-between items-center w-[1160px]">
        <div>
          <Link to="/">
            <img src="logo-black.png" alt="logo" />
          </Link>
        </div>
        <div className="flex items-center cursor-pointer" onClick={handleOpenPopHeader}>
          <img src="avatar-mini.svg" alt="avatar" />
          <div className="mx-3">
            <p>Сергей</p>
          </div>
          <img src="arrow-down.svg" alt="arrow-down" />
        </div>
      </div>
    </div>
  );
}
