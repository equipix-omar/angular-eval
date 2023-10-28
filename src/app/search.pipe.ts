import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(Project: any[], term: any):  any[] {
    if (!term)
    {
     return Project;
    }
    return Project.filter(function(Project)
    {
           if( Project.description)
             return Project.description.toLocaleLowerCase().includes(term.toLocaleLowerCase())
           else if(Project.name)
           return Project.name.toLocaleLowerCase().includes(term.toLocaleLowerCase())

            });
          }

}
