import React from 'react';
import { useState , useEffect} from 'react';
import Results from './Components/Results';

function App() {

    const [count, setCount] = useState<number>(1);
    const [player1, setPlayer1] = useState<number>(0);
    const [player2, setPlayer2] = useState<number>(0);
    const [clickcount , setClickcount] = useState(0);
    const [state, setState] = useState(true);
    const [first, setFirst] = useState<string | null>('');
    const [second, setSecond] = useState<string | null>('');
    const [third, setThird] = useState<string | null>('');
    const [fourth, setFourth] = useState<string | null>('');
    const [five, setFive] = useState<string | null>('');
    const [six, setSix] = useState<string | null>('');
    const [seven, setSeven] = useState<string | null>('');
    const [eight, setEight] = useState<string | null>('');
    const [nine, setNine] = useState<string | null>('');
    

    function handlegamerest() {
      setFirst('');
      setSecond('');
      setThird('');
      setFourth('')
      setFive('')
      setSix('')
      setSeven('')
      setEight('')
      setNine('')
      setState(true);
      setClickcount(0);
    }
 useEffect(() => {
     
      
    if(clickcount >= 8) {
      setFirst('');
      setSecond('');
      setThird('');
      setFourth('')
      setFive('')
      setSix('')
      setSeven('')
      setEight('')
      setNine('')
      setState(true);
      setClickcount(0);
      
     }
  
 }, [clickcount])
         
    useEffect(() => {
     
        setFirst('');
        setSecond('');
        setThird('');
        setFourth('')
        setFive('')
        setSix('')
        setSeven('')
        setEight('')
        setNine('')
        setState(true);
      setClickcount(0);

  
        
    }, [player1, player2])

    function resetHandler() {
      setState(true);
       setPlayer1(0);
       setPlayer2(0);
      setClickcount(0);


    }

    useEffect(() => {
      
      if(first === 'X' && second === 'X' && third === "X") {
        setPlayer1(player1 + 1);
      } else if (first === 'X' && fourth === 'X' && seven === "X") {
        setPlayer1(player1 + 1);
      } else if(first === 'X' && five === 'X' && nine === 'X') {
        setPlayer1(player1 + 1);
      } else if(second === 'X' && five === 'X' && eight === 'X') {
        setPlayer1(player1 + 1);
      } else if(third === 'X' && five === 'X' && seven === 'X') {
        setPlayer1(player1 + 1);
      } else if(third === 'X' && six === 'X' && nine === 'X') {
        setPlayer1(player1 + 1);
      } else if(fourth === 'X' && five === 'X' && six === 'X') {
        setPlayer1(player1 + 1);
      } else if(seven === 'X' && eight === 'X' && nine === 'X') {
        setPlayer1(player1 + 1);
      } else if(first === 'Y' && second === 'Y' && third === "Y") {
        setPlayer2(player2 + 1);
      } else if (first === 'Y' && fourth === 'Y' && seven === "Y") {
        setPlayer2(player2 + 1);
      } else if(first === 'Y' && five === 'Y' && nine === 'Y') {
        setPlayer2(player2 + 1);
      } else if(second === 'Y' && five === 'Y' && eight === 'Y') {
        setPlayer2(player2 + 1);
      } else if(third === 'Y' && five === 'Y' && seven === 'Y') {
        setPlayer2(player2 + 1);
      } else if(third === 'Y' && six === 'Y' && nine === 'Y') {
        setPlayer2(player2 + 1);
      } else if(fourth === 'Y' && five === 'Y' && six === 'Y') {
        setPlayer2(player2 + 1);
      } else if(seven === 'Y' && eight === 'Y' && nine === 'Y') {
        setPlayer2(player2 + 1);
      } 


 }, [first, second, third, fourth, five, six, seven, eight, nine])






  

  return (
    <div className="App">
     
    <div className='cont'>
      <div onClick={() => {
        if(first === 'X' || first === 'Y') {
          return;
             }
        if(state === true){
          setFirst('X')
        } else {
          setFirst('Y')

        }

        setState(!state);
        setClickcount(clickcount + 1);
      }}><p className={first ==='X' ? 'x' : 'y'}>{first === 'X' ? 'X' : first}</p> </div>
      <div onClick={() => {
        if(second === 'X' || second === 'Y') {
          return;
             }
        if(state === true){
          setSecond('X')
        } else {
          setSecond('Y')

        }

        setState(!state);
        setClickcount(clickcount + 1);

      }}><p className={second ==='X' ? 'x' : 'y'}>{second === 'X' ? 'X' : second}</p> </div>
      <div onClick={() => {
        if(third === 'X' || third === 'Y') {
          return;
             }
        if(state === true){
          setThird('X')
        } else {
          setThird('Y')

        }

        setState(!state);
        setClickcount(clickcount + 1);

      }}><p className={third ==='X' ? 'x' : 'y'}>{third === 'X' ? 'X' : third}</p>  </div>
      <div onClick={() => {
        if(fourth === 'X' || fourth === 'Y') {
          return;
             }
        if(state === true){
          setFourth('X')
        } else {
          setFourth('Y')

        }

        setState(!state);
        setClickcount(clickcount + 1);

      }}> <p className={fourth ==='X' ? 'x' : 'y'}>{fourth === 'X' ? 'X' : fourth}</p></div>
      <div onClick={() => {
        if(five === 'X' || five === 'Y') {
          return;
             }
        if(state === true){
          setFive('X')
        } else {
          setFive('Y')

        }

        setState(!state);
        setClickcount(clickcount + 1);

      }}><p className={five ==='X' ? 'x' : 'y'}>{five === 'X' ? 'X' : five}</p> </div>
      <div onClick={() => {
        if(six === 'X' || six === 'Y') {
          return;
             }
        if(state === true){
          setSix('X')
        } else {
          setSix('Y')

        }

        setState(!state);
        setClickcount(clickcount + 1);

      }}> <p className={six ==='X' ? 'x' : 'y'}>{six === 'X' ? 'X' : six}</p></div>
      <div onClick={() => {
        if(seven === 'X' || seven === 'Y') {
          return;
             }
        if(state === true){
          setSeven('X')
        } else {
          setSeven('Y')

        }

        setState(!state);
        setClickcount(clickcount + 1);

      }}><p className={seven ==='X' ? 'x' : 'y'}> {seven === 'X' ? 'X' : seven}</p></div>
      <div onClick={() => {
           if(eight === 'X' || eight === 'Y') {
        return;
           }
        if(state === true){
          setEight('X')
        } else {
          setEight('Y')

        }

        setState(!state);
        setClickcount(clickcount + 1);

      }}><p className={eight === 'X' ? 'x' : 'y'}>{eight === 'X' ? 'X' : eight}</p> </div>
      <div onClick={() => {
        if(nine === 'X' || nine === 'Y') {
        return;
        
          
        }
        if(state === true){
          setNine('X')
        } else {
          setNine('Y')

        }

        setState(!state);
      }}><p className={nine ==='X' ? 'x' : 'y'}>{nine === 'X' ? 'X' : nine}</p> </div>

      
    </div>
     <Results playerone={player1} playertwo={player2} handle={resetHandler} gamerest={handlegamerest}/>
     
    </div>
    
  );
}

export default App;
