import { up } from "../assets"


const Card = ({icon, name, count, todayCount, style, arrow}) => {
  return (
      <div className={`w-[100%] bg-LightGrayishBlueCardBG dark:bg-DarkDesaturatedBlueCardBG border-t-4 rounded-[4px] ${style}`}>
          <div className="flex justify-center space-x-2 items-center mt-4">
              <img src={icon} alt="icon"/>
              <p>{name}</p>
          </div>
          <div className="flex justify-center flex-col items-center my-4">
              <h1 className="font-bold text-5xl text-VeryDarkBlueText">{count}</h1>
              <p className="font-normal text-DesaturatedBlueText mt-1">FOLLOWERS</p>
          </div>
          <div className={`flex justify-center items-center ${arrow === up?"text-LimeGreen":"text-BrightRed"} space-x-2 mb-4`}>
              <img src={arrow} alt="icon" />
              <p >{todayCount}Today</p>
          </div>
    </div>
  )
}

export default Card