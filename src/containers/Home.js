import React from 'react'
import { HomeComponent } from '../components/Navbar/Home/HomeComponent'
import {AgendaComponent} from '../components/AgendaComponent'

export const Home = () => {
    return (
        <div>
            <HomeComponent />
            <AgendaComponent />
        </div>
    )
}
