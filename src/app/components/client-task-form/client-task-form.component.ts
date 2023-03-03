import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
	NgbCalendar,
	NgbDateAdapter,
	NgbDateParserFormatter,
	NgbDatepickerModule,
	NgbDateStruct,
} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Injectable()
export class CustomAdapter extends NgbDateAdapter<string> {
	readonly DELIMITER = '-';

	fromModel(value: string | null): NgbDateStruct | null {
		if (value) {
			const date = value.split(this.DELIMITER);
			return {
				day: parseInt(date[0], 10),
				month: parseInt(date[1], 10),
				year: parseInt(date[2], 10),
			};
		}
		return null;
	}

	toModel(date: NgbDateStruct | null): string | null {
		return date ? date.day + this.DELIMITER + date.month + this.DELIMITER + date.year : null;
	}
}

/**
 * This Service handles how the date is rendered and parsed from keyboard i.e. in the bound input field.
 */
@Injectable()
export class CustomDateParserFormatter extends NgbDateParserFormatter {
	readonly DELIMITER = '/';

	parse(value: string): NgbDateStruct | null {
		if (value) {
			const date = value.split(this.DELIMITER);
			return {
				day: parseInt(date[0], 10),
				month: parseInt(date[1], 10),
				year: parseInt(date[2], 10),
			};
		}
		return null;
	}

	format(date: NgbDateStruct | null): string {
		return date ? date.day + this.DELIMITER + date.month + this.DELIMITER + date.year : '';
	}
}

@Component({
  selector: 'app-client-task-form',
  templateUrl: './client-task-form.component.html',
  styleUrls: ['./client-task-form.component.css'],
  providers: [
	{ provide: NgbDateAdapter, useClass: CustomAdapter },
	{ provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter },
],
})
export class ClientTaskFormComponent {
	model1: string;
	model2: string;

	constructor(private router: Router, private ngbCalendar: NgbCalendar, private dateAdapter: NgbDateAdapter<string>) {}
  
	ngOnInit(): void {}
  
	addToClientTask(){
	this.router.navigate(['/client-tasks/my-tasks'])
	}
	get today() {
		return this.dateAdapter.toModel(this.ngbCalendar.getToday())!;
	}
  }

  

