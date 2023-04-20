

const CardInfo = ({action, icon, count, value, arrow}) => {
  return (
      <div className="w-[100%] bg-LightGrayishBlueCardBG">
          <div>
              <p>{action}</p>
              <img src={icon} alt="logo" />
          </div>
          <div>
              <h3>{count}</h3>
              <p>{arrow}{value}%</p>
          </div>
    </div>
  )
}

export default CardInfo