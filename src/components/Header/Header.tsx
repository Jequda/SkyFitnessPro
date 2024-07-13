import classNames from "classnames";
import { useState } from "react";
import PopLogin from "../popups/PopLogin/PopLogin";
import PopUserMenu from "../popups/PopUserMenu/PopUserMenu";

export default function Header() {
  const [isOpened, setIsOpened] = useState(false);
  function togglePopup() {
    setIsOpened((prev) => !prev);
  }
  
  return (
    <>
      <div className="flex flex-row">
        <div className="mt-[50px] ml-[140px] ">
          <img
            className=""
            src="/logo.png"
            alt="course_picture"
            width="220px"
            height="35px"
          />
          <p className="mt-[15px] w-[327px] text-lg text-[#7d7d7d]">
            Онлайн-тренировки для занятий дома
          </p>
        </div>
        <div className="ml-[730px] mt-[50px]">
          <button
            onClick={togglePopup}
            className="btn-green w-[103px] h-[52px] text-2xl py-2 px-4 font-semibold text-center"
          >
            Войти
          </button>
          {isOpened && (
            <div
              className={classNames(
                "fixed inset-0 bg-black bg-opacity-50 z-10 flex items-center justify-center",
                isOpened ? "" : "hidden"
              )}
              onClick={() => togglePopup()}
            >
              <div onClick={(e) => e.stopPropagation()}>
                <PopLogin />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

// Если пользователь авторизован

//   return (
//     <>
//       <div className="flex flex-row">
//         <div className="mt-[50px] ml-[140px] ">
//           <img
//             className=""
//             src="/logo.png"
//             alt="course_picture"
//             width="220px"
//             height="35px"
//           />
//           <p className="mt-[15px] w-[327px] text-lg text-[#7d7d7d]">
//             Онлайн-тренировки для занятий дома
//           </p>
//         </div>
//         <div className="ml-[685px] mt-[50px] ">
//           <div className="">
//           <div onClick={togglePopup} className=" w-[168px] h-[50px] flex flex-row">
//             <img
//               className=""
//               src="/Profile.png"
//               alt="profile_picture"
//               width="50px"
//               height="50px"
//             />
//             <p className="text-lg/[26px] flex items-center pl-[15px] pr-[15px]">Сергей</p>
//             <img
//               className=""
//               src="/Rectangle 3765.svg"
//               alt=""
//               width="8px"
//               height="8px"
//             />
//             </div>
//           </div>
//           {isOpened && (
//             <div
//               className=""
//               onClick={() => togglePopup()}
//             >
//               <div onClick={(e) => e.stopPropagation()}>
//                 <PopUserMenu/>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// }
