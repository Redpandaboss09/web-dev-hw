"use client";
import * as client from "../client";
import Link from "next/link";
import { redirect } from "next/dist/client/components/navigation";
import { setCurrentUser } from "../reducer";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../store";
import { useState } from "react";
import * as db from "../../Database";
import { FormControl, Button } from "react-bootstrap";

type User = {
    _id: string;
    username: string;
    password: string;
    firstName?: string;
    lastName?: string;
    dob?: string;
    email?: string;
    role?: "USER" | "ADMIN" | "FACULTY" | "STUDENT";
};

type Credentials = {
    username: string;
    password: string;
};

export default function Signin() {
    const dispatch = useDispatch<AppDispatch>();

    const [credentials, setCredentials] = useState<Credentials>({
        username: "",
        password: "",
    });

    const signin = async () => {
        const users = db.users as unknown as User[];
        const user = await client.signin(credentials);
        if (!user) return;
        dispatch(setCurrentUser(user));
        redirect("/Dashboard");
    };

    return (
        <div id="wd-signin-screen">
            <h1>Sign in</h1>
            <FormControl
                value={credentials.username}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setCredentials({ ...credentials, username: e.target.value })
                }
                className="mb-2"
                placeholder="username"
                id="wd-username"
            />
            <FormControl
                value={credentials.password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setCredentials({ ...credentials, password: e.target.value })
                }
                className="mb-2"
                placeholder="password"
                type="password"
                id="wd-password"
            />
            <Button onClick={signin} id="wd-signin-btn" className="w-100">
                Sign in
            </Button>
            <Link id="wd-signup-link" href="/Account/Signup">
                Sign up
            </Link>
        </div>
    );
}
