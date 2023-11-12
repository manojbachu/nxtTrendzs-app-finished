import styled from 'styled-components'

export const VideoCard = styled.li`
  list-style-type: none;
  margin: 12px 8px 12px 8px;
  width: 300px;
`
export const Thumbnail = styled.img`
  width: 100%;
`
export const VideoDetailsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`

export const ProfileImage = styled.img`
  width: 40px;
  margin-top: 14px;
  margin-right: 8px;
`
export const DetailsContainer = styled.div`
  color: #475569;
  font-family: 'Roboto';
  text-decoration: none;
`

export const Title = styled.p`
  font-family: 'Roboto';
  font-weight: 500;
  color: ${props => (props.mode === 'darkMode' ? '#f9f9f9' : '#383838')};
`

export const ChannelName = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 8px;
`

export const Reviews = styled.p`
  font-weight: 500;
  line-height: 8px;
  font-size: 14px;
`
