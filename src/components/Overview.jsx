import CardInfo from "./CardInfo"
import {
    instagram, facebook, up, down,} from "../assets"
const Overview = () => {
  return (
      <aside className="font-Inter mt-6">
          <h1 className="text-4xl text-DarkGrayishBlueText font-bold">Overview - Today</h1>
          <div className="grid md:grid-cols-4 gap-8">
             <CardInfo  action={'Page Views'} icon={facebook} count="87" arrow={up} value={3}/> 
             <CardInfo  action={'Page Views'} icon={facebook} count="87" arrow={up} value={3}/> 
             <CardInfo  action={'Page Views'} icon={facebook} count="87" arrow={up} value={3}/> 
             <CardInfo  action={'Page Views'} icon={facebook} count="87" arrow={up} value={3}/> 
             <CardInfo  action={'Page Views'} icon={facebook} count="87" arrow={up} value={3}/> 
             <CardInfo  action={'Page Views'} icon={facebook} count="87" arrow={up} value={3}/> 
             <CardInfo  action={'Page Views'} icon={facebook} count="87" arrow={up} value={3}/> 
             <CardInfo  action={'Page Views'} icon={facebook} count="87" arrow={up} value={3}/> 
          </div>
         
    </aside>
  )
}

export default Overview