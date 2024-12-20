import AppLoader from './appLoader';
import {INewsResponse, ISourceResponse} from 'types/interfaces';
import { NewCategory } from 'types/enums';

class AppController extends AppLoader {
    getSources(callback: (data: ISourceResponse) => void): void {
        super.getResp(
            {
                endpoint: 'sources',
                options: {
                    category: NewCategory.Technology,
                },
            },
            callback
        );
    }

    getNews(e: Event, callback: (data: INewsResponse) => void): void {
        let target = e.target as HTMLElement;
        const newsContainer = e.currentTarget as HTMLElement;

        while (target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id');
                if (newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId!);
                    super.getResp(
                        {
                            endpoint: 'everything',
                            options: {
                                sources: sourceId!,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            target = target.parentNode as HTMLElement;
        }
    }
}

export default AppController;
