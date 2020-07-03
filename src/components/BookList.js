import React from 'react';
import { useState } from 'react';
//import './containers.json';
import axios from 'axios';

export default function BookList() {
  const [TocItems, setTocItems] = useState([]);

  axios
    .get(
      'containers.json'
      //'https://www.schullv.de/api/v2/categories/MSHSBWAI7Q7596198M/light_containers'
    )
    .then((response) => {
      return response.data;
    })
    .then((list) => {
      setTocItems(list);
    })
    .catch((error) => {
      console.log(error.message);
    });

  // fetch('./containers.json')
  //   .then((response) => response.json())
  //   .then((responseJson) => {
  //     console.log(responseJson);
  //   })
  //   .catch((error) => console.log(error));

  console.log(TocItems);
  return (
    <ul>{TocItems.length > 0 && TocItems.map((item) => renderItem(item))}</ul>
  );
}

function renderItem(item) {
  return <li>{item.topic}</li>;
}
