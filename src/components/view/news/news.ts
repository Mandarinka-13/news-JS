import './news.css';

interface Source {
    id: string;
    name: string;
}

interface NewsArticle {
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage?: string; 
    publishedAt: string;
    source: Source; 
}

type NewsData = NewsArticle[];


class News {
    draw(data: NewsData): void {
        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const fragment = document.createDocumentFragment();
        const newsItemTemp: Element | any = document.querySelector('#newsItemTemp');

        news.forEach((item:NewsArticle, idx: number) => {
            const newsClone = newsItemTemp.content.cloneNode(true);

            if (idx % 2) newsClone.querySelector('.news__item').classList.add('alt');

            newsClone.querySelector('.news__meta-photo').style.backgroundImage = `url(${
                item.urlToImage || 'img/news_placeholder.jpg'
            })`;
            newsClone.querySelector('.news__meta-author').textContent = item.author || item.source.name;
            newsClone.querySelector('.news__meta-date').textContent = item.publishedAt
                .slice(0, 10)
                .split('-')
                .reverse()
                .join('-');

            newsClone.querySelector('.news__description-title').textContent = item.title;
            newsClone.querySelector('.news__description-source').textContent = item.source.name;
            newsClone.querySelector('.news__description-content').textContent = item.description;
            newsClone.querySelector('.news__read-more a').setAttribute('href', item.url);

            fragment.append(newsClone);
        });

        const newsContainer = document.querySelector('.news') as HTMLElement;
        if (newsContainer) {
            newsContainer.innerHTML = ''; 
            newsContainer.appendChild(fragment); 
        }
    }
}

export default News;
