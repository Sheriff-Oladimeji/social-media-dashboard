import { up } from "../assets"


const CardInfo = ({action, icon, count, value, arrow}) => {
  return (
    <div className="w-[100%] bg-VeryPaleBlueTopBG py-5 px-3 font-Inter rounded-[6px] dark:bg-VeryDarkBlueTopBG dark:hover:bg-DarkDesaturatedBlueCardBG  hover:bg-LightGrayishBlueCardBG cursor-pointer">
      <div className="flex justify-between items-center">
        <p className="font-semibold text-DarkGrayishBlueText  dark:text-DesaturatedBlueText">
          {action}
        </p>
        <img src={icon} alt="logo" />
      </div>
      <div className="flex justify-between items-center mt-6">
        <h3 className="font-bold text-4xl text-VeryDarkBlueText dark:text-White">
          {count}
        </h3>
        <div
          className={`flex items-center ${
            arrow === up ? "text-LimeGreen" : "text-BrightRed"
          } font-semibold`}
        >
          <img src={arrow} alt="" />
          <p>{value}%</p>
        </div>
      </div>
    </div>
  );
}

export default CardInfo