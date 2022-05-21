import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { Input } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react';
import AirbnbExample from './Components/Box';
import { useState } from 'react';
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from '@chakra-ui/react';
import { Container } from '@chakra-ui/react';
import { Flex, Spacer, Heading } from '@chakra-ui/react';

export default function Home({data}) {
  const[value, setValue] = useState(""); 
  const [myList, setMyList ] = useState([{a: "AA", b:"BB"},{a: "AB", b: "BC"}]);

  async function addToMyList(){
    const response = await fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${value}&app_id=14f8dadb&app_key=69a812c28b3179d4353e2b5292b16487`
    );
    const data = await response.json();
    console.log(data);
    let info = data.hits.map((item)=>{ 
      let a = item.recipe.label;
      let b = item.recipe.url;
      let obj = {a: a, b: b};
      setMyList(myList => [...myList, obj]);
      console.log(myList);
      return item.recipe});
    info.map((item)=>{ console.log(item.label, item.url, item.image)})
  }
  return (

    <Container maxW='9xl' bg='blue.100' centerContent>
      <div id='banner' class="bg-lightsteelblue border-bottom">
        </div>
          <h1 className={styles.title}>
            <Flex minWidth='max-content' alignItems='center' gap='2'>
              <Box p='2'>
                <Heading size='md'> Find Your Recipe </Heading>
              </Box>
            <Spacer />
          </Flex>
        </h1>

        <div>
          <Input placeholder='example Mushroom gravey' bg='white' value={value}  onChange={(e) => {setValue(e.target.value)}}/>
              <Box margin="4" onClick={addToMyList} as='button' borderRadius='md' bg='blue' color='white' px={4} h={8}>
                Search
              </Box>
        </div>
        <Container maxW='6xl' bg='blue.50' centerContent margin="4">
          <div class="container featured-subcategories">
            <div class="row">
              <div class="col-12 py-4">
                <div class="row my-n3">
                {myList.map((item, index)=> { 
                  return(
                    <div key={index} class="col-6 col-md-4 col-lg-2 p-3">
                    <a class="bg-lightsteelblue border mb-2 media-4-3 rounded" href="https://recipes.net/healthy-recipes/clean-eating/">
                      <img width="150" height="150" class="attachment-thumbnail size-thumbnail" alt="clean-eating" loading="lazy" data-src="https://recipes.net/wp-content/uploads/2020/07/clean-eating-150x150.jpg" src="https://recipes.net/wp-content/uploads/2020/07/clean-eating-150x150.jpg"/> </a>
                    <p class="font-weight-bold h6 mb-0"><a href="https://recipes.net/healthy-recipes/clean-eating/"> {item.a} Clean-Eating</a></p>
                  </div>
                  );})}
                </div>
              </div>
            </div>
          </div>
        </Container>


        <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card h-100">
      <img src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&webp=true&resize=300,272" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&webp=true&resize=300,272" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a short card.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&webp=true&resize=300,272" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&webp=true&resize=300,272" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&webp=true&resize=300,272" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&webp=true&resize=300,272" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
</div>
    </Container>

    
  )
}


export async function getServerSideProps() {
  const response = await fetch(
    "https://api.edamam.com/api/recipes/v2?type=public&q=mashroom&app_id=14f8dadb&app_key=69a812c28b3179d4353e2b5292b16487"
  );

  const data = await response.json();
  console.log(data);
  return {
    props: { data: data },
  };
}