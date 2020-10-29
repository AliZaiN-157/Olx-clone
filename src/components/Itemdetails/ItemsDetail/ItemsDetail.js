import React from 'react'
import './ItemDetail.css'
import Bike_img from '../../../Images/Bike.jpg'
import ShareIcon from '@material-ui/icons/Share';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { Avatar, IconButton } from '@material-ui/core';
import PhoneIcon from '@material-ui/icons/Phone';


function ItemsDetail() {

    return (
        <div className="Items__details">
            <div className="Items__image">
                <img src={Bike_img} />
            </div>
            <div className="Items__detail">
                <h1>
                    Details
                </h1>
                <div className="detail">
                    <h1>
                        Rs 35000 <br />
                        <span className="detail__title">Unique Bike</span>

                    </h1>
                    <div className="detail__icons">
                        <IconButton>
                            <ShareIcon />
                        </IconButton>
                        <IconButton>
                            <FavoriteBorderIcon />
                        </IconButton>
                    </div>
                </div>
                <span className="detail__location">location</span>
                <span className="detail__timestamp">timestamp</span>
            </div>
            <div className="Items__owner">
                <div className="Owners__details">
                    <div className="Owners__identity">
                        <Avatar />
                        <h2>Owners Name</h2>
                    </div>
                    <div className="Owners_num">
                        <span> <PhoneIcon /> 03** *** ****</span>
                    </div>
                </div>
            </div>
            <div className="Items__desc">
                <h1>
                    Description
                </h1>
                <p>
                    description
                </p>
            </div>

        </div>
    )
}

export default ItemsDetail
