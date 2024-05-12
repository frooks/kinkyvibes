import { Component, OnInit } from '@angular/core';
import CalendarCard from './calendarCard';
import { CommonModule } from '@angular/common';

@Component({
   selector: 'app-contact',
   standalone: true,
   imports: [CommonModule],
   templateUrl: './contact.component.html',
   styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {

   calendarList: CalendarCard[] = [];
   fullCalendarList: CalendarCard[] = [];
   categoryMap: Map<string, boolean> = new Map<string, boolean>();
   fullCategoryMap: Map<string, boolean> = new Map<string, boolean>();

   ngOnInit() {
      this.calendarList.push(
         new CalendarCard(
            "Shibari en Zoe",
            "Disfruta del placer de aprender en el espacio naturista mejor ubicado de barcelona, de la mano de Mistress Zoe aprenderas cualquier atadura básica del arte japones del Shibari",
            "../../assets/primal.png",
            0,
            ["aasdasd", "asdasdsab", "casdasd"].sort()
         ),
         new CalendarCard(
            "Shibari en Zoe",
            "Disfruta del placer de aprender en el espacio naturista mejor ubicado de barcelona, de la mano de Mistress Zoe aprenderas cualquier atadura básica del arte japones del Shibari",
            "../../assets/primal.png",
            1,
            ["cccsdasd", "bbbsdasd", "dddsdasd"].sort()
         ),
         new CalendarCard(
            "Shibari en Zoe",
            "Disfruta del placer de aprender en el espacio naturista mejor ubicado de barcelona, de la mano de Mistress Zoe aprenderas cualquier atadura básica del arte japones del Shibari",
            "../../assets/primal.png",
            2,
            ["aasdasd", "zzzsdasd", "hhhsdasd"].sort()
         ),
         new CalendarCard(
            "Shibari en Zoe",
            "Disfruta del placer de aprender en el espacio naturista mejor ubicado de barcelona, de la mano de Mistress Zoe aprenderas cualquier atadura básica del arte japones del Shibari",
            "../../assets/primal.png",
            3,
            ["eeesdasd", "qqqsdasd", "cccsdasd"].sort()
         ),
         new CalendarCard(
            "Shibari en Zoe",
            "Disfruta del placer de aprender en el espacio naturista mejor ubicado de barcelona, de la mano de Mistress Zoe aprenderas cualquier atadura básica del arte japones del Shibari",
            "../../assets/primal.png",
            4,
            ["zzzsdasd", "qqqsdasd"].sort()
         ),
         new CalendarCard(
            "Shibari en Zoe",
            "Disfruta del placer de aprender en el espacio naturista mejor ubicado de barcelona, de la mano de Mistress Zoe aprenderas cualquier atadura básica del arte japones del Shibari",
            "../../assets/primal.png",
            5,
            ["bbbsdasd", "cccsdasd", "aasdasd"].sort()
         )
      );

      this.fullCalendarList = structuredClone(this.calendarList);

      this.calendarList.forEach(card => {
         card.categories.forEach(category => {
            if (!this.categoryMap.has(category)) {
               this.categoryMap.set(category, true);
            }
         });
      });

      this.categoryMap = new Map<string, boolean>(
         Array.from(this.categoryMap.entries()).sort((a, b) => a[0].localeCompare(b[0]))
      );

      this.fullCategoryMap = structuredClone(this.categoryMap);

   }

   clickCategory(name: string) {
      console.log(this.categoryMap);

      if (this.categoryMap.has(name)) {
         this.categoryMap.delete(name);
         this.fullCategoryMap.set(name, false);
      } else {
         this.categoryMap.set(name, true);
         this.fullCategoryMap.set(name, true);
      }

      this.calendarList =
         this.fullCalendarList.filter(calendar =>
            calendar.categories.some(category => this.categoryMap.has(category))
         );

      console.log(this.categoryMap);
   }

    isCategoryClicked(name: string) : boolean {
      return this.categoryMap.has(name);
   }

}