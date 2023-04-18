

const Card = ({icon, name, count, todayCount, style, arrow}) => {
  return (
      <div className={`${style} bg-LightGrayishBlueCardBG w-[100%] md:w-[200px] h-[200px] border-t-4 rounded-t-[4px]`}>
          <div className="flex items-center">
              <img src={icon} alt="icon"/>
              <p>{name}</p>
          </div>
          <div>
              <h1>{count}</h1>
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