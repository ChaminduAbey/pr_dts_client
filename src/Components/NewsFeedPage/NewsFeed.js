import React, { useCallback, useRef, useState } from 'react'
import './NewsFeed.css'
import Data from './data'
import shortid from 'shortid'


function NewsFeed(){
  const [page, setPageNumber] = useState(0)

  const {
    posts,
    loading,
    hasMore,
  } = Data(page)

  const observer = useRef()
  const lastElementRef = useCallback(node => {
    if (loading) return
    if (observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setPageNumber(prevPageNumber => prevPageNumber + 1)
      }
    })
    if (node) observer.current.observe(node)
  }, [loading, hasMore])

  return(
                  <div className="newsfeed__container">
                   <div className="newsfeed__post-container" data-aos-delay="200" data-aos="zoom-in-down">
                       {
                       posts.map((post, index) => {
                           const { text, profileName, imgUrl, profileImgUrl } = post;

                           if(posts.length === index + 1){
                            return (
                              <div ref={lastElementRef} className="newsfeed__post" key={shortid.generate()}>
                               <div className="newsfeed__grid-item">
                                  <img src={imgUrl} className="newsfeed__image"/>
                                </div>
                               <div className="newsfeed__grid-item">
                                  <div className="newsfeed__profile-container">
                                    <img src={profileImgUrl} alt="Profile Image" className="newsfeed__profile-image"/>
                                    <h2 className="newsfeed__profile-name">{profileName}</h2>
                                  </div>
                                  <p className="newsfeed__text">{text}</p>
                                </div>
                             
                             </div>
                              );
                           }else{
                            return (
                              <div className="newsfeed__post" key={shortid.generate()}>
                               <div className="newsfeed__grid-item">
                                  <img src={imgUrl} className="newsfeed__image"/>
                                </div>
                               <div className="newsfeed__grid-item">
                                  <div className="newsfeed__profile-container">
                                    <img src={profileImgUrl} alt="Profile Image" className="newsfeed__profile-image"/>
                                    <h2 className="newsfeed__profile-name">{profileName}</h2>
                                  </div>
                                  <p className="newsfeed__text">{text}</p>
                                </div>
                             
                             </div>
                              );
                           }
                       })}
                 </div>
             </div>
  )
}

export default NewsFeed


// export default class NewsFeed extends React.Component {
//     // State will apply to the posts object which is set to loading by default
//     state = {
//       posts: [],
//       isLoading: true,
//       errors: null
//     };

//     getPosts() {
//       axios
//         .get("http://54.255.144.78:3000/newsFeed?page=0")
//         .then(response => {
//           this.setState({
//             posts: response.data,
//             isLoading: false
//           });
//         })
//         .catch(error => this.setState({ error, isLoading: false }));
//     }

//     componentDidMount() {
//       this.getPosts();
//     }

//     render() {
//       const { isLoading, posts } = this.state;
//       return (
//         <React.Fragment>
//             <div className="newsfeed__container">
//                   <div className="newsfeed__post-container" data-aos-delay="200" data-aos="zoom-in-down">
//                       {!isLoading ? (
//                       posts.map(post => {
//                           const { text, profileName, imgUrl, profileImgUrl } = post;
//                           return (
//                           <div className="newsfeed__post" key={text}>

//                             <div className="newsfeed__grid-item">
//                               <img src={imgUrl} alt="Image" className="newsfeed__image"/>
//                             </div>

//                             <div className="newsfeed__grid-item">
//                               <div className="newsfeed__profile-container">
//                                 <img src={profileImgUrl} alt="Profile Image" className="newsfeed__profile-image"/>
//                                 <h2 className="newsfeed__profile-name">{profileName}</h2>
//                               </div>
//                               <p className="newsfeed__text">{text}</p>
//                             </div>
                            

//                           </div>
//                           );
//                       })
//                       ) : 
//                       (
//                       <p>Loading...</p>
//                       )}
//                 </div>
//             </div>
//         </React.Fragment>
//       );
//     }
//   }