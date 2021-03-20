import StoreService from "./../services/store.service.js"

// export default class extends StoreService {}
export default class ListItem extends StoreService{
    constructor(container, initialValue) {
        super(initialValue);

        this.HTMLContainer = container;
    }

    add(human, place) {
        const {firstName, lastName, id} = human;

        let listItem = this.createItem(firstName, lastName, id);
       
        switch(place) {
            case 'start': {
                this.HTMLContainer.prepend(listItem);
            }break;
            default: {
                this.HTMLContainer.append(listItem);
            }
        }

        this.addToStore(human)
    }

    removeById(id) { 
        let child = this.HTMLContainer.querySelector(`[data-id ="${id}"]`)
        this.HTMLContainer.removeChild(child);
        this.removeItem()
    }

    createItem(name, lastName, id) {
        const div = document.createElement('div');
        div.classList.add('list-item');
        div.dataset.id = id;
        div.textContent = `${name} ${lastName}`
        return div;
    }

}
