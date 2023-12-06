const fetchPost = async (setData) => {
    const requestOptions = {
        method: 'GET',
        redirect: 'follow'
        };

    const response = await fetch("http://localhost:8000/api/posts", requestOptions);

    const data = await response.json();

    setData(data);
}

export default fetchPost;