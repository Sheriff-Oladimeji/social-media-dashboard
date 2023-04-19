

const Card = ({icon, name, count, todayCount, style, arrow}) => {
  return (
      <div className={`w-[100%] bg-LightGrayishBlueCardBG dark:bg-DarkDesaturatedBlueCardBG border-t-4 rounded-[4px] ${style}`}>
          <div className="flex justify-center space-x-2 items-center mt-4">
              <img src={icon} alt="icon"/>
              <p>{name}</p>
          </div>
          <div className="flex justify-center flex-col items-center">
              <h1 className="font-bold text-5xl">{count}</h1>
              <p>FOLLOWERS</p>
          </div>
          <div>
              <img src={arrow} alt="" />
              <p>{todayCount} Today</p>
          </div>
    </div>
  )
}

export default Card