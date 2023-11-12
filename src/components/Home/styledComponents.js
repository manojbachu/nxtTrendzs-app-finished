import styled from 'styled-components'

export const HomeContainer = styled.div`
  width: 100%;
  background-color: ${props =>
    props.mode === 'darkMode' ? '#181818' : '#f9f9f9'};
  padding: 20px;
`

export const FeaturesContainer = styled.div`
  width: 100px;
`

export const VideoSection = styled.div`
  width: 100%;
`

export const PremiumContainer = styled.div`
  width: 100%;
  padding: 10px 20px 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  background-color: #ffffff;
  @media (min-width: 767px) {
    background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
    background-size: cover;
  }
`

export const PremiumSubContainer = styled.div``

export const NxtWatchLogo = styled.img`
  width: 150px;
  @media (max-width: 767px) {
    width: 100px;
  }
`
export const PremiumPara = styled.p`
  font-weight: 500;
  font-family: 'Roboto';
  font-size: 20px;
  color: #475569;
  line-height: 35px;
  max-width: 420px;
  @media (max-width: 767px) {
    font-size: 18px;
  }
`

export const GetItNowBtn = styled.button`
  background: none;
  font-weight: 550;
  font-size: 16px;
  padding: 8px 12px 8px 12px;
  margin-top: 10px;
  @media (max-width: 767px) {
    font-size: 12px;
    margin-top: 5px;
  }
`
export const PremiumAddRemoveBtn = styled.button`
  border: none;
  outline: none;
  background: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 26px;
`
export const VideosContainer = styled.div`
  padding: 10px 20px 10px 20px;
`

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
`

export const SearchInput = styled.input`
  border: 2px solid #ebebeb;
  outline: none;
  width: 350px;
  height: 38px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  padding-left: 14px;
  padding-right: 14px;
  @media (max-width: 767px) {
    width: 100%;
  }
`

export const SearchButton = styled.button`
  background-color: #f1f1f1;
  height: 38px;
  border: 2px solid #ebebeb;
  padding: 5px 30px 5px 30px;
  color: #475569;
  font-size: 16px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  cursor: pointer;
`
export const VideoListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`
