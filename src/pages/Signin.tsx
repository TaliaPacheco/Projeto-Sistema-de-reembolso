import { useState } from "react"
import { useNavigate } from "react-router"
import { useAuth } from "../contexts/AuthContext"
import { Input } from "../components/input"
import { Button } from "../components/Button"

export function SignIn(){
    const [email, setEmail ] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const { signIn } = useAuth()

    function onSubmit(e: React.FormEvent){
        e.preventDefault()
        signIn(email)
        navigate("/")
    }

    return <form onSubmit={onSubmit} className="w-full flex flex-col gap-4">
       <Input 
            required 
            legend="Email" 
            type="email" 
            placeholder="Seu@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />
       <Input 
            required 
            legend="Senha" 
            type="password" 
            placeholder="Sua senha aqui"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />

        <Button type="submit">Entrar</Button>

        <a href="/signup" className="text-sm font-semibold text-gray-100 mt-10 mb-4 text-center hover:text-green-800 transition ease-linear">Criar conta</a>
    </form>
}