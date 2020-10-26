// Write your Character component here
import React , {useState, useEffect} from 'react';
import styled from 'styled-components';
import {Row,Col, CardImg, Container, CardHeader, CardTitle, CardBody, CardText, Card, CardSubtitle} from "reactstrap";
const Character = (props) => {
const [ character, setCharacter ] = useState(props)

const MyImg = styled.img`
    width: 150px;
    height: 150px;
    object-fit: scale;
    flex-shrink: 2;
    justify-content: center;
    margin: 0 auto;
`
console.log('specific', character.character.image)

return(
<>
<Card color="info">
    <Col>
        <CardHeader>
            <MyImg src={character.character.image}></MyImg>   
            <CardTitle>Name : {character.character.name}</CardTitle>
            </CardHeader>
        </Col>
    <Row>
        <Col xl="12">
            <CardText>Location : {character.character.origin.name}</CardText>
            <CardText>Living Status: {character.character.status}</CardText>
            <CardText>Species : {character.character.species}</CardText>
            <CardText>Gender : {character.character.gender}</CardText>
            </Col>
        </Row>   
</Card>
</>
    )}
    export default Character;


