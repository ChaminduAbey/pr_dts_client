import { useEffect, useState } from 'react'
import axios from 'axios'

export default function GetPosts(pageNumber) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [posts, setPosts] = useState([])
  const [hasMore, setHasMore] = useState(false)

  useEffect(() => {
    setLoading(true)
    setError(false)
    if(pageNumber == 0){
      setPosts([])
    }
    axios({
      method: 'GET',
      url: 'https://dts.chords.org.lk/api/tutors?order=DESC',
      params: { page: pageNumber },
    }).then(res => {
      setPosts(prevPosts => {
          return [...new Set([...prevPosts, ...res.data.data.map(post => post)])]
      })
      setHasMore(res.data.length > 0)
      setLoading(false)
    }).catch(e => {
        console.log(e)
      setError(true)
    })
  }, [pageNumber])

  return { loading, error, posts, hasMore }
}