export const productListingPageReducer=(state,action)=>{
    switch(action.type){
        case "GET_PRODUCTS":{
            return {
                ...state,
                productList: action.payload,
            };
        }
        case "PRICE_LOW_TO_HIGH":{
            return{
                ...state,
                sortBy:"PRICE_LOW_TO_HIGH"
            }
        }
        case "PRICE_HIGH_TO_LOW": {
            return {
              ...state,
              sortBy: "PRICE_HIGH_TO_LOW",
            };
          }
          case "FILTER_BY_SIZE":
              console.log(action.payload)
              let newSizeArr;
              if(state.filterBy.size.includes(action.payload)){
                  newSizeArr=state.filterBy.size.filter(
                      (size)=>size!==action.payload
                  );
              }else{
                  newSizeArr=[...state.filterBy.size,action.payload]
              }
              return {
                  ...state,
                  filterBy:{...state.filterBy, size:newSizeArr}
              }
        case "FILTER_BY_BRAND":{
            let newBrandArr;
            if(state.filterBy.brand.includes(action.payload)){
                newBrandArr=state.filterBy.brand.filter(
                    (brand)=>brand!==action.payload
                );
            }else{
                newBrandArr=[...state.filterBy.brand,action.payload];
            }
            return{
                ...state,
                filterBy:{...state.filterBy,brand:newBrandArr}
            }
        }
        case "FILTER_BY_IDEAL_FOR":{
            let newIdealFor;
            if(state.filterBy.idealFor.includes(action.payload)){
                newIdealFor=state.filterBy.idealFor.filter((idealFor)=>idealFor!==action.payload)
            }else{
                newIdealFor=[...state.filterBy.idealFor,action.payload]
            }
            return {
                ...state,
                filterBy:{...state.filterBy,idealFor:newIdealFor}
            }
        }
          case "CLEAR_FILTERS":{
              return{
                  ...state,
                  showFullInventory:true,
                  filterBy:{size:[],brand:[],idealFor:[]},
                  sortBy:null
              }
          }
        default:
            return state
    }
}