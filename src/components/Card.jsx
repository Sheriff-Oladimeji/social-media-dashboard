

const Card = ({icon, name, count, todayCount, style, arrow}) => {
  return (
      <div className={`${style} bg-LightGrayishBlueCardBG w-[200px]`}>
          <div className="">
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