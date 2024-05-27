import { createContext } from "react";

import menFashion from '../asset/banner/men.webp'
import womenFashion from  '../asset/banner/girl.jpg'
import kidsFashion from '../asset/banner/kid.jpg'
export const FeatureCategoryContext = createContext([
    {
        name: "Men's Fashion",
        image: menFashion,
        url: '/category/men',
        id: 1
    },
    {
        name: "Women's Fashion",
        image: womenFashion,
        url: '/category/women',
        id: 2
    },
    {
        name: "Kids Fashion",
        image: kidsFashion,
        url: '/category/kids',
        id: 3
    }
])