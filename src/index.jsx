import React from 'react';
import ReactDOM from 'react-dom/client';

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
root.render(<Pagina01 nome={["Erimilson Silva","xxxxx xxxxx"]}/>);