import React from 'react';
import { Component } from 'react/cjs/react.production.min';

const ModalContent = () => {

       
    return (
        <div className='Modal'>
            <div className='formulaire'>
                <h1 className='titre'>Ajouter une nouvelle formulaire</h1>
            <form action="/page-traitement-donnees" method="post" id="myForm">
                <div>
                    <label><input type="text" id="nom" name="nom" placeholder="Nom de la destination" required/></label>
                </div>
                <div>
                    <label><input type="text" id="adresse" name="adresse" placeholder="Adresse" required/></label>
                </div>
                <div>
                    <label><input type="url" id="url" name="url" placeholder="Lien de l'image" required/></label>
                </div>
                
                <ul className='informations'>
                    <li>
                        <label><input type="text" id="habitants" name="habitants" placeholder=" Nb Habitants" required/></label>
                    </li>
                    <li>
                        <input type="text" id="hôtels" name="hôtels" placeholder=" Nb Hôtels" required/>
                    </li>
                    <li>
                        <label><input type="text" id="revenu" name="revenu" placeholder="Revenu Moy" required/></label>
                    </li>
                    <li>
                        <label><input type="text" id="surperficie" name="surperficie" placeholder="Surperficie" required/></label>
                    </li>
                </ul>

                <div className='activate'>
                    <div>
                        <label class="switch">
                            <input type="checkbox"/>
                            <span class="slider round"></span>
                        </label>
                    </div>
                    <div>Activer</div>
                </div>

            <div className='confirmation'>
                <div>
                    <button>CANCEL</button>
                </div>
                <div>
                    <button type='submit' className='confirm'>CONFIRM</button>
                </div>
            </div>

            </form>
            </div>
        </div>
                
    );
}
export default ModalContent;