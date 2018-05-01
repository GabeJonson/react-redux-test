import React from "react";
import { Link } from "react-router-dom";
import Create from "../components/Create";
import { Add } from "../UI/Add";

const CreateRoute = () => (
    <div>
        <Create />
        <Add width="auto" padding="0 20px">
            <Link to="/">Home</Link>
        </Add>
    </div>
);

export default CreateRoute;
