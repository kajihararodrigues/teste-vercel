import "./Login.css";

function Login() {
    return (
        <div className="login-container">

            {/* LOGO NO CANTO SUPERIOR DIREITO */}
            <img
                src="https://dummyimage.com/140x50/008542/ffffff&text=EMPRESA"
                alt="Logo"
                className="logo-top"
            />

            <div className="login-box">

                <h1 className="titulo">
                    Sistema de Requisição de Materiais
                </h1>

                <h2 className="subtitulo">
                    INFRAESTRUTURA - RECAP
                </h2>

                <form className="form">
                    <input
                        type="text"
                        placeholder="Usuário"
                        className="input"
                    />

                    <input
                        type="password"
                        placeholder="Senha"
                        className="input"
                    />

                    <button type="submit" className="botao">
                        Entrar
                    </button>

                    <span className="esqueci">
                        Esqueci minha senha
                    </span>
                </form>

            </div>

        </div>
    );
}

export default Login;