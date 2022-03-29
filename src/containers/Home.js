import React from 'react'
import { AgendaComponent } from '../components/AgendaComponent'
import { HomeComponent } from '../components/Navbar/Home/HomeComponent'

export const Home = () => {
    return (
        <div>
            <HomeComponent />
            <AgendaComponent />
        </div>
    )
}
