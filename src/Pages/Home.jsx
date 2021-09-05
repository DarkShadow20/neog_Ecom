import { ProductListingPage } from "../components/ProductListingPage"
import { SortAndFilter } from "../components/SortAndFilter"
import { Header } from "../components/Header"

export const Home=()=>{
    return(
        <>
        <Header/>
        <div className="home-page-wrapper">
            <SortAndFilter/>
            <ProductListingPage/>
        </div>
        </>
    )
}