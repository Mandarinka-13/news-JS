import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { NewsData, SourcesData } from '../types';

class App {
    private controller: AppController;
    private view: AppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start(): void {
        document
            .querySelector('.sources')!
            .addEventListener('click', (e) => this.controller.getNews(e, (data: NewsData | null) => this.view.drawNews(data)));
        this.controller.getSources((data: SourcesData | null) => this.view.drawSources(data));
    }
}

export default App;
