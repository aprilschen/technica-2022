import React, {useState} from 'react';
import Popup from './Popup/Popup'
import NameForm from './NameForm/NameForm';
import Map from './Map/Map';
import './index.css';

const App = () => {
    const [isOpen, setIsOpen] = useState(false);
    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    const [findNew, setFindNew] = useState(false);
    const toggleFindNew = () => {
        setFindNew(!findNew);
    }

    return (
        <div class = "text-center bg-yellow-300 p-3">
            <div class="text-center bg-white shadow-md mx-16 px-14 py-3 rounded-md">
                <h1 class="text-3xl text-gray-700">Welcome to DigiCache!</h1>
            </div>

            <p class="mt-5 text-xl">Please enter your name</p>

            <NameForm />

        <div class = "bg-gray-100 shadow-md mx-16 mb-3.5 rounded-lg flex justify-center">

            <div class="m-6">
                    <div class = "text-center">
                        <button class = "bg-blue-800 text-gray-100 min-w-min p-3" onClick = {togglePopup}>
                            Create Cache
                        </button>
                    </div>
                    
                    {isOpen && <Popup 
                        handleClose = {togglePopup}
                        content = {
                            <div> 
                                <h2>Create a cache here!</h2>
                                <p>Insert Message & Photo</p>
                            </div>
                        }
                    />}
                </div>



                <div class="m-6">
                    <div class = "text-center">
                        <button class = "bg-blue-800 text-gray-100 min-w-min p-3" onClick = {toggleFindNew}>
                            Find New Cache
                        </button>
                    </div>
                    
                    {findNew && <Popup 
                        handleClose = {toggleFindNew}
                        content = {
                            <div> 
                                <h2>Find new Cache:</h2>
                                <p>What are you looking for?</p>
                            </div>
                        }
                    />}
                </div>
        </div>


            <Map />

        </div>
    );
}

export default App;