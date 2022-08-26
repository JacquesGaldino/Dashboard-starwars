import dashboard from '../../assets/personagens-black.svg';
// import Chart from '../charts/Chart';
import './Main.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faJedi } from "@fortawesome/free-solid-svg-icons";

const Main = () => {
    return (
        <main>
            <div className="main_container">
                <div className="main_title">
                    <img src={dashboard} alt="dashboard" />
                    <div className="main_greeting">
                        <h1>Bem Vindo</h1>
                        <p>Que a força esteja com você</p>
                    </div>
                </div>

                <div className="main_cards">
                    <div className="card">
                        <i><FontAwesomeIcon icon={faJedi} color="lightblue" size="2x"/></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Número de pedidos</p>
                            <span className="font-bold text-title">578</span>
                        </div>
                    </div>

                    <div className="card">
                        <i><FontAwesomeIcon icon={faJedi} color="red" size="2x"/></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Pagamentos</p>
                            <span className="font-bold text-title">R$2.467</span>
                        </div>
                    </div>

                    <div className="card">
                        <i><FontAwesomeIcon icon={faJedi} color="yellow" size="2x"/></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Número de Produtos</p>
                            <span className="font-bold text-title">670</span>
                        </div>
                    </div>

                    <div className="card">
                        <i><FontAwesomeIcon icon={faJedi} color="green" size="2x"/></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Categorias</p>
                            <span className="font-bold text-title">40</span>
                        </div>
                    </div>
                </div>
                <div className="charts">
                    <div className="charts_left">
                        <div className="charts_left_title">

                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Main;

