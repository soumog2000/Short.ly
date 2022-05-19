import axios from "axios";
import React, { useState } from "react";
import './App.css';
import Footer from "./components/footer";
import Waves from "./components/wave";
import copy from "copy-to-clipboard";

function App() {
  const [url, setUrl] = useState("");
  const [resUrl, setResUrl] = useState("");

  function submitHandler(e) {
    e.preventDefault();
    const postData = { url };
    console.log(url);
    axios.post(`https://short-io-web.herokuapp.com/api/`, postData).then((res) => {
      setResUrl(res.data.shorturl);
      console.log(url);
    });
  }

  function copy_btn(e){
    e.preventDefault();
    copy(resUrl);

  }



  return (
    <>
      <div className="container">
        <header>
          <h1>
            <span className="highlight">sHort</span>
            <span className="highlight">.</span>iO
          </h1>
          <small>...shorten your link for free.</small>
        </header>

        <main>
          <form onSubmit = {submitHandler}>
            <fieldset>
              <input
                type="text"
                name="url"
                placeholder="Enter URL including the http(s) protocol"
                onInput={(e)=>setUrl(e.target.value)}
              />
              <input type="submit" value="shorten" id="button-submit"/>
            </fieldset>
            <br />
            <fieldset className="display-result">
              <span id="result">{resUrl}</span>
              <button type="submit" id="copy" onClick={copy_btn}></button>
            </fieldset>
          </form>
        </main>
      </div>
      <Waves />
      <Footer />
    </>
  );
}

export default App;
