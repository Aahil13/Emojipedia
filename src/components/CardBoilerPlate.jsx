import React from 'react'
import { Card } from 'react-bootstrap'
import CardsArray from './cardsArray'
import { useHistory } from 'react-router-dom';

function showme() {
    var cards = document.querySelectorAll('.test');
    cards.forEach(btnClicked);
}

function btnClicked(btn,index) {
    btn.addEventListener('click',()=>{
        localStorage.setItem("test", JSON.stringify(CardsArray[index]))
    });
}

const CardBoilerPlate = (props) => {
    return (
        <div className='col-12 sm-6 col-lg-4 my-4 test' onClick={() => {
          showme();
        }}>
            <Card className='h-100'>
                <p className='emoji-img'>{props.emoji}</p>
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>
                        {props.description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default CardBoilerPlate
