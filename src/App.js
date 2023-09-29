import PostItem from './components/PostItem';
import Data from './components/Data';

const App = () => {

    return (
        <div className='wrapper'>
            <h1>Trang tin VinaEnter Edu</h1>
            <ul>
                {Data.listNews.map(function (news) {
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

export default App;