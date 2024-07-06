import { Link } from 'react-router-dom'

export default function Header() {
return ( 
<div className="flex justify-between items-center w-full px-[140px] ">
  <div className="mt-[50px]">
    <Link to="/">
      <img src="logo-black.png" alt="logo" />
    </Link>
  </div>
  <div className="flex items-center cursor-pointer mt-[46px]">
    <img src="avatar-mini.svg" alt="avatar" />
    <div className="mx-3">
      <p>Сергей</p>
    </div>
    <img src="arrow-down.svg" alt="arrow-down" />
  </div>
</div>
)
}