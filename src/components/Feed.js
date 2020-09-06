import React from 'react'
import './Feed.css';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';

function Feed() {
  return (
    <div className="feed">
    <StoryReel />
    <MessageSender />

    <Post 
      profilePic="https://avatars3.githubusercontent.com/u/48948074?s=460&u=d8d5a56c477f72be28e39cd0f40b51243180458a&v=4"
      message="Hello world!"
      timestamp="Time to code"
      username="tophestmark"
      image="https://www.renewableenergyworld.com/wp-content/uploads/sites/14/content/dam/rew/gallery/en/ugc/articles/2016/07/thomas-edison-was-an-energy-marketing-genius/image-gallery/thomas_edison.jpg"
      // key={id}
      // profilePic={profilePic}
      // message={message}
      // timestamp={timestamp}
      // username={username}
      // image={image}
    />
    <Post 
      profilePic="https://media.vanityfair.com/photos/5f36ca61f51ed31274cdfb62/master/w_2560%2Cc_limit/batman-ben-affleck.jpg"
      message="Hello world!"
      timestamp="Time to code"
      username="tophestmark"
      image=""
    />
    <Post />
    </div>
  )
}

export default Feed
