function Results(props: any) {
  return (
    <div className="results">
      <h3>P1: {props.playerone}</h3>
      <h3>P2: {props.playertwo}</h3>
      <button onClick={props.handle} >RESET PONTS</button>
      <button onClick={props.gamerest}>RESET GAME</button>
    </div>
  );
}

export default Results;
