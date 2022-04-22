import React from 'react'
import CarDetail from './CarDetail'
import CarImage from './CarImage'
import './result.css'

import IconPeople from "../Assets/fi_users.svg"
import IconGear from "../Assets/fi_settings.svg"
import IconCalendar from "../Assets/fi_calendar.svg"

const CarCard = (props) => {
  return (
    <div className='car_card'>
      <div className='car-image-container'>
        <img src={props.car.image} className='car-image'/>
      </div>
      <div className='car-detail-container'>
        <div className='car-name-type'>
          {props.car.name}
        </div>
        <div className='car-price'>
          Rp. {props.car.price} / hari
        </div>
        <div className='car-description'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
        <div className='car-detail-icons'>
          <div className='car-detail-icon'>
            <img src={IconPeople} className='car-icon'/>
          </div>
          <div className='car-detail-text'>
            {props.car.passenger}
          </div>
        </div>
        <div className='car-detail-icons'>
          <div className='car-detail-icon'>
            <img src={IconGear} className='car-icon'/>
          </div>
          <div className='car-detail-text'>
            {props.car.transmission}
          </div>
        </div>
        <div className='car-detail-icons'>
          <div className='car-detail-icon'>
            <img src={IconCalendar} className='car-icon'/>
          </div>
          <div className='car-detail-text'>
            {props.car.year}
          </div>
        </div>
        <button className='button-card-container'>
          <div type="submit" className='button-card'>
              Pilih Mobil
          </div>
        </button>
      </div>
    </div>
  )
}

export default CarCard