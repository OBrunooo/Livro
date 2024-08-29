import Styles from "./Title.module.css"

const Title = () => {
    return (
        <>
            <div className={Styles.container + " row"}>
                <div className="col-2">
                    <h2>Comprar</h2>
                </div>
                <div className="col-9">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit molestias labore fugit eos vitae laboriosam? Aspernatur, itaque ullam. Unde, dolores obcaecati eaque officia ipsum eius. Fugit soluta eveniet quaerat itaque.</p>
                </div>
                <div className="col-1"></div>
            </div>
        </>
    )
}

export default Title