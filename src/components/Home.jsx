import React from 'react'
import MyCard from  './Card';
import Header from './header';
import CardsArray from './cardsArray';

const Home = () => {
    return (
        <div>
            <Header/>
            <MyCard
                emoji = {CardsArray[0].emoji}
                name = {CardsArray[0].name}
                description = {CardsArray[0].description}
            />
        </div>
    )
}

export default Home
