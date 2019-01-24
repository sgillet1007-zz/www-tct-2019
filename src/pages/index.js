import React from "react"
import '../index.css'
import hero from "../images/hero.jpg"
import TrackPlayer from '../components/track_player'
import UpcomingShows from '../components/show_list'
import BandBios from '../components/band_bios'
import Layout from '../components/layout'
export default () => (
    <div>
        <Layout>
            <div className='hero-container'>
                <img className='hero-image' src={hero} alt="" />
            </div>
            <TrackPlayer />
            <UpcomingShows />
            <BandBios />
        </Layout>
    </div>
)
