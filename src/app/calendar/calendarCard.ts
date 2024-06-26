export default class CalendarCard {

   //date: Date;
   name: string;
   description: string;
   image: string; // URL
   order: number;
   categories: string[];

   constructor(//date: Date, 
               name: string, 
               description: string,
               image: string,
               order: number,
               categories:string[]) {

      //this.date = date;
      this.name = name;
      this.description = description;
      this.image = image;
      this.order = order;
      this.categories = categories;
   }
};
