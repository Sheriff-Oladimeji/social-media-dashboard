

const CardInfo = ({action, icon, count, value, arrow}) => {
  return (
      <div>
          <div>
              <p>{action}</p>
              <img src={icon} alt="logo" />
          </div>
          <div>
              <h3>{count}</h3>
              <p>{arrow}{valuelue}%</p>
          </div>
    </div>
  )
}

export default CardInfo