const API_KEY = 'API_KEY'
let query = ''

function searchVideo() {
  query = document.getElementById('search-input').value.trim()
  fetchVideos(query)
}

async function fetchVideos() {
  try {
    const res = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&&type=video&maxResults=50&q=${query}&key=${API_KEY}`)
    const data = await res.json()
    displayVideos(data.items)
  } catch (error) {
    console.log(error)
  }
}

function displayVideos(videos) {
  const videoSection = document.getElementById('video-section')
  videoSection.innerHTML = ''

  videos.forEach((video) => {
    const { videoId } = video.id

    const iframe = document.createElement('iframe')
    iframe.width='350'
    iframe.height='200'
    iframe.src=`https://www.youtube.com/embed/${videoId}`
    iframe.title='YouTube video player'
    iframe.frameborder='0'
    iframe.allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
    iframe.referrerpolicy='strict-origin-when-cross-origin'
    iframe.allowfullscreen=true
  
    videoSection.append(iframe)
  })
}