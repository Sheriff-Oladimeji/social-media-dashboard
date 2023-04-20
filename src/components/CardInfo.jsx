

const CardInfo = ({action, icon, count, value, arrow}) => {
  return (
      <div className="w-[100%] bg-LightGrayishBlueCardBG">
          <div>
              <p>{action}</p>
              <img src={icon} alt="logo" />
          </div>
          <div>
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