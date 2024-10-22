import imgHome from '../assets/images/img1.png'

const Banner = () => {
    return (
            <div className='img-container'>
            <img className="imghome" src={imgHome} alt="imgbackground" />
            <p>Chez vous, partout et ailleurs</p>
            </div>
    )

}

export default Banner