import { useState } from "react"
import { Input } from "../components/input"
import { Button } from "../components/Button"

export function SignUp(){
    const [ name, setName ] = useState("")
    const [ email, setEmail ] = useState("")
    const  [ password, setPassword ]  = useState("")
    const [ passwordConfirm, setpasswordConfirm ] = useState("")
    const [ isLoading, setIsLoading ] = useState(false)


    function onSubmit(e: React.FormEvent){
        e.preventDefault()
        console.log(name, email, password, passwordConfirm)
    }

    return <form onSubmit={onSubmit} className="w-full flex flex-col gap-4">
       <Input 
            required 
            legend="Name"  
            placeholder="Seu nome"
            onChange={(e) => setName(e.target.value)}
        />
       <Input 
            required 
            legend="Senha" 
            type="password" 
            placeholder="Sua senha aqui"
            onChange={(e) => setPassword(e.target.value)}
        />

               <Input 
            required 
            legend="Confirme seu senha" 
            type="password" 
            placeholder="Sua senha aqui"
            onChange={(e) => setpasswordConfirm(e.target.value)}
        />

        <Button type="submit" isLoading={isLoading}>Cadastrar</Button>

        <a href="/" className="text-sm font-semibold text-gray-100 mt-10 mb-4 text-center hover:text-green-800 transition ease-linear">Ja tenho uma conta</a>
    </form>
}