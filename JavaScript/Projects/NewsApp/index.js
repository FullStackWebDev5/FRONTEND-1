let news = []

fetch('https://newsapi.org/v2/top-headlines?category=technology&apiKey=f40203cc39184176a487521beaf0836b')
  .then(response => response.json())
  .then(response => {
    news = response.articles
    displayNews()
  })
  .catch(error => console.error('Error:', error));

function displayNews() {
  const container = document.getElementById('container')

  news.forEach(article => {
    const newsContainer = document.createElement('div')
    newsContainer.classList.add('news-container')

    const topSection = document.createElement('div')
    const bottomSection = document.createElement('div')

    const newsImage = document.createElement('img')
    let defaultNewsImageURL = 'https://st.depositphotos.com/1011646/1255/i/450/depositphotos_12553000-stock-photo-breaking-news-screen.jpg'
    newsImage.src = article.urlToImage ? article.urlToImage : defaultNewsImageURL

    const newsTitle = document.createElement('h1')
    newsTitle.innerText = article.title

    const newsDesc = document.createElement('p')
    newsDesc.innerText = article.description

    const newsAuthor = document.createElement('div')
    newsAuthor.innerText = `✒️ ${article.author}`

    const newsDate = document.createElement('div')
    const formattedDate = new Date(article.publishedAt).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
    newsDate.innerText = `🕔 ${formattedDate}`

    const readMoreLink = document.createElement('a')
    readMoreLink.href = article.url
    readMoreLink.target = '_blank'
    readMoreLink.classList.add('read-more-link')
    readMoreLink.innerText = 'Read more'

    topSection.append(newsImage, newsTitle, newsDesc)
    bottomSection.append(newsAuthor, newsDate, readMoreLink)

    newsContainer.append(topSection, bottomSection)
    container.append(newsContainer)
  })

  /*
    <div class="news-container">
      <img src="https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/09/apple-watch-10-vs-ultra-2.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1">
      <h1>Apple Watch 10 vs Ultra 2: What's different? - 9to5Mac</h1>
      <p>This detailed comparison covers Apple Watch 10 vs Ultra 2 when it comes to size, display, battery, performance, features, and more.</p>
      <div>✒️ Michael Potuck</div>
      <div>🕔 2024-09-13T15:12:00Z</div>
      <a href="https://9to5mac.com/apple-watch-series-10-vs-ultra-2-comparison/" target="_blank" class="read-more-link">Read more</a>
    </div>
  */
}