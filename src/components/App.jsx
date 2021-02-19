import React from 'react'
import '../css/App.css'
import ImageSlider from './ImageSlider'
import { SliderData } from './SliderData'
const App = () => {
    return (
        <div>
            <ImageSlider slides={SliderData}/>
        </div>
    )
}

export default App
