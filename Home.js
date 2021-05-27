Home.js:-
import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/images/img2.png";
import Common from "./Common";

const Home = () => {

    return (
<>
<Common  name="Grow your Bussiness with " imgsrc={web} visit="/service" btname="Get started" />

</>
    );
};

export default Home;

