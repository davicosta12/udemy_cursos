import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const UseEffect = (props) => {
    const [number, setNumber] = useState(1)
    const [fatorial, setFatorial] = useState(1)
    const [identificar, setIdentificar] = useState("Ímpar")

    const calcFatorial = (num) => {
        const n = parseInt(num)
        if(n  < 0) return -1;
        if(n === 0) return 1;
        return calcFatorial(n  - 1) * n; 
    }

    useEffect(function() {
        setFatorial(calcFatorial(number))

    }, [number])

    useEffect(function() { 
        if(fatorial > 1000) document.title = "Eita!!!"
    }, [fatorial])

    useEffect(function() { 
        if(number % 2 === 0) setIdentificar("Par")
        else setIdentificar("Ímpar")
    }, [number])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />

            <SectionTitle title="Exercício #01" />
                <div className="center">  
                    <div>
                        <span className="text">Fatorial: </span>
                        <span className="text red">{fatorial === -1 ? "não existe" : fatorial}</span>  
                    </div>
                    <input type="number" className="input" 
                        value={number}
                        onChange={e => setNumber(e.target.value)}/>
                </div>
    
            <SectionTitle title="Exercício #02" />
                <div className="center">
                    <div>
                        <span className="text">Status: </span>
                        <span className="text red">{identificar}</span> 
                    </div>        
                </div>
       </div>
    )
}

export default UseEffect
