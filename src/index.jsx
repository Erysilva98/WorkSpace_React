import React from 'react';
import ReactDOM from 'react-dom/client';
import Timer from './components/Exemplo1'

class HelloWord extends React.Component {
    render()
    {
        return <h1>Olá {this.props.nome}</h1>
    }
}

class Pagina01 extends React.Component{
    render(){
        return (
            <>
                <HelloWord nome={this.props.nome[0]}></HelloWord>
                <HelloWord nome={this.props.nome[1]}> </HelloWord>
            </>
        );
    }
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

    <div>
        <Timer start={0} ms={1000}></Timer>
        <Timer start={0} ms={500}></Timer>
    </div>

);