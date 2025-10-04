// app/Account/Profile.tsx
import Link from "next/link";
import { FormControl } from "react-bootstrap";

export default function Profile() {
    return (
        <div id="wd-profile-screen">
            <h1>Profile</h1>
            <FormControl id="wd-username" defaultValue="alice" placeholder="username" className="mb-2" />
            <FormControl id="wd-password" defaultValue="123" placeholder="password" type="password" className="mb-2" />
            <FormControl id="wd-firstname" defaultValue="Alice" placeholder="First Name" className="mb-2" />
            <FormControl id="wd-lastname" defaultValue="Wonderland" placeholder="Last Name" className="mb-2" />
            <FormControl id="wd-dob" type="date" placeholder="mm/dd/yyyy" className="mb-2" />
            <FormControl id="wd-email" defaultValue="alice@wonderland.com" type="email" className="mb-2" />
            <select id="wd-role" defaultValue="USER" className="form-select mb-3">
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
                <option value="FACULTY">Faculty</option>
                <option value="STUDENT">Student</option>
            </select>
            <Link
                id="wd-signout-btn"
                href="/Account/Signin"
                className="btn btn-danger w-100"
            >
                Signout
            </Link>
        </div>
    );
}
