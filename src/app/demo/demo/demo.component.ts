import { Component, OnInit } from '@angular/core';
import { IconService } from 'src/app/services/icon.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  icons;
  icons$;
  filterForm: FormGroup;
  constructor(
    private iconService: IconService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    // this.icons = this.iconService.iconList;
    this.buildFilterForm(this.iconService.initialFilters);
    this.icons$ = this.iconService.getFilteredIcons(this.filterForm);
    this.iconService.getFilteredIcons(this.filterForm).subscribe(i => {
      console.log(i);
    })
  }

  buildFilterForm(filterData:any = {}) {
    this.filterForm = this.fb.group({
      weight: [filterData.weight || ''],
      rounded: [filterData.rounded]
    });
  }

}
