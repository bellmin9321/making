import React from 'react'
import './Footer.css'

function Footer(props) {
  return(
    <div className="footer">
        <div className="container">
            <div className="footer-sidebars">

              <div className="bar">
                <div className="widget-title">
                  <div className="title"><h2>FAST TRACK ASIA</h2></div>
                    <p className="text">패스트트랙아시아는 새로운 스타트업을 창조하는</p>
                    <p className="text">컴퍼니빌더(Company Builder)형 스타트업 지주회사입니다.</p>
                    <p className="text">Copyright ⓒ 2017 FAST TRACK ASIA Co., Ltd</p>
                </div>
              </div>
                
              <div className="bar"><h2>CONTACT</h2>
                <p className="text">서울시 강남구 테헤란로 419 강남파이낸스프라자 15층</p>
                <p className="text">15F, Teheran-ro 419, Gangnam-gu, Seoul</p>
                <p className="text">Tel) 02.501.6241</p>
                <p className="text">Fax) 02.539.5410</p>
              </div>

              <div className="bar"><h2>공식 페이스북</h2></div>
           
          
       </div>
      </div>
    </div>
  ) 
}

export default Footer