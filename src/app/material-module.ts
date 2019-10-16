import { NgModule } from '@angular/core';
import { MatToolbarModule, MatCardModule, MatInputModule} from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from  '@angular/material/button';

@NgModule({
    exports: [
        MatToolbarModule,
        MatCardModule,
        MatButtonModule,        
        MatFormFieldModule,
        MatInputModule
    ]
    })
    export class CustomMaterialModule { }
