import React from 'react';
import {Link } from 'react-router-dom';
import './styles.css';
import logoImg from '../../assets/logo.svg';
import { FiArrowLeft } from 'react-icons/fi';

export default function NewIncident(){
    return (

    <div className="new-incident-container">
    <div className="content">
        <section>
            <img src={logoImg} alt="Be The Hero"/>
            
            <h1>Cadastrar novo caso</h1>
            <p>Faça seu cadastro, entra na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>
            
            <Link className="back-link" to="/profile">
                <FiArrowLeft size={16} color ="#E02041"></FiArrowLeft>
                Voltar para home
            </Link>
        

        </section>
        <form>
        <input  placeholder="Título do caso"/>
        <textarea placeholder="Descrição"/>
        <input  placeholder="Valor em Reais"/>
        

        <button className="button" type="submit">Cadastrar

        </button>
        

        </form>
    </div>
</div>
    );
}