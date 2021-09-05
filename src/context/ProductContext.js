import { createContext,useContext,useReducer } from "react";
import { productListingPageReducer } from "./productListingPageReducer";

const ProductContext=createContext();


export const ProductProvider=({children})=>{
    const initialState={
        showFullInventory:true,
        sortBy:null,
        filterBy:{size:[],brand:[],idealFor:[]},
        productList:[]
    };
    const [state,dispatch]=useReducer(productListingPageReducer,initialState)
    return (
        <ProductContext.Provider value={{state,dispatch}}>
            {children}
        </ProductContext.Provider>
    )
}


export const useProducts=()=>{
    return useContext(ProductContext);
}