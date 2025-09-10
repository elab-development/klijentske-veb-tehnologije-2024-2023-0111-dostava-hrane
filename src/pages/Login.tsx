import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import FormField from "../components/FormField";
import Button from "../components/Button";

export default function Login() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const { login } = useAuth();
    const navigate = useNavigate();
    const loc = useLocation();
    const from = (loc.state as any)?.from || "/";

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        login(email, name || "User");
        navigate(from, { replace: true });
    };

    return (
        <div style={{ maxWidth: 420, margin: "0 auto" }}>
            <h2>Login</h2>
            <form onSubmit={onSubmit}>
                <FormField label="Email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                <FormField label="Full name" value={name} onChange={(e) => setName(e.target.value)} />
                <Button label="Sign in" type="submit" />
            </form>
        </div>
    );
}
