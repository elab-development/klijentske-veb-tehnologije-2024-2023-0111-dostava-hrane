import Button from "../components/Button";
import FormField from "../components/FormField";

export default function Home() {
    return (
        <div>
            <h2>Home page</h2>
            <FormField label="Your email" type="email" placeholder="you@example.com" />
            <Button label="Click me" onClick={() => alert("Button radi!")} />
        </div>
    );
}
