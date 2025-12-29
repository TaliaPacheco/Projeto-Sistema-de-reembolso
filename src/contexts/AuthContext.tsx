import { createContext, useContext, useState, type ReactNode } from "react"

interface User {
  id: string
  name: string
  email: string
  role: "employee" | "manager"
}

interface AuthContextType {
  user: User | null
  signIn: (email: string) => void
  signUp: (name: string, email: string) => void
  signOut: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)

  const signIn = (email: string) => {
    //Employee se email contiver "employee", Manager caso contrário
    const role = email.includes("employee") ? "employee" : "manager"
    setUser({
      id: "123",
      name: "Usuário",
      email,
      role,
    })
  }

  const signUp = (name: string, email: string) => {
    setUser({
      id: Math.random().toString(),
      name,
      email,
      role: "employee",
    })
  }

  const signOut = () => {
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth deve ser usado dentro do AuthProvider")
  }
  return context
}
