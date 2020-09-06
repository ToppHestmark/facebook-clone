import React from 'react'
import './StoryReel.css'
import Story from './Story'

function StoryReel() {
  return (
    <div className="storyReel">
      <Story 
      image="https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2Fcc479444-4581-4ddf-b99f-d28954c5e958.jpg?fit=scale-down&source=next&width=700"
      profileSrc="https://upload.wikimedia.org/wikipedia/commons/6/6c/Jeff_Bezos_at_Amazon_Spheres_Grand_Opening_in_Seattle_-_2018_%2839074799225%29_%28cropped%29.jpg"
      title="Jeff Bezos" 
      />
      <Story 
      image="https://ichef.bbci.co.uk/news/660/cpsprodpb/17C0C/production/_112529279_eygh5jhwaacsetn.jpg"
      profileSrc="https://www.incimages.com/uploaded_files/image/1920x1080/getty_1215628293_200013332000928069_434121.jpg"
      title="Elon Musk" 
      />
      <Story 
      image="https://i1.wp.com/trimmtravels.com/wp-content/uploads/2019/08/Facebook-Headquarters-Tour-02.jpg?w=720&ssl=1"
      profileSrc="https://image.cnbcfm.com/api/v1/image/106330923-1578676182018gettyimages-1178141599.jpeg?v=1584633147&w=1400&h=950"
      title="Mark Zuckerberg" 
      />
      <Story 
      image="https://i.guim.co.uk/img/media/30496d9e45c56e59ea0ae4d78049f48ae29f240b/0_172_4586_2752/master/4586.jpg?width=605&quality=45&auto=format&fit=max&dpr=2&s=7c9ec2891271c0dfd308b3564de79b59"
      profileSrc="https://i.guim.co.uk/img/media/7b9db06878d3a024083c7b4633cacbb1d1a84c31/0_224_5334_3200/master/5334.jpg?width=605&quality=45&auto=format&fit=max&dpr=2&s=b3c093d5e431332b594ee3dcabafafdd"
      title="Vladimir Putin" 
      />
      <Story 
      image="https://im-media.voltron.voanews.com/Drupal/01live-166/styles/sourced/s3/2020-07/ap_north_korea_anniversary_27July20.jpg?itok=XxQfVzoT"
      profileSrc="https://www.gannett-cdn.com/presto/2020/04/21/USAT/48cd6f57-7049-41ae-aa84-8d019a022d77-AP_North_Korea_Kim.JPG?width=1080&quality=50"
      title="Kim Jong-Un" 
      />
    </div>
  )
}

export default StoryReel
