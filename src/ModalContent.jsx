import React, { useState, useContext } from 'react';
import { Component } from 'react/cjs/react.production.min';
import {DestinationContext} from './Context/DestinationContext';
 
  const ModalContent = (props) => {
    const {destination,setDestination} = useContext(DestinationContext);
    
    const [destinationName, setDestinationName] = useState('');

    const changeDestinationName = (e) =>{
        setDestinationName(e.target.value);
    }

    const [adresse, setAdresse] = useState('');

    const changeAdresse = (e) =>{
        setAdresse(e.target.value);
    }
    
    const [photo, setPhoto] = useState([]);

    const changePhoto= (e) =>{
        setPhoto(e.target.value);
    }

    const [nbHabitants, setNbHabitants] = useState('');

    const changeNBHabitants = (e) =>{
        setNbHabitants(e.target.value);
    }
    const [nbHotels, setNbHotels] = useState('');

    const changeNbHotels = (e) =>{
        setNbHotels(e.target.value);
    }

    const [revenuMoyenne, setRevenuMoyenne] = useState('');

    const changeRevenuMoyenne = (e) =>{
        setRevenuMoyenne(e.target.value);
    }

    const [superficie, setSuperficie] = useState('');

    const changeSuperficie = (e) =>{
        setSuperficie(e.target.value);
    }

    const confirmation = (e) =>{
        e.preventDefault();
        console.log('yes');

        const destinationObject = {
            "destinationName" : destinationName,
            "adresse" : adresse,
            "photo" : photo,
            "nbHabitants" : nbHabitants,
            "nbHotels" : nbHotels,
            "revenuMoyenne" : revenuMoyenne,
            "superficie" : superficie
        }
        
        destination.push(destinationObject);
        setDestination(destination);
        localStorage.setItem("destination", JSON.stringify(destination));
        props.setOpenModal(false);
    }

    const cancel = (e) => {
        e.preventDefault();
        props.setOpenModal(false);
        console.log('c\'est bon');
    }
       
    return (
        <div className='Modal'>
            <div className='formulaire'>
                <h1 className='titre'>Ajouter une nouvelle formulaire</h1>
            <form action="/page-traitement-donnees" method="post" id="myForm">
                <div>
                    <label><input  onChange ={(e)=>changeDestinationName(e)}  type="text" id="nom" name="nom" placeholder="Nom de la destination" required/></label>
                </div>
                <div>
                    <label><input onChange ={(e)=>changeAdresse(e)}  type="text" id="adresse" name="adresse" placeholder="Adresse" required/></label>
                </div>
                <div>
                    <label><input  onChange = {(e)=>changePhoto(e)} type="url" id="url" name="url" placeholder="Lien de l'image" required/></label>
                </div>
                <ul className='informations'>
                    <li>
                        <label><input  onChange ={(e)=>changeNBHabitants(e)} type="text" id="habitants" name="habitants" placeholder=" Nb Habitants" required/></label>
                    </li>
                    <li>
                        <input onChange ={(e)=>changeNbHotels(e)}  type="text" id="hôtels" name="hôtels" placeholder=" Nb Hôtels" required/>
                    </li>
                    <li>
                        <label><input onChange ={(e)=>changeRevenuMoyenne(e)}  type="text" id="revenu" name="revenu" placeholder="Revenu Moy" required/></label>
                    </li>
                    <li>
                        <label><input onChange ={(e)=>changeSuperficie(e)}  type="text" id="surperficie" name="surperficie" placeholder="Surperficie" required/></label>
                    </li>
                </ul>
                <div className='activate'>
                    <div>
                        <label className="switch">
                            <input type="checkbox"/>
                            <span className="slider round"></span>
                        </label>
                    </div>
                    <div>Activer</div>
                </div>

            <div className='confirmation'>
                <div>
                    <button onClick={(e) =>{cancel(e)} }>CANCEL</button>
                </div>
                <div>
                    <button  onClick={(e) => {confirmation(e)}} className='confirm'>CONFIRM</button>
                </div>
            </div>
            </form>
            </div>
        </div>           
    );
}
export default ModalContent;