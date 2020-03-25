import React, { useState }from 'react';
import {Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import './styles.css';
import api from '../../services/api';

import logoImg from '../../assets/logo.svg';

export default function Register(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

   async function handleRegister(e){
        e.preventDefault();

        const data = {
            name, 
            email, 
            whatsapp,
            city,
            uf,
        };
        try{
            const response = await api.post('ongs',data);

            alert(`Seu ID de acesso:  ${response.data.id}`);
        }
        catch(err){
            alert('Erro no cadastro, tente novamente');
        }
    }
    return ( 
  
    <div className="register-container">
        <div className="content">
            <section>
                <img src={logoImg} alt="Be The Hero"/>
                <Link className="back-link" to="/">
                    <FiArrowLeft size={16} color ="#E02041"></FiArrowLeft>
                    Não tenho cadastro
                </Link>
            <p>Faça seu cadastro, entra na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>

            </section>
            <form onSubmit= {handleRegister}>
                <input 
                    value={name} 
                    placeholder="Nome da ONG"
                    onChange= { e => setName(e.target.value)} />
                <input 
                    value={email} 
                    placeholder="Email"
                    onChange= { e => setEmail(e.target.value)}/>
                <input 
                    value={whatsapp} 
                    placeholder="Whatsapp"
                    onChange= { e => setWhatsapp(e.target.value)}/>
                <div className="input-group">
                    <input 
                        value={city} 
                        placeholder="Cidade"
                        onChange= { e => setCity(e.target.value)}/>
                    <input
                        value={uf} 
                        placeholder="UF"
                        onChange= { e => setUf(e.target.value)} style = {{ width: 80 }}/>

                </div>

                <button className="button" type="submit">Cadastrar

                </button>
                

            </form>
        </div>
    </div>
    );
}