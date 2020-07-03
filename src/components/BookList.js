import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

export default function BookList() {
  const [TocItems, setTocItems] = useState([]);

  useEffect(() => {
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
  }, []);

  // fetch('./containers.json')
  //   .then((response) => response.json())
  //   .then((responseJson) => {
  //     console.log(responseJson);
  //   })
  //   .catch((error) => console.log(error));
  return (
    <StyledBookList>
      {TocItems.length > 0 && TocItems.map((item) => renderItem(item))}
    </StyledBookList>
  );
}

function renderItem(item) {
  return <li key={item.containerId}>{item.topic}</li>;
}

const StyledBookList = styled.ul`
  margin: 0 auto;
  padding: 0;
  text-align: center;

  > li {
    text-align: left;
    list-style: none;
    display: inline-block;
    background-color: #82a9de;
    padding: 13px;
    width: 80%;
    margin: 1px auto;
  }
`;
