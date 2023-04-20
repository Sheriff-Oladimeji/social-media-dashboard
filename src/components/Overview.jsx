import CardInfo from "./CardInfo"
import {
    instagram, facebook, up, down,} from "../assets"
const Overview = () => {
  return (
      <aside>
          <h1>Overview - Today</h1>
          <div>
             <CardInfo  action={'Page Views'} icon={facebook} count="87" arrow={up} value={3}/> 
          </div>
    </aside>
  )
}

export default Overview