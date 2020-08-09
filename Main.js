import React, { Component } from 'react';
import Cards from './Cards.js';
import './Main.css';
 import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import PlayerOne from './PlayerOne.js';
import TwoCards from './TwoCards.js';


class Main extends Component{
    render(){
        return(
            <main>
                <div>

                    <Route path="/" component={Home} exact/>
                    <Route path="/newgame" component={NewGame}></Route>
                    <Route path="/PlayerOne" component={Cards} />
                    <Route path="/PlayerTwo" component={TwoCards} />
                    
   
                </div>
            </main>
        )
    }
}
function Home(){
        return(
            <>
               <h2>Gra Oczko</h2> 
               <img src="https://media0.giphy.com/media/xUn3CftPBajoflzROU/giphy.gif?cid=ecf05e47f92tmppo4jsc6qjk3fk16u89xn5m4cw0fzb3crih&rid=giphy.gif"></img>
               <div className="rules">
               <h3>Zasady gry</h3>
                Oczko – prosta gra karciana, polegająca na dobieraniu kolejnych kart dotąd, aby osiągnąć wartość liczbową posiadanych kart jak najbliższą (ale nie większą niż) 21.
                Gracz otrzymuje kolejne karty z talii dotąd, aż sam zdecyduje, że nie chce już więcej kart, lub otrzyma wynik 21 lub większy.
                Suma większa lub równa 22 oznacza przegraną. Wyjątkiem od tej reguły jest perskie oczko (dwa asy). Perskie oczko zawsze oznacza wygraną.
                Jeśli żaden z graczy nie otrzyma wyniku 21 wygrywa ten który był najbliżej tej wartości. W oczko gra się talią od 2 do asa.
                Punktacja:
                Karty 2 do 10 mają wartość równą wartości karty
                walet – 2 pkt.
                dama – 3 pkt.
                król – 4 pkt.
                As – 11 pkt.

               </div>
            </>
        )
}
function NewGame(){
    return(
        <>
        <h2>Wybierz tryb gry...</h2> 
        <img src="https://media0.giphy.com/media/PjCTyH7NmhITrx4Htr/giphy.gif?cid=ecf05e479d397218abdea2101f95b1c7633b73375172e8b7&rid=giphy.gif"></img>
        </>
    )
}
export default Main