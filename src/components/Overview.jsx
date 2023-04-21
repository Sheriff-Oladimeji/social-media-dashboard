import CardInfo from "./CardInfo"
import {
    instagram, facebook, up, down, twitter, youtube,} from "../assets"
const Overview = () => {
  return (
      <aside className="mt-6 w-[90%] md:w-[70%] mx-auto  font-Inter pb-8">
          <h1 className="text-3xl  text-DarkGrayishBlueText font-bold mb-4">Overview - Today</h1>
          <div className="grid md:grid-cols-4 gap-8">
             <CardInfo  action={'Page Views'} icon={facebook} count="87" arrow={up} value={3}/> 
             <CardInfo  action={'Likes'} icon={facebook} count="52" arrow={down} value={2}/> 
             <CardInfo  action={'Likes'} icon={instagram} count="5462" arrow={up} value={2257}/> 
             <CardInfo  action={'Profile Views'} icon={instagram} count="52K" arrow={up} value={1375}/> 
             <CardInfo  action={'Retweets'} icon={twitter} count="117" arrow={up} value={303}/> 
             <CardInfo  action={'Likes'} icon={twitter} count="507" arrow={up} value={553}/> 
             <CardInfo  action={'Likes'} icon={youtube} count="107" arrow={down} value={19}/> 
             <CardInfo  action={'Page Views'} icon={youtube} count="1407" arrow={down} value={12}/> 
          </div>
         
    </aside>
  )
}

export default Overview