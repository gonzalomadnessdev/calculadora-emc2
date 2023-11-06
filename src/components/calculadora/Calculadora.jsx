//import React from 'react';
import { useState } from 'react'
import logo from '../../assets/emc2.jpg'

function Calculadora() {
    const [m, setM] = useState('');
    const c = 3e8;

    const calculate = () => {
        return m * (c * c)
    }

    return (
        <>
            <div style={{ marginBottom: '25px', }}>
                <img src={logo} width={400} />
            </div>
            <div style={{ marginBottom: '5px', }}>E=mc²</div>
            <form style={{ marginRight: '5px', }}>
                <div>
                    <label htmlFor="name-field" style={{ marginRight: '5px', }}>
                        m (kg):
                    </label>
                    <input
                        id="name-field"
                        value={m}
                        onChange={event => {
                            setM(event.target.value);
                        }}
                        type='number'
                    />

                </div>
            </form>

            <p>
                <strong style={{ marginRight: '11px', }}>E =</strong>           
                {calculate().toPrecision(3)} J
            </p>
        </>
    );
}

export default Calculadora