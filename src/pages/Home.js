import React from 'react'
import Poster from '../components/Poster'

function Home(){
    return(
        <div>
            
        <div className="poster-container">
          <div className="posters">
            <Poster
              image="http://fast-track.asia/wp-content/uploads/2019/05/%EC%82%AC%EC%A7%84%EC%9E%90%EB%A3%8C-%ED%8C%A8%EC%8A%A4%ED%8A%B8%ED%8C%8C%EC%9D%B4%EB%B8%8C-%EC%84%9C%EC%9A%B8%EC%88%B2%EC%A0%90-1-384x253.jpg"
              desc="공유오피스 시장점유율을 임대차면적이나 지점수만으로 판단할 수 없는 이유"/>
            <Poster
              image="http://fast-track.asia/wp-content/uploads/2020/01/1-384x253.png"
              desc="마스터클래스(MasterClass) vs. 콜로소(Coloso)"/>
          </div>
          
          <div className="posters">
            <Poster
              image="http://fast-track.asia/wp-content/uploads/2020/01/1-384x253.png"
              desc="마스터클래스(MasterClass) vs. 콜로소(Coloso)"/>
            <Poster
              image="http://fast-track.asia/wp-content/uploads/2020/01/1-384x253.png"
              desc="마스터클래스(MasterClass) vs. 콜로소(Coloso)"/>
          </div>

          <aside className="news">
            <h1>NEWS</h1>
          </aside>
        </div>
    </div>
    )
}

export default Home