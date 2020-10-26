// Write your Character component here
import React , {useState, useEffect} from 'react';
import {Row, CardTitle, CardBody, CardText, Card, CardSubtitle} from "reactstrap";
const Character = (props) => {

const [ character, setCharacter ] = useState()
setCharacter(props);
console.log('char char', character)

return(
<Row>
<Card body inverse color="info">
    <CardBody>
        <CardTitle> Name </CardTitle>
        <CardSubtitle color="secondary">  Location(origin.name)      </CardSubtitle>
        <CardText>      </CardText>
    </CardBody>
</Card>
</Row>
)}
export default Character;


