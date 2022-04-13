import './widgetBig.css'

import React from 'react'

export default function WidgetBig() {

  const Button = ({ type }) => {
    return <button className={'widgetBigButton ' + type}>{type}</button>
  }
  return (
    <div className='widgetBig'>
      <h3 className="widgetBigTitle">Latest Transactions</h3>
      <table className="widgetBigTable">
        <tr className="widgetBigTr">
          <th className="widgetBigTh">Customer</th>
          <th className="widgetBigTh">Date</th>
          <th className="widgetBigTh">Amount</th>
          <th className="widgetBigTh">Status</th>
        </tr>

        <tr className="widgetBigTr">
          <td className="widgetBigUser">
            <img src="https://www.lovesove.com/wp-content/uploads/2021/06/Boy-Attitude-Dp-Joker-Lovesove.jpg" alt="user" className="widgetBigImage" />
            <span className="widgetBigName">Suson Carol</span>
          </td>

          <td className="widgetBigDate">2 Jun 20201</td>
          <td className="widgetBigAmount">Rs. 299</td>
          <td className="widgetBigStatus"> 
            <Button type="Approved" />
          </td>
        </tr>

        <tr className="widgetBigTr">
          <td className="widgetBigUser">
            <img src="https://www.lovesove.com/wp-content/uploads/2021/06/Boy-Attitude-Dp-Joker-Lovesove.jpg" alt="user" className="widgetBigImage" />
            <span className="widgetBigName">Suson Carol</span>
          </td>

          <td className="widgetBigDate">2 Jun 20201</td>
          <td className="widgetBigAmount">Rs. 299</td>
          <td className="widgetBigStatus">
            <Button type="Declined" />
          </td>
        </tr>

        <tr className="widgetBigTr">
          <td className="widgetBigUser">
            <img src="https://www.lovesove.com/wp-content/uploads/2021/06/Boy-Attitude-Dp-Joker-Lovesove.jpg" alt="user" className="widgetBigImage" />
            <span className="widgetBigName">Suson Carol</span>
          </td>

          <td className="widgetBigDate">2 Jun 20201</td>
          <td className="widgetBigAmount">Rs. 299</td>
          <td className="widgetBigStatus">
            <Button type="Pending" />
          </td>
        </tr>

        <tr className="widgetBigTr">
          <td className="widgetBigUser">
            <img src="https://www.lovesove.com/wp-content/uploads/2021/06/Boy-Attitude-Dp-Joker-Lovesove.jpg" alt="user" className="widgetBigImage" />
            <span className="widgetBigName">Suson Carol</span>
          </td>

          <td className="widgetBigDate">2 Jun 20201</td>
          <td className="widgetBigAmount">Rs. 299</td>
          <td className="widgetBigStatus">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  )
}
