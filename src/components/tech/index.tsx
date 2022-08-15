import './style.css';

export const Technologies = () => {
    return (

        <div className='all'>
            <div className='all2'>
                <h2 className='title'>Tecnologias e Bibliotecas</h2>
                <div className='techs'>
                    <div className='fat'>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                            className='imageIcon'
                        />
                    </div>
                    <div className='fat fatTs'>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                            className='imageIcon'
                        />
                    </div>
                    <div className='fat fatCss'>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                            className='imageIcon'
                        />
                    </div>
                    <div className='fat fatBts'>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
                            className='imageIcon'
                        />
                    </div>
                    <div className='fat fatStc'>
                        <img src="data:image/png;base64,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"
                            className='imageIcon'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}