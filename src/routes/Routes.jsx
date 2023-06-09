/* eslint-disable no-unused-vars*/
import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../layouts/Pages/Home/Home/Home";
import Category from "../layouts/Pages/Home/Category/Category";
import NewsLayout from "../layouts/NewsLayout";
import News from "../layouts/Pages/News/News/News";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
        {
            path:'/',
            element:<Category></Category>,
            loader: ()=> fetch('http://localhost:5000/news')
        },
        {
            path:'/category/:id',
            element:<Category></Category>,
            loader:({params})=> fetch(`http://localhost:5000/categories/${params.id}`)
        }
    ]
  },
  {
    path: 'news',
    element:<NewsLayout></NewsLayout>,
    children:[
      {
        path: ':id',
        element: <News></News>
      }
    ]
  }
]);
export default router;
