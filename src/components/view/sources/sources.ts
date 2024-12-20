import './sources.css';

interface SourceData {
    id: string;
    name: string;
}

class Sources {
    draw(data: SourceData[]): void {
        const fragment: DocumentFragment = document.createDocumentFragment();
        const sourceItemTemp: HTMLTemplateElement | null = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

        if (sourceItemTemp) {
            data.forEach((item: SourceData) => {
                const sourceClone: DocumentFragment = sourceItemTemp.content.cloneNode(true) as DocumentFragment;

                const itemNameElement: HTMLElement | null = sourceClone.querySelector('.source__item-name');
                const itemElement: HTMLElement | null = sourceClone.querySelector('.source__item');

                if (itemNameElement && itemElement) {
                    itemNameElement.textContent = item.name;
                    itemElement.setAttribute('data-source-id', item.id);
                    fragment.append(sourceClone);
                } else {
                    console.warn('Не удалось найти необходимые элементы для источника с ID: ${item.id}');
                }
            });

            const sourcesContainer: HTMLElement | null = document.querySelector('.sources');
            if (sourcesContainer) {
                sourcesContainer.innerHTML = ''; 
                sourcesContainer.append(fragment);
            }
        }
    }
}

export default Sources;
