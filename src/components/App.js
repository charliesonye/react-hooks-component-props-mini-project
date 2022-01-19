import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

// console.log(blogData.posts);

function App() {
  const ImgAltName = "blog logo"
  
  return (
    <div className="App">
     <Header name={blogData.name}/>
     <About  title={ImgAltName} aboutText={blogData.about} imgSrc={blogData.image}/>
     <ArticleList posts={blogData.posts}/>
    </div>
  );
}

export default App;
