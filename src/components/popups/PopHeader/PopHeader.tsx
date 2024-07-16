import { Link } from 'react-router-dom';

interface PopHeaderProps {
    onClose: () => void;
}

export default function PopHeader({ onClose }: PopHeaderProps) {
    const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div className="absolute top-full right-0 rounded-[30px] bg-white border shadow-lg w-[266px] h-[258px] flex flex-col items-center justify-center z-20" style={{ transform: 'translateY(24px)' }} onClick={handleClose}>
            <div onClick={(event) => event.stopPropagation()} className="flex flex-col items-center">
                <div className="text-center">
                    <p className="text-[18px] font-medium mb-[10px]">Сергей</p>
                    <p className="text-[18px] mb-[34px]">sergey.petrov96@mail.com</p>
                </div>
                <div className="flex flex-col items-center">
                    <Link to="/profile">
                        <button className="btn-green w-[206px] h-[52px] mb-[10px]">Мой профиль</button>
                    </Link>
                    <Link to="/signin">
                        <button className="btn-white w-[206px] h-[52px]">Выйти</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}