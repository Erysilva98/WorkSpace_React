import React from 'react';

function FormularioLogin() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <form className="w-full max-w-sm">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="usuario">
            Usuário
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="usuario"
            type="text"
            placeholder="Usuário"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="senha">
            Senha
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="senha"
            type="password"
            placeholder="Senha"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Login
          </button>
          <a
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="#"
          >
            Esqueceu a senha?
          </a>
        </div>
      </form>
    </div>
  );
}

export default FormularioLogin;
