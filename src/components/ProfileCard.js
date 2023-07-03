import React from 'react'
import './ProfileCard.css'
import quotesData from './quotesData.json'

function ProfileCard(props) {
  const { users } = props;
  const quotes = quotesData.quotes;

  return (
    <div>
      {users.map((users,index) => {
        const randomQuoteIndex = Math.floor(Math.random() * quotes.length);
        const randomQuote = quotes[randomQuoteIndex];

        return(
          <div key={index} className='container'>
              <div className='avtar-container'>
                  <img src={users.avatar_url} alt='user-img'className='avatar-img'/>
                  <h3 className='login-name'>{users.login}</h3>
                  <div className='quotes-section' key={randomQuoteIndex}>
                    {randomQuote}
                  </div>
              </div>
              <div className='user-metrics'>
                  <span className='metric'>Followers</span>
                  <span className='metric'>Following</span>
                  <span className='metric'>Repos</span>
              </div>
              <div className='metrics-count'>
                <span className='total-count'>{users.followers_url.length}</span>
                <span className='total-count'>{users.following_url.length}</span>
                <span className='total-count'>{users.repos_url.length}</span>
              </div>
              <a href={users.html_url} className='github-btn'>
                See More
              </a>
          </div>
        )
      })}

    </div>
  )
}

export default ProfileCard