import Berkant from "./components/berkant"
import Deneme from "./components/deneme"

function App() {

  const arr = [
    {name: 'array1', id:0},
    {name: 'array2', id:1},
    {name: 'array2', id:2},
  ]

  return (
    <div className="App"> 

    {
      arr.map((ar,i) => (
        <div key={i}>{ar.name}</div> // eğer i kullanmassan map de direk ar.id de olur 
      ))
    }

    </div>
  );
}
// Map kavramı, React da bazı şeyleri ekrana map etmek yani yazdırmak için kullanılır. İlk olarak bir array oluştururuz. Ben console log ile yazdırırsam görürüm elaemanları ancak ben ekrana bastırmak istiyorum nasıl yaparım dersem Map ile yaparım.

// arrayımız bir değişken ile oluşturulduğu için doğrudan ismi ile çağıramayız unutma, süslü parantez ile  yaparız. süslü parantez bizim yapmak istediğimiz her işlemi div veya span içerisinde yapmamızı sağlar. 

// yazım şekli {değişkenismi.map ((atamaisim,index) => ( <div></div>))}

// Oluşturduğumuz array içerisini tek tek index index gexiyorum, arrayin her bir elemanını alıyorum atamaisme aktarıyorum , aldığım her elemanın isimlerini yazdırmış olurum. 
export default App;
