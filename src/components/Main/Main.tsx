import Card from "../Card/Card";

export default function Main() {
    return (
        <div className="flex flex-col justify-center items-center gap-[50px]">
            <div className="flex justify-center items-center gap-[10px]">
                <h1 className="text-6xl leading-[60px] font-medium">Начните заниматься спортом и улучшите качество жизни</h1>
                <div className="flex flex-col items-center">
                    <div className="flex bg-[#BCEC30] px-[16px] py-[20px] gap-[10px] text-[32px] leading-[35px] font-normal">Измени своё тело за полгода!</div>
                    <svg className="absolute mt-[98px]" width="31" height="36" viewBox="0 0 31 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.31047 34.7255C1.70859 35.9972 -0.543649 34.3288 0.206143 32.4259L12.4832 1.26757C12.9654 0.043736 14.4775 -0.389332 15.5345 0.393651L29.4865 10.7288C30.5434 11.5118 30.5697 13.0844 29.5395 13.9023L3.31047 34.7255Z" fill="#BCEC30" />
                    </svg>
                </div>
            </div>
            <div className="flex gap-[40px] flex-wrap justify-start">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <div onClick={() => {window.scrollTo(0, 0)}} className="px-[26px] py-[16px] bg-[#BCEC30] rounded-[46px]">Наверх ↑</div>
        </div>
    );
}