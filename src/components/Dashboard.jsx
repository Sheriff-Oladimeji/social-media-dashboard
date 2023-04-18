import Card from "./Card"
import {
    down, up, twitter, youtube, instagram, facebook } from "../assets"
const Dashboard = () => {
  return (
      <div className="flex flex-col md:flex-row justify-between mt-4 space-y-6">
          <Card icon={facebook} style={"border-Facebook"} />
      <Card icon={twitter}  style={"border-Twitter"} />
          <Card icon={instagram} style={"border-Instagram"} />
          <Card icon={youtube} style={"border-YouTube"} />
    </div>
  )
}

export default Dashboard