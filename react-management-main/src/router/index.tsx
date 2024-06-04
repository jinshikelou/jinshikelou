/* eslint-disable react-refresh/only-export-components */
import Home from "@/views/Home";
import Login from "@/views/Login";
import React, { lazy } from "react";
import { Navigate } from "react-router-dom";

// const About = lazy(() => import("../views/About"))
// const User = lazy(() => import("../views/User"))
const Page1 = lazy(() => import("../views/Page1"))
const Page2 = lazy(() => import("../views/Page2"))

const loadingComponent = (comp: JSX.Element) => (
    <React.Suspense fallback={<div>loading....</div>}>
        {comp}
    </React.Suspense>
)

const routes = [
    {
        path: "/",
        element: <Navigate to={'/learn'} />
    },
    {
        path: "/",
        element: <Home />,
        children: [
            {
                path: "/learn",
                element: loadingComponent(<Page1 />),
            },
            {
                path: "learn/installation",
                element: loadingComponent(<Page2 />)
            },
            {
                path: "learn/describing-the-ui",
                element: loadingComponent(<Page1 />)
            },
            {
                path: "learn/adding-interactivity",
                element: loadingComponent(<Page2 />)
            },
            {
                path: "learn/tutorial-tic-tac-toe",
                element: loadingComponent(<Page1 />),
            },
            {
                path: "learn/thinking-in-react",
                element: loadingComponent(<Page2 />),
            }

        ]
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "*",
        element: <Navigate to={'/learn'} />
    }
]
// const routes = [
//     {
//         path: "/",
//         element: <Navigate to={'/home'} />
//     },
//     {
//         path: "/home",
//         element: <Home />
//     },
//     {
//         path: "/about",
//         element: loadingComponent(<About />)
//     },
//     {
//         path: "/user",
//         element: loadingComponent(<User />)
//     }
// ]

export default routes