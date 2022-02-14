import React  from 'react';
import Modal from './Modal';
import './App.css';

class Listing extends React.Component {
 state = {
     visible: false
 }
 montre = () => {
     this.setState({visible: true})

 }
 cache = () => {
     this.setState({visible: false})
 }
    render(){
    return (
        <div className='Listing'>
                <ul className='menu'>
                    <li>
                        <h1 className='Destinations'>Destinations</h1>
                    </li>
                    <li>
                        <button onClick={this.montre} className='Modal' id='ajouter'>
                            <b>+  AJOUTER</b> 
                        </button>
                        <Modal 
                        visible={this.state.visible}
                        cache={this.cache}
                        />
                    </li>
                </ul>

            <ul className='listing'>
                <li className='case'>
                    <div>
                        <img src={require('./image/Copenhagen.png')} className='image'  alt='Copenhagen'/>
                        <div className='lieu'>
                            <div>
                                <div className='capital'>Copenhagen</div>
                                <div>Radhuspladsen 1, 1550 Kobenhavn, Denmark</div>
                            </div>
                        <div>
                                <label class="switch">
                                    <input type="checkbox"/>
                                    <span class="slider round"></span>
                                </label>
                        </div>
                        </div>
                        <div className='ligne-droite'><hr/></div>
                        <div>
                            <div className='row'>
                                <div>3.4 M</div>
                                <div>5 000</div>
                                <div>70 000 €</div>
                                <div>88.25</div>
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

                <li className='case'>
                    <div>
                        <img src={require('./image/Tehran.png')} className='image' alt='Tehran'/>
                        <div className='lieu'>
                            <div>
                                <div className='capital'>Tehran</div>
                                <div>Tehran, Azadi Square, Iran</div>
                            </div>
                        <div>
                                <label class="switch">
                                    <input type="checkbox"/>
                                    <span class="slider round"></span>
                                </label>
                        </div>
                        </div>
                        <div className='ligne-droite'><hr/></div>
                        <div>
                            <div className='row'>
                                <div>8.6 M</div>
                                <div>400</div>
                                <div>30 000 €</div>
                                <div>730</div>
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

                <li className='case'>
                    <div>
                        <img src={require('./image/Paris.png')} className='image' alt='Paris'/>
                        <div className='lieu'>
                            <div>
                                <div className='capital'>Paris</div>
                                <div>Pl. de l'H tel de Ville, 75004 Paris</div>
                            </div>
                        <div>
                                <label class="switch">
                                    <input type="checkbox"/>
                                    <span class="slider round"></span>
                                </label>
                        </div>
                        </div>
                        <div className='ligne-droite'><hr/></div>
                        <div>
                            <div className='row'>
                                <div>2.1 M</div>
                                <div>7 500</div>
                                <div>50 000 €</div>
                                <div>105.4</div>
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

                <li className='case'>
                    <div>
                        <img src={require('./image/London.png')} className='image' alt='London'/>
                        <div className='lieu'>
                            <div>
                                <div className='capital'>London</div>
                                <div>London SW1A 0AA, United Kingdom</div>
                            </div>
                        <div>
                                <label class="switch">
                                    <input type="checkbox"/>
                                    <span class="slider round"></span>
                                </label>
                        </div>
                        </div>
                        <div className='ligne-droite'><hr/></div>
                        <div>
                            <div className='row'>
                                <div>8.98 M</div>
                                <div>10 000</div>
                                <div>90 000 €</div>
                                <div>1 572</div>
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

                <li className='case'>
                    <div>
                        <img src={require('./image/Tokyo.png')} className='image' alt='Tokyo' />
                        <div className='lieu'>
                            <div>
                                <div className='capital'>Tokyo</div>
                                <div>4 Chome-2-8 Shibakoen, Minato City, Tokyo 105-0011, Japan</div>
                            </div>
                        <div>
                                <label class="switch">
                                    <input type="checkbox"/>
                                    <span class="slider round"></span>
                                </label>
                        </div>
                        </div>
                        <div className='ligne-droite'><hr/></div>
                        <div>
                            <div className='row'>
                                <div>13.9 M</div>
                                <div>7 000</div>
                                <div>70 000 €</div>
                                <div>627.6</div>
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

                <li className='case'>
                    <div>
                        <img src={require('./image/New-York.png')} className='image' alt='New-York' />
                        <div className='lieu'>
                            <div>
                                <div className='capital'>New York</div>
                                <div>New York, NY 10004, United States</div>
                            </div>
                        <div>
                                <label class="switch">
                                    <input type="checkbox"/>
                                    <span class="slider round"></span>
                                </label>
                        </div>
                        </div>
                        <div className='ligne-droite'><hr/></div>
                        <div>
                            <div className='row'>
                                <div>8.4 M</div>
                                <div>12 000</div>
                                <div>100 000 €</div>
                                <div>783.8</div>
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
            </ul>
        </div>
    
    );
}
}
export default Listing;