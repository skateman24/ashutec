import './App.css';
import { useEffect, useState } from 'react';
import RightNav from './RightNav';
import ProductDescription from "./ProduckDescription";
import ProductList from './ProduckList';

function App() {

  const [Products, setProducts] = useState([]);
  const [category, setcategory] = useState([]);
  const [SecondScreen, setSecondScreen] = useState(false);

  useEffect(() => {
    var product = localStorage.getItem('Products');
    if (!product) {
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((json) => {
          localStorage.setItem('Products', JSON.stringify(json));
          setProducts(json);
          Collectcategory(json);
          console.log("NoT Found--", json)
        })
     
    } else {
      console.log("Found--", product);
      setProducts(JSON.parse(product));
      Collectcategory(JSON.parse(product))
    }
  }, [setProducts])

  const Collectcategory = (data) => {
    var categorylist = [];
    data.map((e, index) => {
      let found = categorylist.filter(function(item) {  return item.name == e.category; });
      if(found.length === 0){
        let CDET = {"name" :e.category, "Status" : true }
        return categorylist.push(CDET)
      }
    })
    setcategory(categorylist);
    console.log("---",categorylist)
     
  }

  if(Products.length > 0){
    return (
      <div className="App">
        <RightNav category={category}/>
        {SecondScreen ? 
          <ProductDescription />
        :
          <ProductList />
        }
         
      </div>
    );
  }else{
    return (
      <div className="App">
          <div>Loading</div>
      </div>
    );
  }
  
}

export default App;
