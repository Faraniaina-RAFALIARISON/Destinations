import React, {useEffect, useState,useContext}  from 'react';
import ModalContent from './ModalContent';
import './App.css';
import { Component } from 'react/cjs/react.production.min';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {DestinationContext} from './Context/DestinationContext';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '700px',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function Listing () {
    const {destination,setDestination} = useContext(DestinationContext);
    const [openModal, setOpenModal] = useState(false);

    const  handleAdd = () => {
        setOpenModal(true);
    }

    const handleClose = () => {
        setOpenModal(false);
    }

    const setDestinationFunction = (destination) => {
        setDestination(destination);
    }

    useEffect(() => {
        if(localStorage.getItem('destination')!= null){
            setDestination(JSON.parse(localStorage.getItem('destination')));
        }
    },[])
 
    useEffect(() => {console.log(destination)})
    return (
        <div>
             <Modal
                open={openModal}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >
                <Box sx={style}>
                    <ModalContent setOpenModal = {setOpenModal}/>
                </Box>
            </Modal>
        <div className='Listing' >
                <ul className='menu'>
                    <li>
                        <h1 className='Destinations'>Destinations</h1>
                    </li>
                    <li>
                        <button  className='addModal' id='ajouter' onClick={() => handleAdd()}>
                            <b>+  AJOUTER</b> 
                        </button>
                    </li>
                </ul>

            <ul className='listing'>
            {
            destination.map( destination => (
                <li className='case'>
                <div>
                    <img src={destination.photo} className='image'  alt='Copenhagen'/>
                    <div className='lieu'>
                        <div>
                            <div className='capital'>{destination.destinationName}</div>
                            <div>{destination.adresse}</div>
                        </div>
                    <div>
                        <label className="switch">
                            <input type="checkbox"/>
                            <span className="slider round"></span>
                        </label>
                    </div>
                    </div>
                    <div className='ligne-droite'><hr/></div>
                    <div>
                        <div className='row'>
                            <div>{destination.nbHabitants}</div>
                            <div>{destination.nbHotels}</div>
                            <div>{destination.revenuMoyenne}</div>
                            <div>{destination.superficie}</div>
                        </div>
                        <div className='row'>
                            <div>Habitants</div> 
                            <div>Hôtels</div>
                            <div>Revenu moy</div>
                            <div>km<sup>2</sup></div>
                        </div>
                    </div>
                </div>
                </li>
            ))
            }

            </ul>
        </div>
    </div>
    
    );
}

export default Listing;