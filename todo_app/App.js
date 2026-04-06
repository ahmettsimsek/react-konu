import { useState } from "react";

function App() {

const [text, setText] = useState("")//başlangıç değeri boş 
const [message,setMessage] =  useState([]) // tüm mesajlarımı tutan boş bir array olması lazım

const onChangeFunc = (e) => {
    setText(e.target.value)
}

const messageFunc = () => {
   setMessage(prev => [...prev,text])
   //prev koyduğumuz herhangi bir isimdir. burada diyoruz ki sen tüm mesajları al, aldıktan sonra yeni gelen mesaj varsa buraya ekle diyoruz oda text oluyor zaten.  
   setText('') // text'İ update ettik çünkü artık içinde yazı yazmasına gerek yok
}

  return (
    <>
      <input value={text} onChange={onChangeFunc} type="text" placeholder="ekle"/>
      <button onClick={messageFunc}>ekle</button>
      {
        message?.map((msg,i) => ( // message varsa map et diyoruz
          <div>{msg}</div>
        ) ) 
      }
    </>
  );

}

export default App;

// Normalde ayrı sayfalarda yapılmalı ancak biz tek sayfada kafa karıştırmasın diye yapacağız. 