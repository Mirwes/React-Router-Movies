import React from 'react';
import { Card, CardTitle, Button } from "reactstrap";
import {  useHistory } from "react-router-dom";

const SavedList = props => {
  console.log('prooooop', props);
 const history = useHistory();
  const backToHome = (e) => {
    setTimeout(() => {
      history.push("/")
    }, 1000);
  }
  const onClickHandler = backToHome;
  return (
    <Card style={{magin: "5%", padding: "3%", display:"flex",
     flexFlow: "row", boxShadow: " 0 px 8px 0 rgba ( 0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0.19)",
  backgroundColor: "#edf6f9", border: "solid 1px black"}
}>
  <CardTitle style={{fontSize: "1.7rem", fontFamily:"'Krona one', sans-serif", color: "#e63946", textShadow: "1px 1px 3px #9a8c98", fontWeight: "bold", marginLeft: "3%" }}>Saved Movies:</CardTitle>
{props.list.map(movie => (
  <span className="saved-move">{movie.title}</span>
))}
  )
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <span className="saved-movie">{movie.title}</span>
    ))}
    <Button style={{width: "80px", height: "45px", marginLeft: "65%", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    backgroundColor: "#e63946", fontFamily: "'Krona one', sans-serif", fontSize: "0.8rem"}}
onClick={()=>backToHome()}>Home</Button> 
</div>
</Card>

);}


export default SavedList;
