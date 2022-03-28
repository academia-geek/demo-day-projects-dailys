import React from 'react'
import { HomeComponent } from './Home/HomeComponent'
import {AgendaComponent} from '../AgendaComponent'

export const Home = () => {
    return (
        <div>
            <HomeComponent />
            <AgendaComponent />
        </div>
    )
}
