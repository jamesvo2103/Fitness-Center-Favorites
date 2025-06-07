import React from 'react'
import GymCard from './GymCard'

const gyms = [
  {
    name: "Planet Fitness",
    type: "General Fitness",
    locations: 2607,
    states: 52,
    cities: 1706,
    website: "https://www.planetfitness.com",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Planet_Fitness_logo.svg/1200px-Planet_Fitness_logo.svg.png"
  },
  {
    name: "Anytime Fitness",
    type: "General Fitness",
    locations: 2328,
    states: 50,
    cities: 1742,
    website: "https://www.anytimefitness.com",
    image: "https://www.visitbrookfield.com/wp-content/uploads/2023/11/Anytime-Fitness.png"
  },
  {
    name: "Orangetheory Fitness",
    type: "HIIT",
    locations: 1297,
    states: 51,
    cities: 924,
    website: "https://www.orangetheory.com",
    image: "https://photos.prnewswire.com/prnfull/20140717/128064"
  },
  {
    name: "F45 Training",
    type: "Functional Training",
    locations: 780,
    states: 44,
    cities: 527,
    website: "https://www.f45training.com",
    image: "https://nevadanewsgroup.media.clients.ellingtoncms.com/img/photos/2022/02/28/273712660_487068346142764_4316062600295835286_n_t670.jpeg?b3f6a5d7692ccc373d56e40cf708e3fa67d9af9d"
  },
  {
    name: "LA Fitness",
    type: "General Fitness",
    locations: 639,
    states: 25,
    cities: 442,
    website: "https://www.lafitness.com",
    image: "https://www.lee-associates.com/wp-content/uploads/2025/04/LA_Fitness_logo.png"
  },
  {
    name: "Snap Fitness",
    type: "General Fitness",
    locations: 491,
    states: 46,
    cities: 441,
    website: "https://www.snapfitness.com",
    image: "https://images.squarespace-cdn.com/content/v1/5e782323ec094272eee394d7/1597998444459-CDXAWIW6STOIIRIQG0SD/New-SnapFitness_logo_CMYK-01.png?format=2500w"
  },
  {
    name: "MOSSA",
    type: "Group Fitness",
    locations: 427,
    states: 42,
    cities: 332,
    website: "https://www.mossa.net",
    image: "https://mossa.net/wp-content/uploads/2020/09/mossa-logo.png"
  },
  {
    name: "Stretch Zone",
    type: "Stretching",
    locations: 347,
    states: 41,
    cities: 297,
    website: "https://www.stretchzone.com",
    image: "https://www.stretchzone.com/wp-content/uploads/2023/05/stretch-zone-logo-fullcolor-01.png"
  },
  {
    name: "24 Hour Fitness",
    type: "General Fitness",
    locations: 270,
    states: 11,
    cities: 192,
    website: "https://www.24hourfitness.com",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/24_Hour_Fitness_logo.svg/1280px-24_Hour_Fitness_logo.svg.png"
  },
  {
    name: "Life Time Fitness",
    type: "General Fitness",
    locations: 222,
    states: 32,
    cities: 167,
    website: "https://www.lifetime.life",
    image: "https://arizonbuildingsystems.com/wp-content/uploads/2016/08/Lifetime-Fitness-LOGO.png"
  }
]

const GymGrid = () => (
  <div className="gym-grid">
    {gyms.map((gym, idx) => (
      <GymCard key={idx} gym={gym} />
    ))}
  </div>
)

export default GymGrid