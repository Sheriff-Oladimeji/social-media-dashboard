import { up } from "../assets"


const CardInfo = ({action, icon, count, value, arrow}) => {
  return (
      <div className="w-[100%] bg-LightGrayishBlueCardBG py-5 px-3 font-Inter rounded-[6px]">
          <div className="flex justify-between items-center">
              <p className="font-semibold text-DarkGrayishBlueText ">{action}</p>
              <img src={icon} alt="logo" />
          </div>
          <div className="flex justify-between items-center mt-6">
              <h3 className="font-bold text-4xl text-VeryDarkBlueText">{count}</h3>
              <div className={`flex items-center ${arrow === up?"text-LimeGreen": "text-BrightRed"} font-semibold`}>
                  <img src={arrow} alt="" />
                <p>{value}%</p>  
              </div>
              
          </div>
    </div>
  )
}

export default CardInfo