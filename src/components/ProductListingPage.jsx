import { useEffect, useState } from "react";
import { ProductCard } from "./ProductCard";
import { useProducts } from "../context/ProductContext";
import products from "../database/products.json"
export const ProductListingPage=()=>{
    const [loading,setLoading]=useState(false);
    console.log(products)
    const {
        state:{productList, sortBy, filterBy},
        dispatch
    }=useProducts();

    const priceSort=(productList)=>{
        if(sortBy==="PRICE_LOW_TO_HIGH"){
            return [...productList].sort((product1,product2)=>
            Math.floor(Number(product1.price))-Math.floor(Number(product2.price))
            );
        }
        if(sortBy==="PRICE_HIGH_TO_LOW"){
            return [...productList].sort(
                (product1,product2)=>
                Math.floor(Number(product2.price))-
                Math.floor(Number(product1.price))
            );
        }
        return productList;
    };
    const priceSortedData=priceSort(productList,sortBy);
    const getFilteredData=(priceSortedData)=>{
        let filteredData=[...priceSortedData]

        if (filterBy.size.length !== 0) {
            filteredData = filteredData.filter((product) => {
              let flag = false;
              filterBy.size.forEach((size) => {
                if (product.size === size) {
                  flag = true;
                }
              });
              return flag;
            });
          }
        if(filterBy.brand.length!==0){
            filteredData=filteredData.filter((product)=>{
                return filterBy.brand.includes(product.brand)
            });
        }
        if(filterBy.idealFor.length!==0){
            filteredData=filteredData.filter((product)=>{
                return filterBy.idealFor.includes(product.idealFor)
            });
        }
        return filteredData;
    };
    const filteredData=getFilteredData(priceSortedData);

    useEffect(()=>{
        const fetchProducts=async()=>{
            try{
                setLoading(true)
                setTimeout(()=>{
                    dispatch({type:"GET_PRODUCTS",payload:products.products});
                },2000);
            }catch(err){
                console.log(err);
            }finally{
                setLoading(false);
            }
        };
        fetchProducts();
        },[dispatch]);

        return(
            <>
            {loading?(
                <h1>Fetchong products...</h1>
            ):(
                <div className="product-listing-page">
                    {filteredData.map((product)=>(
                        <ProductCard product={product}/>
                    ))}
                </div>
            )}
            </>
        );
};