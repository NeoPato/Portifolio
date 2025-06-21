import { useState } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Skills } from './components/Skills'
import { Contatc } from './components/Contatc'
import { Footer } from './components/Footer'

function App() {

  return (
    <>
      <section>
            <div className="hero">
              <div className="hero-content">
                <h1>Bem-Vindo ao meu Portfólio</h1>
                <p>Meu Nome é Gabriel Sena</p>
                <p>
                  Sou estudante de Engenharia de Software, com facilidade para trabalho em equipe, 
                  boa comunicação e empatia. Estou em constante busca por aprendizado e aprimoramento das 
                  minhas habilidades.
                </p>
                <p>
                  Tive contato com alguns projetos, onde pude desenvolver noções em 
                  programação e resolução de problemas. Estou aberto a aprender com novas experiências.
                </p>
                <button>Veja mais informações</button>
              </div>
            </div>
          </section>
    </>
  )
}

export default App
