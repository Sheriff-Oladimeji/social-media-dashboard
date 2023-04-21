import Card from "./Card"
import {
    down, up, twitter, youtube, instagram, facebook } from "../assets"
const Dashboard = () => {
  return (
      <div className="grid md:grid-cols-4 gap-8 w-[90%] md:w-[80%] mx-auto  font-Inter mt-8">
          <Card icon={facebook} style={"border-Facebook"} name={'@nathanf'} count={'1987'} todayCount={12} arrow={up} />
      <Card icon={twitter}  style={"border-Twitter"}  name={'@nathanf'} count={1044} todayCount={99} arrow={up} />
          <Card icon={instagram} style={"border-Instagram"}  name={'@realnathanf'} count={'11k'} todayCount={1099} arrow={up} />
      <Card icon={youtube} style={"border-YouTube"} 
         name={'Nathan F.'} count={'8239'} todayCount={144} arrow={down} 
      />
    </div>
  )
}

export default Dashboard