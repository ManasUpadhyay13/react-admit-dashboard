import './featuredInfo.css'

import React from 'react'
import { ArrowDownward, ArrowUpward } from '@material-ui/icons'

export const FeaturedInfo = () => {
    return (
        <div className='featured'>
            <div className="featuredItem">
                <span className="featuredTitle">Revanue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">Rs . 55,339</span>
                    <span className="featuredMoneyRate"> - 5,999 <ArrowDownward className='featuredIcon negative' /></span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>

            <div className="featuredItem">
                <span className="featuredTitle">Sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">Rs . 4,339</span>
                    <span className="featuredMoneyRate"> - 1,999 <ArrowDownward className='featuredIcon negative' /></span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>

            <div className="featuredItem">
                <span className="featuredTitle">Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">Rs . 339</span>
                    <span className="featuredMoneyRate"> + 99 <ArrowUpward className='featuredIcon' /></span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
        </div>
    )
}
