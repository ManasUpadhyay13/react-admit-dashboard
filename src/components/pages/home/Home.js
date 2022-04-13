import './home.css'
import React from 'react'
import { FeaturedInfo } from '../featured Info/FeaturedInfo'
import Chart from '../../chart/Chart'
import { userData } from '../../../DummyData'
import WidgetBig from '../../Widget big/WidgetBig'
import WidgetSmall from '../../Widget Small/WidgetSmall'

export default function Home() {
  return (
    <div className='home'>
      <FeaturedInfo />
      <Chart data={userData} title="User Analytics" grid dataKey="Active User" />
      <div className="homeWidgets">
        <WidgetSmall />
        <WidgetBig />
      </div>
    </div>
  )
}
