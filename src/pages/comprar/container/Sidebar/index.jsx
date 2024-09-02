import { useState } from "react"
import Styles from "./Sidebar.module.css"


const Sidebar = () => {
    const [asas, setAsas] = useState(true)

    function handleTchauClick () {
        setAsas(!asas)
    }
    return (
        <>
            <div className={Styles.container + " row"}>
                <h2>{asas ? ('Filtros') : ('tchau')}</h2>
                <input className={Styles.inputText} type="text"/>
                <div className={Styles.filtro} >
                    <p className={Styles.filtroTitle} >Gênero</p>
                    <div className={Styles.divCheckBox} >
                        <input className={Styles.filtroInput} id="literatura" type="checkbox" onClick={handleTchauClick} value='Literatura'/>
                        <label className={Styles.filtroLabel} htmlFor="literatura">Literatura</label>
                    </div>
                    <div className={Styles.divCheckBox} >
                        <input className={Styles.filtroInput} id="ficcao" type="checkbox" onClick={handleTchauClick} value='ficcao'/>
                        <label className={Styles.filtroLabel} htmlFor="ficcao">Ficção</label>
                    </div>
                    <div className={Styles.divCheckBox} >
                        <input className={Styles.filtroInput} id="romance" type="checkbox" onClick={handleTchauClick} value='romance'/>
                        <label className={Styles.filtroLabel} htmlFor="romance">Romance</label>
                    </div>
                    <div className={Styles.divCheckBox} >
                        <input className={Styles.filtroInput} id="distopia" type="checkbox" onClick={handleTchauClick} value='distopia'/>
                        <label className={Styles.filtroLabel} htmlFor="distopia">Distopia</label>
                    </div>
                    <div className={Styles.divCheckBox} >
                        <input className={Styles.filtroInput} id="guerra" type="checkbox" onClick={handleTchauClick} value='guerra'/>
                        <label className={Styles.filtroLabel} htmlFor="guerra">Guerra</label>
                    </div>
                    <div className={Styles.divCheckBox} >
                        <input className={Styles.filtroInput} id="biogragia" type="checkbox" onClick={handleTchauClick} value='biogragia'/>
                        <label className={Styles.filtroLabel} htmlFor="biogragia">Biogragia</label>
                    </div>
                    <div className={Styles.divCheckBox} >
                        <input className={Styles.filtroInput} id="literaturaInfantil" type="checkbox" onClick={handleTchauClick} value='literaturaInfantil'/>
                        <label className={Styles.filtroLabel} htmlFor="literaturaInfantil">Literatura Infantil</label>
                    </div>
                    <div className={Styles.divCheckBox} >
                        <input className={Styles.filtroInput} id="conto" type="checkbox" onClick={handleTchauClick} value='conto'/>
                        <label className={Styles.filtroLabel} htmlFor="conto">Conto</label>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Sidebar