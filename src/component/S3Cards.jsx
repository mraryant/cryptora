
import '../styles/S3Cards.css'
import S3Logo from '../assets/cc.svg'
// import { Link } from 'react-router-dom'

const S3Cards = (props) => {
  return (
    <>
      <div className="parent">
        <div className="card">
          <div className="logo">


            <span className="circle circle3"></span>
            <span className="circle circle4"></span>
            <span className="circle circle5">
              <img src={S3Logo} style={{ width: 30, height: 30 }} alt="I am Just comming ^_^" />
            </span>

          </div>
          <div className="glass"></div>
          <div className="content">
            <span className="title">{props.title}</span>
            <span className="text">{props.text}</span>
          </div>

          <div className="bottom">


            <div className="view-more">
              <button className="view-more-button" style={{ color: 'white' }}>  View more</button>
              <svg className="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"></path></svg>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default S3Cards