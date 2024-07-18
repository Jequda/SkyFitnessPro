import { ToolTipComponent } from "../Tooltip/Tooltip";
type CardType = {
    isProfilePage?: boolean;
    handleOpenPopSelectTraining?: () => void;
    handleDeleteCard?: () => void;
    openPopLogin?: () => void
}

export default function Card({ openPopLogin, isProfilePage, handleOpenPopSelectTraining, handleDeleteCard }: CardType) {
    return (
        <div className="w-[360px] flex flex-col justify-center items-center gap-[24px] rounded-[30px] shadow-lg">
            <div className="flex flex-row-reverse w-[360px]">
                <div onClick={openPopLogin} className="absolute pt-[20px] pr-[20px] z-[2]">
                    <ToolTipComponent>
                        <svg className="w-[27px] h-[27px]" width="56" height="56" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={handleDeleteCard}>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M14 27.3333C21.3638 27.3333 27.3333 21.3638 27.3333 14C27.3333 6.63616 21.3638 0.666626 14 0.666626C6.63619 0.666626 0.666656 6.63616 0.666656 14C0.666656 21.3638 6.63619 27.3333 14 27.3333ZM12.6667 12.6666V7.33329H15.3333V12.6666H20.6667V15.3333H15.3333V20.6666H12.6667V15.3333H7.33332V12.6666H12.6667Z" fill="white" />
                        </svg>
                    </ToolTipComponent>
                </div>
                <img alt="изображение курса" className="rounded-[30px] w-[360px] h-[325px]" src="/yogaImg.jpg" />
            </div>
            <div className="flex px-[30px] pt-[24px] pb-[15px] gap-[20px] flex-col">
                <h2 className="text-[32px] leading-[35px] font-medium">Йога</h2>
                <div className="flex gap-[6px] flex-wrap">
                    <div className="flex justify-center items-center bg-[#F7F7F7] rounded-[50px] p-[10px] gap-[6px]">
                        <div>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.5 2.625C7.5 1.79657 6.82843 1.125 6 1.125C5.17157 1.125 4.5 1.79657 4.5 2.625C2.84315 2.625 1.5 3.96815 1.5 5.625H16.5C16.5 3.96815 15.1569 2.625 13.5 2.625C13.5 1.79657 12.8284 1.125 12 1.125C11.1716 1.125 10.5 1.79657 10.5 2.625H7.5Z" fill="#202020" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 7.125H16.5V11.325C16.5 13.0052 16.5 13.8452 16.173 14.487C15.8854 15.0515 15.4265 15.5104 14.862 15.798C14.2202 16.125 13.3802 16.125 11.7 16.125H6.3C4.61984 16.125 3.77976 16.125 3.13803 15.798C2.57354 15.5104 2.1146 15.0515 1.82698 14.487C1.5 13.8452 1.5 13.0052 1.5 11.325V7.125ZM10.5 11.325C10.5 10.905 10.5 10.6949 10.5817 10.5345C10.6537 10.3934 10.7684 10.2787 10.9095 10.2067C11.0699 10.125 11.28 10.125 11.7 10.125H12.3C12.72 10.125 12.9301 10.125 13.0905 10.2067C13.2316 10.2787 13.3463 10.3934 13.4183 10.5345C13.5 10.6949 13.5 10.905 13.5 11.325V11.925C13.5 12.345 13.5 12.5551 13.4183 12.7155C13.3463 12.8566 13.2316 12.9713 13.0905 13.0433C12.9301 13.125 12.72 13.125 12.3 13.125H11.7C11.28 13.125 11.0699 13.125 10.9095 13.0433C10.7684 12.9713 10.6537 12.8566 10.5817 12.7155C10.5 12.5551 10.5 12.345 10.5 11.925V11.325Z" fill="#202020" />
                            </svg>
                        </div>
                        <div className="text-base leading-[18px] font-normal">25 дней</div>
                    </div>
                    <div className="flex justify-center items-center bg-[#F7F7F7] rounded-[50px] p-[10px] gap-[6px]">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5ZM8.25 4.5V9C8.25 9.41421 8.58579 9.75 9 9.75H12.75V8.25H9.75V4.5H8.25Z" fill="#202020" />
                        </svg>
                        <div className="text-base leading-[18px] font-normal">20-50 мин/день</div>
                    </div>
                    <div className="flex justify-center items-center bg-[#F7F7F7] rounded-[50px] p-[10px] gap-[6px]">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_17_2324)">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M15 2.625C15.2984 2.625 15.5845 2.74353 15.7955 2.9545C16.0065 3.16548 16.125 3.45163 16.125 3.75V14.25C16.125 14.5484 16.0065 14.8345 15.7955 15.0455C15.5845 15.2565 15.2984 15.375 15 15.375C14.7016 15.375 14.4155 15.2565 14.2045 15.0455C13.9935 14.8345 13.875 14.5484 13.875 14.25V3.75C13.875 3.45163 13.9935 3.16548 14.2045 2.9545C14.4155 2.74353 14.7016 2.625 15 2.625Z" fill="#D9D9D9" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 4.875C12.2984 4.875 12.5845 4.99353 12.7955 5.2045C13.0065 5.41548 13.125 5.70163 13.125 6V14.25C13.125 14.5484 13.0065 14.8345 12.7955 15.0455C12.5845 15.2565 12.2984 15.375 12 15.375C11.7016 15.375 11.4155 15.2565 11.2045 15.0455C10.9935 14.8345 10.875 14.5484 10.875 14.25V6C10.875 5.70163 10.9935 5.41548 11.2045 5.2045C11.4155 4.99353 11.7016 4.875 12 4.875Z" fill="#D9D9D9" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9 7.125C9.29837 7.125 9.58452 7.24353 9.7955 7.4545C10.0065 7.66548 10.125 7.95163 10.125 8.25V14.25C10.125 14.5484 10.0065 14.8345 9.7955 15.0455C9.58452 15.2565 9.29837 15.375 9 15.375C8.70163 15.375 8.41548 15.2565 8.2045 15.0455C7.99353 14.8345 7.875 14.5484 7.875 14.25V8.25C7.875 7.95163 7.99353 7.66548 8.2045 7.4545C8.41548 7.24353 8.70163 7.125 9 7.125Z" fill="#00C1FF" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M6 9.375C6.29837 9.375 6.58452 9.49353 6.7955 9.7045C7.00647 9.91548 7.125 10.2016 7.125 10.5V14.25C7.125 14.5484 7.00647 14.8345 6.7955 15.0455C6.58452 15.2565 6.29837 15.375 6 15.375C5.70163 15.375 5.41548 15.2565 5.2045 15.0455C4.99353 14.8345 4.875 14.5484 4.875 14.25V10.5C4.875 10.2016 4.99353 9.91548 5.2045 9.7045C5.41548 9.49353 5.70163 9.375 6 9.375Z" fill="#00C1FF" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M3 11.625C3.29837 11.625 3.58452 11.7435 3.7955 11.9545C4.00647 12.1655 4.125 12.4516 4.125 12.75V14.25C4.125 14.5484 4.00647 14.8345 3.7955 15.0455C3.58452 15.2565 3.29837 15.375 3 15.375C2.70163 15.375 2.41548 15.2565 2.2045 15.0455C1.99353 14.8345 1.875 14.5484 1.875 14.25V12.75C1.875 12.4516 1.99353 12.1655 2.2045 11.9545C2.41548 11.7435 2.70163 11.625 3 11.625Z" fill="#00C1FF" />
                            </g>
                            <defs>
                                <clipPath id="clip0_17_2324">
                                    <rect width="18" height="18" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <div className="text-base leading-[18px] font-normal">Сложность</div>
                    </div>
                </div>
            </div>
            {isProfilePage && (
                <div className="mb-[15px] w-full bg-white rounded-b-[30px] flex flex-col justify-between items-center px-[30px]">
                    <div className="flex justify-between items-center w-full">
                        <div className="text-base leading-[18px] font-normal">Прогресс 50%</div>
                    </div>
                    <div className="w-[300px] h-[6px] bg-gray-300 rounded-full mt-[10px]">
                        <div className="w-[50%] h-full bg-[#00C1FF] rounded-full"></div>
                    </div>
                    <button onClick={handleOpenPopSelectTraining} className="btn-green w-[300px] mt-[40px]">
                        Продолжить
                    </button>
                </div>
            )}
        </div>
    );
};