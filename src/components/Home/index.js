import {Component} from 'react'
import Cookies from 'js-cookie'

import {AiOutlineSearch} from 'react-icons/ai'

import {GrFormClose} from 'react-icons/gr'
import {
  HomeContainer,
  FeaturesContainer,
  VideoSection,
  PremiumContainer,
  PremiumSubContainer,
  NxtWatchLogo,
  PremiumPara,
  GetItNowBtn,
  PremiumAddRemoveBtn,
  VideosContainer,
  SearchContainer,
  SearchInput,
  SearchButton,
  VideoListContainer,
} from './styledComponents'

import Header from '../Header'
import VideoItem from '../VideoItem'

import AppContext from '../../context/AppContext'

const apiConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  progress: 'PROGRESS',
}

class Home extends Component {
  state = {
    status: apiConstants.initial,
    searchInput: '',
    searchValue: '',
    videosList: [],
    errMsg: '',
  }

  componentDidMount() {
    this.getVideos()
  }

  onFetchSuccess = data => {
    const videosList = data.map(each => ({
      id: each.id,
      title: each.title,
      thumbnailUrl: each.thumbnail_url,
      channel: {
        name: each.channel.name,
        profileImageUrl: each.channel.profile_image_url,
      },
      viewCount: each.view_count,
      publishedAt: each.published_at,
    }))

    this.setState({videosList, status: apiConstants.success})
  }

  onFetchFailure = errMsg => {
    this.setState({errMsg, status: apiConstants.failure})
  }

  getVideos = async () => {
    this.setState({status: apiConstants.progress})
    const {searchValue} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(
      `https://apis.ccbp.in/videos/all?search=${searchValue}`,
      options,
    )
    const data = await response.json()

    if (response.ok) {
      this.onFetchSuccess(data.videos)
    } else {
      this.onFetchFailure(data.error_msg)
    }
  }

  featuresSection = () => {}

  onChangeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickSearch = () => {
    const {searchInput} = this.state
    this.setState({searchValue: searchInput}, this.getVideos)
  }

  renderVideos = () => {
    const {videosList} = this.state
    console.log(videosList)

    return (
      <VideoListContainer>
        {videosList.map(eachVideo => (
          <VideoItem videoDetails={eachVideo} key={eachVideo.id} />
        ))}
      </VideoListContainer>
    )
  }

  render() {
    const {searchInput} = this.state

    return (
      <AppContext.Consumer>
        {value => {
          const {mode} = value
          return (
            <>
              <Header />
              <HomeContainer mode={mode}>
                <FeaturesContainer>{this.featuresSection()}</FeaturesContainer>
                <VideoSection>
                  <PremiumContainer>
                    <PremiumSubContainer>
                      <NxtWatchLogo
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                        alt="nxt watch logo"
                      />
                      <PremiumPara>
                        Buy Nxt Watch Premium prepaid plans with UPI
                      </PremiumPara>
                      <GetItNowBtn type="button">GET IT NOW</GetItNowBtn>
                    </PremiumSubContainer>
                    <PremiumAddRemoveBtn type="button">
                      <GrFormClose />
                    </PremiumAddRemoveBtn>
                  </PremiumContainer>
                  <VideosContainer>
                    <SearchContainer>
                      <SearchInput
                        type="search"
                        onChange={this.onChangeInput}
                        value={searchInput}
                      />
                      <SearchButton type="button" onClick={this.onClickSearch}>
                        <AiOutlineSearch />
                      </SearchButton>
                    </SearchContainer>
                    {this.renderVideos()}
                  </VideosContainer>
                </VideoSection>
              </HomeContainer>
            </>
          )
        }}
      </AppContext.Consumer>
    )
  }
}

export default Home
