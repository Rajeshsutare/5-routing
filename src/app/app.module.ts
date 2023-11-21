import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { materialModule } from './shared/materials/material.module';
import { UsersComponent } from './shared/components/users/users.component';
import { ProductsComponent } from './shared/components/products/products.component';
import { UserComponent } from './shared/components/users/user/user.component';
import { EditUserComponent } from './shared/components/users/user/edit-user/edit-user.component';
import { ProductComponent } from './shared/components/products/product/product.component';
import { EditProductComponent } from './shared/components/products/product/edit-product/edit-product.component';
import { PagrNotFoundComponent } from './shared/components/pagr-not-found/pagr-not-found.component';
import { LogInComponent } from './shared/components/log-in/log-in.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './shared/components/admin/admin.component';
import { SuperAdminComponent } from './shared/components/super-admin/super-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    UsersComponent,
    ProductsComponent,
    UserComponent,
    EditUserComponent,
    ProductComponent,
    EditProductComponent,
    PagrNotFoundComponent,
    LogInComponent,
    AdminComponent,
    SuperAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    materialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
