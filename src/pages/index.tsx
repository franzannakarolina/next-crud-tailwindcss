import Layout from "../components/Layout"
import Tabela from "../components/Tabela"
import Botao from "../components/Botao"
import Cliente from "../core/Cliente"
import Formulario from "../components/Formulario"
import { useState } from "react"

export default function Home() {
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

  const clientes = [
    new Cliente('Ana', 34, 1),
    new Cliente('João', 29, 2),
    new Cliente('Karoline', 29, 3),
    new Cliente('Michel', 40, 4),
    new Cliente('Anna Karolina', 31, 5)
  ]

  function clienteSelecionado(cliente: Cliente) {
    console.log(cliente.nome)
  }

  function clienteExcluido(cliente: Cliente) {
    console.log(`Excluir... ${cliente.nome}`)
  }

  function salvarCliente(cliente: Cliente) {
    console.log(`Salvar... ${cliente.nome}`)
  }

  return (
    <div className={`flex h-screen justify-center items-center bg-gradient-to-r from-purple-500 to-blue-600`}>
      <Layout titulo="Cadastro Simples">
        {visivel === 'tabela' ? (
          <>
            <div className="flex justify-end">
              <Botao cor="green" className="mb-4" onClick={() => setVisivel('form')}>Novo Cliente</Botao>
            </div>
            <Tabela clientes={clientes} clienteSelecionado={clienteSelecionado} clienteExcluido={clienteExcluido} />
          </>
        ) : (
          <Formulario cliente={clientes[0]} cancelado={() => setVisivel('tabela')} clienteMudou={salvarCliente} />
        )}
      </Layout>
    </div>
  )
}
