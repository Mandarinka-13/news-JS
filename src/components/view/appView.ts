import News from './news/news';
import Sources from './sources/sources';

interface Article {
    title: string;
    description: string;
    url: string;
    author: string;
    publishedAt: string;
    source: Source; 
}

interface Source {
    id: string;
    name: string;
}

interface NewsData {
    articles: Article[];
}

interface SourcesData {
    sources: Source[];
}


export class AppView {
    private news: News;
    private sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: NewsData | null): void {
        const values: Article[] = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: SourcesData | null): void {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}
 
export default AppView;
