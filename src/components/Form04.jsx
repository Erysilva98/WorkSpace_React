import React from 'react';

function Form04(props) {
  const { change, student } = props;
  const {
    enrollment = '',
    cpf = '',
    name = '',
    motherName = '',
    fatherName = '',
    birthday = '',
    gender = 'Masculino',
    email = '',
    cellphone = '',
    githubProfile = '',
    campusName = '',
    courseName = '',
    currentPeriod = '',
    group = '',
  } = student;

  function onSubmit(e) {
    e.preventDefault();
    console.log(student);
  }

  return (
    <div className="border-2 bg-branco border-gray-300 rounded-lg h-full w-full sm:h-auto sm:w-80 md:w-96  p-8">
      <div>
        <img
          className="mx-auto h-auto w-auto"
          src="/img/mouratech.png"
          alt="OK"
        />
        <h2 className="mt-6 text-center text-2xl font-bold tracking-tight text-preto">
          Confirme suas informações
        </h2>
      </div>
      <form className="mt-8 space-y-6" onSubmit={onSubmit}>
        <div className="-space-y-px rounded-md shadow-sm">
          <p>
            Matrícula:&nbsp;
            <strong>{enrollment}</strong>
          </p>
          <p>
            CPF:&nbsp;
            <strong>{cpf}</strong>
          </p>
          <p>
            Nome:&nbsp;
            <strong>{name}</strong>
          </p>
          <p>
            Nome da Mãe:&nbsp;
            <strong>{motherName}</strong>
          </p>
          <p>
            Nome do Pai:&nbsp;
            <strong>{fatherName}</strong>
          </p>
          <p>
            Data de Nascimento:&nbsp;
            <strong>{birthday}</strong>
          </p>
          <p>
            Sexo:&nbsp;
            <strong>{gender}</strong>
          </p>
          <p>
            E-mail:&nbsp;
            <strong>{email}</strong>
          </p>
          <p>
            Celular:&nbsp;
            <strong>{cellphone}</strong>
          </p>
          <p>
            Perfil do GitHub:&nbsp;
            <strong>{githubProfile}</strong>
          </p>
          <p>
            Campus:&nbsp;
            <strong>{campusName}</strong>
          </p>
          <p>
            Curso:&nbsp;
            <strong>{courseName}</strong>
          </p>
          <p>
            Período:&nbsp;
            <strong>{currentPeriod}</strong>
          </p>
          <p>
            Turma:&nbsp;
            <strong>{group}</strong>
          </p>
        </div>

        <div className="flex justify-between">
          <button
            type="button"
            onClick={() => change(3)}
            className="group relative flex w-24 justify-center rounded-md bg-azulClaro py-2 px-3 text-sm font-semibold text-white hover:bg-azulClaro/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-azulClaro cursor-pointer"
          >
            Anterior
          </button>
          <button
            type="submit"
            className="group relative flex w-24 justify-center rounded-md bg-azulEscuro py-2 px-3 text-sm font-semibold text-white hover:bg-azulEscuro/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-azulEscuro cursor-pointer"
          >
            Salvar
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form04;
