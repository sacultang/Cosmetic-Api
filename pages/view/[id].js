import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Post = () => {
  const [item, setItem] = useState({});
  const router = useRouter();
  const { id } = router.query;
  const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;

  useEffect(() => {
    const getData = async () => {
      await axios.get(API_URL).then((res) => setItem(res.data));
    };
    if (id && id > 0) {
      getData();
    }
  }, [API_URL, id, item]);
  return <p>Post: {id}</p>;
};

export default Post;
