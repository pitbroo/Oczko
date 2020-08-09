import React, { Component } from 'react';
import './Card.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ReactImageAppear from 'react-image-appear';
import card from "./card.jpg";

class Cards extends Component{
    constructor(prpos){
        super(prpos);
         this.state = {
            id: "Tasuj karty!",
            image: card,
            value: 0,
            score: 0,   
            tryCount: 0,
            gamer: "Gracz nr 1"
        }
    }
    
   
        addTryCount=()=>{
            this.setState({
                tryCount: this.state.tryCount + 1
            }
            )
        }
        checkScore = () =>{
            console.log("sprawdzam wynik");
            console.log(this.state.score);
            console.log("aktualna wartość karty: "+this.state.value)
            if (this.state.score > 22) {
                console.log("porażka")
                window.alert("Porażka, zacznij jeszcze raz :<. Wynik: "+this.state.score)
                this.playAgain();
                
                
            }
            if(this.state.score === 21){
                console.log("wygrana!")
                window.alert("Gratuluje :) wygrana! Zwycięzca: "+this.state.gamer+" z wynikiem: "+this.state.score)
                this.playAgain()
            }
            
        }
        setScore=()=>{
            const valueOfCards = new Map([
                    ["2", 2],
                    ["3", 3],
                    [ "4" , 4],
                    [ "5" , 5],
                    [ "6" , 6],
                    [ "7" , 7],
                    [ "8" , 8],
                    [ "9" , 9],
                    [ "10" , 10],
                    [ "JACK" , 2],
                    [ 'QUEEN' , 3],
                    [ 'KING' , 4],
                    [ 'ACE' , 11],
                ]
                )
            const score = this.state.value; 
            this.setState({
                value: valueOfCards.get(score),
                score: this.state.score + valueOfCards.get(score)
                
            }
            )
        }
        setID=()=>{
            const idT = this.state.id;
            console.log(this.state.id)
            let domian;
            if (idT==='JS' || idT==='JH'|| idT==='JD' || idT==='JC') {
                domian= "Jopek" 
             }
             else if (idT==='0S' || idT==='0H'|| idT==='0D' || idT==='0C') {
                 domian = "10";
             }
             else if (idT==='QS' || idT==='QH'|| idT==='QD' || idT==='QC') {
                domian ="Królowa"
             }
             else if (idT==='KS' || idT==='KH'|| idT==='KD' || idT==='KC') {
                domian = "Król";
             }
             else if (idT==='AS' || idT==='AH'|| idT==='AD' || idT==='AC') {
                domian = "AS!";
             }else domian = idT;

             console.log("Ustawiam domene"+domian)
             this.setState(
            {
                id: domian
            }
            )
            } 

        getCard = () =>{
            
            
            fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=1')
            .then(res => res.json())
            .then(data => this.setState(
                {
                    id: data.cards[0].code,
                    image: data.cards[0].image,
                    value: data.cards[0].value,
                    
                }
                )).then(this.addTryCount)
                .then(this.setScore)
                .then(this.checkScore)
                .then(this.setID);
            }
        playAgain = () =>{
                this.setState({
                    id: "Tasuj karty!",
                    image: card,
                    value: 0,
                    score: 0,   
                    tryCount: 0
                }
                
        )
        window.location="./"
        }
    
    render(){
        return(
                <>
                    <div>
                        <h3>Wynik: {this.state.score}</h3>
                        <p>Liczba prób: {this.state.tryCount}</p>
                        <button onClick={this.getCard}>Weź kartę</button>
                        <Card  gamer={this.state.gamer} id={this.state.id} image={this.state.image} value={this.state.value}></Card>
                    </div>
                </>
        )
    }
    
}


function Card({id, image, value, gamer}){
        return(
        <>
            <h2>{gamer}</h2>
            <h3>Karta: {id}</h3>
            <h4>Wartość: {value}</h4>
            <img id="card" src={image} className="cardImage"></img>
           
        </>
        )
    }
export default Cards