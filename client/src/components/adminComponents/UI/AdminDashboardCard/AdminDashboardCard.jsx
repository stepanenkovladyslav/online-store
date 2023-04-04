import React from 'react'
import style from './AdminDashboardCard.module.css'
import { NavLink } from 'react-router-dom'

const AdminDashboardCard = (props) => {
  return (
    <div className={style.card}>
    <div className={style.cardSummary}>
        <h4 className={style.cardHeading}>{props.info.title}</h4>
        <h4 className={style.change}>{props.info.change}</h4>
    </div>
    <div className={style.cardValues}>
        {props.info.icon}
        <h5 className='value'>{props.info.cardValue}</h5>
    </div>
    <NavLink to={props.info.linkPath} className={style.viewMore}>View more...</NavLink>
</div>
  )
}

export default AdminDashboardCard