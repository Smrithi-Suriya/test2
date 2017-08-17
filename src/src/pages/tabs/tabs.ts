import { Component } from '@angular/core';

import { StudentPage } from '../Student/Student';
import { TestTabPage } from '../testtab/testtab';
import { ProfessorPage } from '../Professor/Professor';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ProfessorPage;
  tab2Root = StudentPage;
  tab3Root = TestTabPage;

  constructor() {

  }
}
