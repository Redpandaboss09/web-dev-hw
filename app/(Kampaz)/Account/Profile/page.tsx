"use client";
import { redirect } from "next/dist/client/components/navigation";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser } from "../reducer";
import type { RootState, AppDispatch } from "../../store";
import { Button, FormControl } from "react-bootstrap";

type Role = "USER" | "ADMIN" | "FACULTY" | "STUDENT";

type User = {
    _id: string;
    username: string;
    password: string;
    firstName?: string;
    lastName?: string;
    dob?: string;     // ISO date string
    email?: string;
    role?: Role;
};

export default function Profile() {
    const dispatch = useDispatch<AppDispatch>();

    const currentUser = useSelector<RootState, User | null>(
        (state) => state.accountReducer.currentUser
    );

    const [profile, setProfile] = useState<User | null>(null);

    const fetchProfile = () => {
        if (!currentUser) return redirect("/Account/Signin");
        setProfile(currentUser);
    };

    const signout = () => {
        dispatch(setCurrentUser(null));
        redirect("/Account/Signin");
    };

    useEffect(() => {
        fetchProfile();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="wd-profile-screen">
            <h3>Profile</h3>
            {profile && (
                <div>
                    <FormControl
                        id="wd-username"
                        className="mb-2"
                        defaultValue={profile.username}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setProfile({ ...profile, username: e.target.value })
                        }
                    />
                    <FormControl
                        id="wd-password"
                        className="mb-2"
                        defaultValue={profile.password}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setProfile({ ...profile, password: e.target.value })
                        }
                    />
                    <FormControl
                        id="wd-firstname"
                        className="mb-2"
                        defaultValue={profile.firstName}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setProfile({ ...profile, firstName: e.target.value })
                        }
                    />
                    <FormControl
                        id="wd-lastname"
                        className="mb-2"
                        defaultValue={profile.lastName}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setProfile({ ...profile, lastName: e.target.value })
                        }
                    />
                    <FormControl
                        id="wd-dob"
                        className="mb-2"
                        type="date"
                        defaultValue={profile.dob}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setProfile({ ...profile, dob: e.target.value })
                        }
                    />
                    <FormControl
                        id="wd-email"
                        className="mb-2"
                        defaultValue={profile.email}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setProfile({ ...profile, email: e.target.value })
                        }
                    />
                    <select
                        className="form-control mb-2"
                        id="wd-role"
                        value={profile.role ?? "USER"}
                        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                            setProfile({ ...profile, role: e.target.value as Role })
                        }
                    >
                        <option value="USER">User</option>
                        <option value="ADMIN">Admin</option>
                        <option value="FACULTY">Faculty</option>
                        <option value="STUDENT">Student</option>
                    </select>
                    <Button onClick={signout} className="w-100 mb-2" id="wd-signout-btn">
                        Sign out
                    </Button>
                </div>
            )}
        </div>
    );
}
