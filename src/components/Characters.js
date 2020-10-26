import React , {useEffect, useState} from 'react'
import axios from 'axios'
import {Card,Col, Container, Row} from 'reactstrap';
import Character from "./Character";

export default function Characters (){
    let url = "https://rickandmortyapi.com/api/character"
    const [characters , setCharacters ] = useState([]);
    useEffect(() => {
        axios
            .get(url)
            .then((res) => {
                //added loop to give me a smaller set of data to work with.
                // console.log('res',res.data.results);
                let newData = [];
                for (let i = 0 ; i < 18; i++){
                    newData.push(res.data.results[i])
                }
                setCharacters(newData)  
            })
            .catch((err) =>{
                console.log('error', err)
            })
        }, [])

    return (
    <>
    <Card >
    
        <Col >
        <Row xl="3">
            {characters.map((character)=>{
                    return <Character 
                    key = {character.id}
                    character = {character}/>
                })}
        </Row>
        </Col>
    
    </Card>
    </>
    );
}
