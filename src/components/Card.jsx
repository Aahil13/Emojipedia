import React from 'react'
import { Row } from 'react-bootstrap'
import CardBoilerPlate from './CardBoilerPlate'
import CardsArray from './cardsArray'

function CreateCard(emojipedia){
    return(
            <CardBoilerPlate
                key = {emojipedia.id}
                emoji = {emojipedia.emoji}
                name = {emojipedia.name}
                description = {emojipedia.description}
            />
    )
}

const MyCard = () => {
    return (
        <div>
            <Row>
                {CardsArray.map(CreateCard)}
            </Row>
        </div>
    )
}

export default MyCard
