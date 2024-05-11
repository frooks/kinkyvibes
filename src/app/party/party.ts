export default class Party {
    
    name: string;
    description: string;
    image: string; // Base64 encoded string
    order: number;

    constructor(name: string, description: string, image: string, order: number) {
        this.name = name;
        this.description = description;
        this.image = image;
        this.order = order;
    }
};
 