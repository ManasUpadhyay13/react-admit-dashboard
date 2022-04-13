import './topbar.css'
import React from 'react'
import { Language, NotificationsNone, Settings } from '@material-ui/icons'
// import avatar from '../../images/avatar.jpeg'

function TopBar() {
  return (
    <div className='topbar'> 
        <div className="topbarWrapper">
            <div className="topLeft">
                <span className='logo'>ManasAdmin</span>
            </div>
            <div className="topRight">
                <div className="topbarIconContainer">
                    <NotificationsNone/>   
                    <span className="topIconBag">2</span> 
                </div>

                <div className="topbarIconContainer">
                    <Language/>   
                    <span className="topIconBag">2</span> 
                </div>

                <div className="topbarIconContainer">
                    <Settings/>   
                </div>

                {/* <img src={} alt="avater" className="topAvatar" /> */}
            </div>
        </div>    
    </div>
  )
}

export default TopBar