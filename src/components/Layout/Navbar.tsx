import { Indicator } from "../Indicator/Indicator";
import Logo from "./Logo";
import KeyboardSVG from "./../../assets/keyboard.svg?react"
import AccountSVG from "./../../assets/account.svg?react"
import SettingSVG from "./../../assets/settings.svg?react"

export function Navbar() {
  return (
    <div className="w-full h-20 flex justify-between">
      <div className="h-full flex items-center">
        <Logo />
        <Indicator path="/" Icon={KeyboardSVG} />
      </div>
      <div className="h-full flex items-center">
        <Indicator path="/settings" Icon={SettingSVG} />
        <Indicator path="/account" Icon={AccountSVG} />
      </div>
    </div>
  );
}

export default Navbar;
