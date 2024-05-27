import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import Landing from "../components/Landing/Landing";
import FeaturedItems from "../components/Featured/Items/FetauredItems";
import FeaturedCategories from "../components/Featured/Categories/FeaturedCategories";
import { TabTitle } from "../utils/General";


const Home = () => {
    const [ featuredItems, setFeaturedItems ] = useState()
    TabTitle("Home - Let'sShop");
    useEffect(()=>{
        axios.get("http://localhost:3000/api/items").then(res=>{
          
            setFeaturedItems(res.data)
           
        
        })
    },[])
    console.log(featuredItems)

    return ( 
        <Fragment>
            <Landing />
            <FeaturedCategories />
            <FeaturedItems items={featuredItems}/>
        </Fragment>
    );
}
 
export default Home;