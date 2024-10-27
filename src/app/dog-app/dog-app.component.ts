import { Component, inject, OnInit } from "@angular/core";
import { SharedService } from "./services/shared-service";
import { Subscription } from "rxjs";

@Component({
  selector: 'dog-breed',
  templateUrl: 'dog-app.component.html',
  styleUrls: ['dog-app.component.scss']
})
export class DogBreedComponent implements OnInit {
  public sharedService = inject(SharedService);
  public isVisible: boolean = false;
  private subscription: Subscription = new Subscription();

  ngOnInit() {
    // Subscribe to visibility changes
    this.subscription = this.sharedService.visibility$.subscribe(visible => {
      this.isVisible = visible;
    });
  }

  openAddDog() {
    this.sharedService.showElement();
    console.log('Opening Add Dog Form');
  }

  hideElement() {
    this.sharedService.hideElement();
    console.log('Closing Add Dog Form');
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  addDog(name: string, breed: string, age: string) {
    // Add dog logic here
    console.log(`Adding dog: Name - ${name}, Breed - ${breed}, Age - ${age}`);
  }
}
