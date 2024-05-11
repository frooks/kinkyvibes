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
            new Set(["aasdasd", "asdasdsab", "casdasd"])
         ),
         new CalendarCard(
            "Shibari en Zoe",
            "Disfruta del placer de aprender en el espacio naturista mejor ubicado de barcelona, de la mano de Mistress Zoe aprenderas cualquier atadura básica del arte japones del Shibari",
            "../../assets/primal.png",
            0,
            new Set(["c", "b", "d"])
         ),
         new CalendarCard(
            "Shibari en Zoe",
            "Disfruta del placer de aprender en el espacio naturista mejor ubicado de barcelona, de la mano de Mistress Zoe aprenderas cualquier atadura básica del arte japones del Shibari",
            "../../assets/primal.png",
            0,
            new Set(["a", "z", "h"])
         ),
         new CalendarCard(
            "Shibari en Zoe",
            "Disfruta del placer de aprender en el espacio naturista mejor ubicado de barcelona, de la mano de Mistress Zoe aprenderas cualquier atadura básica del arte japones del Shibari",
            "../../assets/primal.png",
            0,
            new Set(["e", "q", "c"])
         ),
         new CalendarCard(
            "Shibari en Zoe",
            "Disfruta del placer de aprender en el espacio naturista mejor ubicado de barcelona, de la mano de Mistress Zoe aprenderas cualquier atadura básica del arte japones del Shibari",
            "../../assets/primal.png",
            0,
            new Set(["z", "q"])
         ),
         new CalendarCard(
            "Shibari en Zoe",
            "Disfruta del placer de aprender en el espacio naturista mejor ubicado de barcelona, de la mano de Mistress Zoe aprenderas cualquier atadura básica del arte japones del Shibari",
            "../../assets/primal.png",
            0,
            new Set(["b", "c", "a"])
         )
      );

      this.fullCalendarList = structuredClone(this.calendarList);

      this.calendarList.forEach(card => {
         card.categories.forEach(category => {
            if (!this.categoryMap.has(category)) {
               this.categoryMap.set(category, true);
            }
         }

         );
      });

      console.log(this.categoryMap)

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
    
      // Update calendarList based on categoryMap
      this.calendarList = this.fullCalendarList.filter(calendar => {
        for (const category of calendar.categories) {
          if (this.categoryMap.get(category)) {
            return true;
          }
        }
        return false;
      });
    
      console.log(this.categoryMap);
    }
    

}