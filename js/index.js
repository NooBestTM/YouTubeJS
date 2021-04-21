
const gloAcademyList = document.querySelector('.glo-academy-list')
const trendingList = document.querySelector('.trending-list')
const musicList = document.querySelector('.music-list')


const createCard = (dataVideo) => {

    const imgUrl = dataVideo.snippet.thumbnails.high.url
    const videoId = dataVideo.id.videoId
    const titleVideo = dataVideo.snippet.title
    const dateVideo = dataVideo.snippet.publishedAt
    const channelTitle = dataVideo.snippet.channelTitle

    const card = document.createElement('div')
    card.classList.add('video-card')
    card.innerHTML = `
            <div class="video-thumb">
              <a class="link-video youtube-modal" href="https://youtu.be/${videoId}">
                <img src="${imgUrl}" alt="" class="thumbnail">
              </a>

            </div>
            <!-- /.video-thumb -->
            <h3 class="video-title">${titleVideo}</h3>
            <div class="video-info">
              <span class="video-counter">
                <span class="video-date">${(new Date(dateVideo)).toLocaleString()}</span>
              </span>
              <span class="video-channel">${channelTitle}</span>
            </div>
            <!-- /.video-info -->
    `
    
    return card
}

const createTrendingCard = (dataVideo) => {

  const imgUrl = dataVideo.snippet.thumbnails.high.url
  const videoId = dataVideo.id
  const titleVideo = dataVideo.snippet.title
  const dateVideo = dataVideo.snippet.publishedAt
  const channelTitle = dataVideo.snippet.channelTitle
  const viewCount = dataVideo.statistics.viewCount

  const card = document.createElement('div')
  card.classList.add('video-card')
  card.innerHTML = `
            <div class="video-thumb">
              <a class="link-video" href="https://youtu.be/${videoId}">
                <img src="${imgUrl}" alt="" class="thumbnail">
              </a>

            </div>
            <h3 class="video-title">${titleVideo}</h3>
            <div class="video-info">
              <span class="video-counter">
                <span class="video-views">${viewCount} views</span>
                <span class="video-date">${(new Date(dateVideo)).toLocaleString()}</span>
              </span>
              <span class="video-channel">${channelTitle}</span>
            </div>
          `

  return card
}

const createList = (wrapper, listVideo) => {
    wrapper.textContent = ''

    if (wrapper.className.split(' ')[0] == 'trending-list') {
      listVideo.forEach(item => {
          const card = createTrendingCard(item)
          wrapper.append(card)
      }) 
    } else {
      listVideo.forEach(item => {    
        const card = createCard(item)
        wrapper.append(card)
      })
    }
}

createList(gloAcademyList, gloAcademy)
createList(trendingList, trending)
createList(musicList, music)