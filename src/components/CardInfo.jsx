

const CardInfo = ({action, icon, count, value, arrow}) => {
  return (
      <div className="w-[100%] bg-LightGrayishBlueCardBG py-5 px-3 font-Inter">
          <div className="flex justify-between items-center">
              <p className="font-semibold text-DarkGrayishBlueText ">{action}</p>
              <img src={icon} alt="logo" />
          </div>
          <div className="flex justify-between items-center">
              <h3>{count}</h3>
              <div>
                  <img src={arrow} alt="" />
                <p>{value}%</p>  
              </div>
              
          </div>
    </div>
  )
}

export default CardInfo