import {withRouter, Link} from 'react-router-dom'
import AppContext from '../../context/AppContext'

import {
  VideoCard,
  Thumbnail,
  VideoDetailsContainer,
  ProfileImage,
  DetailsContainer,
  Title,
  ChannelName,
  Reviews,
} from './styledComponents'

const VideoItem = props => {
  const {videoDetails} = props
  const {
    id,
    title,
    thumbnailUrl,
    channel,
    viewCount,
    publishedAt,
  } = videoDetails
  const {name, profileImageUrl} = channel

  return (
    <AppContext.Consumer>
      {value => {
        const {mode} = value
        return (
          <VideoCard>
            <Link to={`/videos/:${id}`} styled="text-decoration: none;">
              <Thumbnail src={thumbnailUrl} alt="video thumbnail" />
              <VideoDetailsContainer>
                <ProfileImage src={profileImageUrl} alt="channel logo" />
                <DetailsContainer>
                  <Title mode={mode}>{title}</Title>
                  <ChannelName>{name}</ChannelName>
                  <Reviews>
                    {viewCount} views . {publishedAt}
                  </Reviews>
                </DetailsContainer>
              </VideoDetailsContainer>
            </Link>
          </VideoCard>
        )
      }}
    </AppContext.Consumer>
  )
}

export default withRouter(VideoItem)
