import React, { Component } from 'react';
import './Card.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ReactImageAppear from 'react-image-appear';
import card from "./card.jpg";

class TwoCards extends Component{
    constructor(prpos){
        super(prpos);
         this.state = {
            id: "Tasuj karty!",
            image: card,
            value: 0,
            score: 0,   
            tryCount: 0,
            gamer: "Gracz nr 1",

            id2: "Tasuj karty!",
            image2: card,
            value2: 0,
            score2: 0,   
            tryCount2: 0,
            gamer2: "Gracz nr 2",
            

            turn: "Gracz 1",
            turnCount: 0,
            turnCount2: 0
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
            if (this.state.score > 21) {
                console.log("porażka")
                window.alert("Porażka, zacznij jeszcze raz :<. Wynik: "+this.state.score+". Wygrywa: "+this.state.gamer2+", pogratuluj mu!")
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
            if (this.state.turn==="Gracz 2") {
                window.alert("Nie Twoja kolej!")
                
            }
            else{
                this.setState({
                    turnCount: this.state.turnCount + 1
                }
            )
            if (this.state.turnCount === 1) {
                this.setState({
                    turnCount: 0,
                    turn: "Gracz 2"
                })
            }
            
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
            }
            pass = () =>{
                if (this.state.turn==="Gracz 2") {
                    window.alert("Nie Twoja kolej!")
                    
                }
                else{
                    this.setState({
                        turn: "Gracz 2"
                    }
                    )
                    window.alert("Ruch oddany")
                }
            }
            // 2222222222222222222222222222222
            getCard2 = () =>{
                if (this.state.turn==="Gracz 1") {
                    window.alert("Nie Twoja kolej!")
                    
                }
                else{
                this.setState({
                        turnCount2: this.state.turnCount2 + 1
                    }
                )
                if (this.state.turnCount2 === 1) {
                    this.setState({
                        turnCount2: 0,
                        turn: "Gracz 1"
                    })
                }
                
                fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=1')
                .then(res => res.json())
                .then(data => this.setState(
                    {
                        id2: data.cards[0].code,
                        image2: data.cards[0].image,
                        value2: data.cards[0].value,
                        
                    }
                    )).then(this.addTryCount2)
                    .then(this.setScore2)
                    .then(this.checkScore2)
                    .then(this.setID2);
                }
            }
            addTryCount2=()=>{
                this.setState({
                    tryCount2: this.state.tryCount2 + 1
                }
                )
            }
            setScore2=()=>{
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
                const score = this.state.value2; 
                this.setState({
                    value2: valueOfCards.get(score),
                    score2: this.state.score2 + valueOfCards.get(score)
                    
                }
                )
            }
            checkScore2 = () =>{
                console.log("sprawdzam wynik");
                console.log(this.state.score2);
                console.log("aktualna wartość karty: "+this.state.value2)
                if (this.state.score2 > 21) {
                    console.log("porażka")
                    window.alert("Porażka, zacznij jeszcze raz :<. Wynik: "+this.state.score2+". Wygrywa: "+this.state.gamer+", pogratuluj mu!")
                    this.playAgain();
                    
                    
                }
                if(this.state.score2 === 21){
                    console.log("wygrana!")
                    window.alert("Gratuluję! :) Wygrana! Zwycięzca: "+this.state.gamer2+" z wynikiem: "+this.state.score2)
                    this.playAgain()
                }
                
            }
            setID2=()=>{
                const idT = this.state.id2;
                console.log(this.state.id2)
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
        pass2 = () =>{
            if (this.state.turn==="Gracz 1") {
                window.alert("Nie Twoja kolej!")
                
            }
            else{
                this.setState({
                    turn: "Gracz 1"
                }
                )
                window.alert("Ruch oddany")
            }
        }

    //too 1 i 2
        playAgain = () =>{
                this.setState({
                    id: "Tasuj karty!",
                    image: card,
                    value: 0,
                    score: 0,   
                    tryCount: 0,
                    id2: "Tasuj karty!",
                    image2: card,
                    value2: 0,
                    score2: 0,   
                    tryCount2: 0
                }
                
        )
        window.location="./"
        }
    
    render(){
        return(
            <>
                <p className="blink">Kolejka: {this.state.turn}</p>
                <div className="box">
                    <div className="cardBox1">
                        <h3>Wynik: {this.state.score}</h3>
                        <p>Liczba prób: {this.state.tryCount}</p>
                        <button onClick={this.getCard}>Weź kartę</button>
                        <button className="buttonPass" onClick={this.pass}>Pasuje!</button>
                        <Card gamer={this.state.gamer} id={this.state.id} image={this.state.image} value={this.state.value}></Card>
                    </div>
                    <div className="cardBox2"> 
                        <h3>Wynik: {this.state.score2}</h3>
                        <p>Liczba prób: {this.state.tryCount2}</p>
                        <button  onClick={this.getCard2}>Weź kartę</button>
                        <button className="buttonPass" onClick={this.pass2}>Pasuje!</button>
                        <Card gamer={this.state.gamer2} id={this.state.id2} image={this.state.image2} value={this.state.value2}></Card>
                    </div>
                    <div className="clear"></div>
                </div>
            </>
        )
    }
    
}


function Card({id, image, value, gamer}){
        return(
        <>
            <h2 >{gamer}</h2>
            <h3>Karta: {id}</h3>
            <h4>Wartość: {value}</h4>
            <img src={image} className="cardImage"></img>
           
        </>
        )
    }
export default TwoCards