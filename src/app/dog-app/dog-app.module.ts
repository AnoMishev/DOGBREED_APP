import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { DogBreedRouter } from "./dog-app-routing.module";
import { DashBoardComponent } from "./dashboard/dashboard.component";
import { DogBreedComponent } from "./dog-app.component";
import { BreedComponent } from "./breed/breed.component";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { MainService } from "./services/main-service";
import { BreedsComponent } from "./breeds/breeds.component";
import { RouterModule } from "@angular/router";
import { SharedService } from "./services/shared-service";
@NgModule({
    declarations: [
      DogBreedComponent,
      DashBoardComponent,
      BreedsComponent,
      BreedComponent
    ],
    imports: [
      RouterModule,
      CommonModule,  // Replacing BrowserModule with CommonModule
      DogBreedRouter,  // Correct routing module
      HttpClientModule,
      FormsModule,
      
    ],
    providers: [MainService, SharedService],
    exports: []  // No need to export RouterModule here unless used outside
})
export class DogBreedModule { }
