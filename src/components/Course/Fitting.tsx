export default function Fitting({ text, i }: {text:string, i:number}) {
  return (
      <div className="w-[368px] h-[165px] bg-black text-white p-[28px] rounded-[20px] flex justify-center items-center">
        <div className="flex flex-row items-center">
          <div className="flex items-center text-[#BCEC30] text-7xl pr-[25px]">
            {i+1}
          </div>
          <p className="text-[24px]">{text}</p>
        </div>
      </div>
  );
}
