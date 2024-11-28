import {Card, CardHeader, CardTitle, CardDescription, CardContent} from "@/components/ui/card"
import {Label} from "@/components/ui/label"
import {Input} from "@/components/ui/input"
import {Button} from "@/components/ui/button"
import {useState} from "react";


export default function Login() {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")

    async function handleSubmit(event) {
        event.preventDefault()
        const requestBody = {
            username: userName,
            password: password
        }
        await fetch("http://localhost:8080/auth/login", {
            method: "POST",
            body: JSON.stringify(requestBody),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(
            async (response) => {
                if (response.ok) {
                    const token = await response.text()
                    localStorage.setItem("jwtToken", token) //Todo lav om til at bruge httpOnly cookie
                } else if(response.status === 403) {
                    console.error("Login failed")
                }
            }
        ).catch((error) => {
            console.error("Error during login:", error)
        })
    }
    return (
        <Card className="mx-auto max-w-sm">
            <CardHeader className="space-y-1">
                <CardTitle className="text-2xl font-bold">Login</CardTitle>
                <CardDescription>Enter your username and password to login to your account</CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit}>
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="email">Username</Label>
                            <Input id="email" type="text" required
                                   value={userName}
                                   onChange={(e) => setUserName(e.target.value)}/>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <Input id="password" type="password" required
                                   value={password}
                                   onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                        <Button type="submit" className="w-full bg-[#00693c]">
                            Login
                        </Button>
                    </div>
                </form>
            </CardContent>
        </Card>
    )
}