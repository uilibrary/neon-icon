import { Component, OnInit } from '@angular/core';
import { IconService } from 'src/app/services/icon.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ClipboardService } from 'ngx-clipboard'
import { ToastrService } from 'ngx-toastr';

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
    private fb: FormBuilder,
    private clibBoardService: ClipboardService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    // this.icons = this.iconService.iconList;
    this.buildFilterForm(this.iconService.initialFilters);
    this.icons$ = this.iconService.getFilteredIcons(this.filterForm);
    this.iconService.getFilteredIcons(this.filterForm).subscribe(i => {
    });
  }

  buildFilterForm(filterData:any = {}) {
    this.filterForm = this.fb.group({
      search: [filterData.search || ''],
      weight: [filterData.weight || ''],
      rounded: [filterData.rounded]
    });
  }

  copyIconName(name) {
    this.clibBoardService.copyFromContent(name);
    this.toastr.show('Copied!')
  }

}
