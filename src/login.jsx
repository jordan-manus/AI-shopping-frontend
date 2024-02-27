import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";


export function Login() {


    return (
        <>
            {error && <Text c="red">{error}</Text>}
            <div>
                <label>Username: </label>
                <input />
            </div>

            <div>
                <label>Password: </label>
                <input />
            </div>
        </>
    )
}