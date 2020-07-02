import React from 'react';

export default function TableOfContent() {
  const [TocItems, setTocItems] = useState([]);

  fetch(`www.schullv.de/api/v2/categories/MSHSBWAI7Q7596198M/light_containers`)
    .then((response) => response.json())
    .then((responseJson) => {
      setTocItems(responseJson);
    })
    .catch((error) => console.log(error));
}
