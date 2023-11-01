import axios from 'axios';
import { useState, useEffect } from 'react';
import PostItem from '../components/PostItem';

const NewsPage = () => {

    const [listNews, setListNews] = useState([]);
    useEffect(() => {
        async function fetchData() {
            var result = await axios('http://localhost:3001/news');
            setListNews(result.data);
        }
        fetchData();
    }, []);

    return (
        <div className='wrapper'>
            <h1>Trang tin VinaEnter Edu</h1>
            <ul>
                {listNews.map(function (news) {
                    return (
                        <PostItem
                            key={news.id}
                            img={news.img}
                            title={news.title}
                            content={news.content}
                        />
                    )
                })}
            </ul>
        </div>
    )
}

export default NewsPage;