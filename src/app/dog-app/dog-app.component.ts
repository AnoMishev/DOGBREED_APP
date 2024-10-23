import { Component, inject } from "@angular/core";
import { SharedService } from "./services/shared-service";
@Component({
    selector: 'dog-breed',
    templateUrl: 'dog-app.component.html',
    styleUrls: ['dog-app.component.scss']
})
export class DogBreedComponent {
    public sharedService = inject(SharedService)

    openAddDog() {
        this.sharedService.showElement();
        console.log('zdravo')
    }
}