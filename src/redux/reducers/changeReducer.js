
// dışarıdan state ve action 2 parametre  alıcak
// state içerisinde init adında değerimiz olsun ve başlangıçta değeri berkant olsun
const changeReducer = (state = {init:"berkant"},action) => {

    // aldığı parametreleri switch,key ile değerlendirme yapıcam.
    // type benim işlemleri karşılaştırmama yarıyacak
    switch (action.type) {
        case "CHANGE": //eğer action.type "change" ise return et
            
            return{
                init:action.payload // init değerini action.payload ile değiş
            }
    
        default:
            return state // state'i return etmem lazım
    }
}


export default changeReducer;

// bunu store.js içinde combineReducers kısmına koymam lazım çünkü sayfaın her yeride bunu kullanabiliyim. 