import { combineReducers, applyMiddleware, createStore, compose } from "redux"; // 'compose' ekledik
import { thunk } from "redux-thunk";
import changeReducer from "./reducers/changeReducer";

//Özetle burada yaptığın şey; uygulamanın tüm "hafızasını" (state) tek bir merkezde toplamak ve bu merkeze bazı "süper güçler" (ara yazılımlar) eklemektir.

const initialState = {};

const reducers = combineReducers({
    change: changeReducer
});

// DevTools için bu güvenli kontrolü kullanmak hatayı kesin çözer:
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducers, 
    initialState, 
    composeEnhancers(applyMiddleware(thunk))
);

export default store;

/*
Adım Adım Ne Yaptın?
combineReducers: Uygulaman büyüdükçe her özellik için (sepet, kullanıcı girişi, ürünler) ayrı reducer'lar yazarsın. Burada bu farklı parçaları birleştirip tek bir ana nesne haline getiriyorsun. Şu an içi boş ({}).

initialState: Uygulama ilk açıldığında verilerin başlangıç değerlerini (örneğin: user: null, items: []) burada tanımlarsın.

thunk: Redux normalde sadece senkron (eşzamanlı) çalışır. redux-thunk kullanarak, store içerisine API istekleri gibi asenkron (gecikmeli) işlemleri dahil etme yeteneği kazandırdın.

composeWithDevTools: Bu çok kritik! Tarayıcındaki (Chrome/Edge) Redux DevTools eklentisinin uygulamanla konuşmasını sağlar. Bu sayede hangi veri ne zaman değişti canlı olarak görebilirsin.
*/