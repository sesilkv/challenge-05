import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Accordion from 'react-bootstrap/Accordion'
import 'bootstrap/dist/css/bootstrap.min.css'
import './car.css'
import PanelDisabled from '../../Components/PanelDisabled/PanelDisabled'
import { Link } from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import cardSlice from '../../Store/cardSlice'

import IconPeople from "../../Assets/fi_users.svg"
import IconGear from "../../Assets/fi_settings.svg"
import IconCalendar from "../../Assets/fi_calendar.svg"
import Arrow from "../../Assets/fi_arrow-left.svg"

const Car = (props) => {

    const param = useParams()
    const [car, setCar] = useState(null)

    const dispatch = useDispatch()
    const carCard = useSelector((store) => store.cardSlice.carCard)

    useEffect(() => {
        fetch(`https://625d73e74c36c753577540cb.mockapi.io/fejs2/api/c5-cars/${param.id}`)
        .then( response => {
            return response.json()
        })
        .then( data => {
            setCar({...data})
        })
    },[])

    return (
        <div>
            { car !== null &&
                <>
                <div className='upper-div-container'>
                    <Link to="/" className='button-back'>
                        <div className='arrow-image-container'>
                            <img src={Arrow} className='arrow-image'/>
                        </div>
                        <div className='arrow-text'>
                            Kembali
                        </div>
                    </Link>
                </div>
                <PanelDisabled/>
                    <div className='details-container-main'>
                        <div className='details-container'>
                            <div className='details-container-left'>
                                <div className='details-container-left-upper'>
                                    <p style={{fontSize:"16px", fontWeight:"600"}}>Tentang Paket</p>
                                    <p>Include</p>

                                    <ul className="text-muted">
                                        <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
                                        <li>Sudah termasuk bensin selama 12 jam</li>
                                        <li>Sudah termasuk Tiket Wisata</li>
                                        <li>Sudah termasuk pajak</li>
                                    </ul>

                                    <p>Exlude:</p>
                                    <ul className="text-muted">
                                        <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                        <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                        <li>Tidak termasuk akomodasi penginapan</li>
                                    </ul>
                                </div>
                                <div>
                                    <Accordion defaultActiveKey="0">
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>Refund, Reschedule, Overtime</Accordion.Header>
                                            <Accordion.Body>
                                                <ul className="text-muted">
                                                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                                    <li> Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                                    <li> Tidak termasuk akomodasi penginapan</li>
                                                    <li> Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                                    <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                                    <li> Tidak termasuk akomodasi penginapan</li>
                                                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                                    <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                                    <li> Tidak termasuk akomodasi penginapan</li>
                                                </ul>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </div>
                            </div>
                            <div className='details-container-right'>
                                <div className='details-container-right-inner'>
                                    <div className='car-image-container'>
                                        <img src={car.image} className='car-image'/>
                                    </div>
                                    <div className='car-name'>
                                        {car.name}
                                    </div>
                                    <div className='car-details-container'>
                                        <div className='car-detail-icons'>
                                            <div className='car-detail-icon'>
                                                <img src={IconPeople} className='car-icon'/>
                                            </div>
                                            <div className='car-book-text'>
                                                {car.passenger}
                                            </div>
                                        </div>
                                        <div className='car-detail-icons'>
                                            <div className='car-detail-icon'>
                                                <img src={IconGear} className='car-icon'/>
                                            </div>
                                            <div className='car-book-text'>
                                                {car.transmission}
                                            </div>
                                        </div>
                                        <div className='car-detail-icons'>
                                            <div className='car-detail-icon'>
                                                <img src={IconCalendar} className='car-icon'/>
                                            </div>
                                            <div className='car-book-text'>
                                                {car.year}
                                            </div>
                                        </div>
                                    </div>
                                    <div className='car-book-price'>
                                        <div className='car-total'>
                                            Total
                                        </div>
                                        <div className='car-price-text'>
                                            Rp. {car.price}
                                        </div>
                                    </div>
                                    <button onClick={() => dispatch(cardSlice.actions.addCar({id: car.id}))} className='btn button-right-details-container'>
                                        <div type="submit" className='button-right-details'>
                                            {carCard === car.id ? "Lanjutkan Pembayaran" : "Pilih Mobil"}
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='button-center-container-outer'>
                        <button onClick={() => dispatch(cardSlice.actions.addCar({id: car.id}))} className='btn button-center-container'>
                            <div type="submit" className='button-center'>
                                {carCard === car.id ? "Lanjutkan Pembayaran" : "Pilih Mobil"}
                            </div>
                        </button>
                    </div>
                </>
            }
        </div>
    )
}

export default Car