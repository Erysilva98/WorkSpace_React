import React from 'react';
class Timer extends React.Component {

    constructor(props)
    {
        super(props);
        this.state = {
            seconds: 0,
        };
    }

    contar()
    {
        this.setState( 
            (state) => ({ seconds: state.seconds + 1}) 
        );
    }

    startStop()
    {
        if(this.interval)
        {
            clearInterval(this.interval);
            this.interval = null;
        }
        else
        {
            this.interval = setInterval( () => this.contar(), 1000);
        }
    }

    zero()
    {
        this.setState( () => ({
            seconds: 0,
        }));
    }

    visor(){
        const { seconds } = this.state;
        return `${seconds}`;
    }

    render () {
        return (
            <div>
                <div className=" bg-gray-400 rounded-b-2xl border-4 border-preto w-80 p-4 gap-4 flex flex-col m-4">
                    <div className='bg-preto border-black rounded-xl flex felx-col justify-center items-center'>
                        <h1 className="text-5xl text-white cronometro">
                            {this.visor()}
                        </h1>
                    </div>                    
                </div>
                <div className="flex flex-row justify-arroubd">
                    <div className="flex flex-col justify-center items-center">
                        <p className='font-bold text-sm'>Start/Stop</p>
                        <input type="button" value="" onClick={ () => this.startStop() } className="bg-azulEscuro houver:bg-azulEscuro/80 w-10 h-10 rounded-full cursor-pointer"/>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <p className="font-bold text-sm">Reset</p>
                        <input type="button" value="" onClick={() => this.zero()} className="bg-red-800 hover:bg-red-800/80 w-10 h-10 rounded-full cursor-pointer" />
                    </div>
                </div>
            </div>
            
        );
    }
}

export default Timer;



