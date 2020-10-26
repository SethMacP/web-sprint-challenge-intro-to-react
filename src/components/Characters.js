import React , {useEffect, useState} from 'react'
import axios from 'axios'
import {Container, Row} from 'reactstrap';
import Character from "./components/Character";

export default function Characters (){
    let url = "https://rickandmortyapi.com/api/character"
    const [characters , setCharacters ] = useState([]);
    useEffect(() => {
        axios
            .get(url)
            .then((res) => {
                console.log('res',res);
                
            })
            .catch((err) =>{
                console.log('error', err)
            })
        }, [])
      
    console.log('characters',characters);
    return (
    <>
        <Container>
            <Row>
                
            </Row>
        </Container>
    </>
    );
}
