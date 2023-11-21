import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
import { UsersComponent } from './shared/components/users/users.component';
import { ProductsComponent } from './shared/components/products/products.component';
import { UserComponent } from './shared/components/users/user/user.component';
import { EditUserComponent } from './shared/components/users/user/edit-user/edit-user.component';
import { ProductComponent } from './shared/components/products/product/product.component';
import { EditProductComponent } from './shared/components/products/product/edit-product/edit-product.component';
import { PagrNotFoundComponent } from './shared/components/pagr-not-found/pagr-not-found.component';
import { LogInComponent } from './shared/components/log-in/log-in.component';
import { AdminComponent } from './shared/components/admin/admin.component';
import { SuperAdminComponent } from './shared/components/super-admin/super-admin.component';
import { AuthGuard } from './shared/services/auth.guard';
import { UserRoleGuard } from './shared/services/user-role.guard';
import { CanDeactivateGuard } from './shared/services/can-deactivate.guard';
import { UserResolverService } from './shared/services/user-resolver.service';
import { ProductResolveService } from './shared/services/product-resolve.service';

const routes: Routes = [
  {
    path:'' , component:LogInComponent,
  },
  {
    path:'home' , component:DashboardComponent,
    title:'home'
  },
  {
    path:'users' , component:UsersComponent,
    title:'users',
    canActivate:[AuthGuard],
    canActivateChild:[AuthGuard],
    children:[
      {
        path:'addUser' , component:EditUserComponent,
        title:'addUser',
      },
      {
        path:':userId' , component:UserComponent,
        title:'userId',
        resolve:[UserResolverService]
      },
     
      {
        path:':userId/editUser' , component:EditUserComponent,
        title:'editUser',
        
      
      
      },
    ]
  },
 
  {
    path:'products' , component:ProductsComponent,
    title:'products',
    canActivate:[AuthGuard],
    canActivateChild:[AuthGuard],
    children:[
      {
        path:'addProduct' , component:EditProductComponent,
        title:'addProduct',
      },
      {
        path:':productId' , component:ProductComponent,
        title:'productId',
        resolve:[ProductResolveService]
      },
     
      {
        path:':productId/editProduct' , component:EditProductComponent,
        title:'editProduct',
      
        
        
      },
    ],
  },
  {
        path:'admin', component:AdminComponent,
        title:'Admin',
        canActivate:[AuthGuard,UserRoleGuard],
        data:{
          userRole:['admin','superadmin']
        }
  },
  {
        path:'superadmin', component:SuperAdminComponent,
        title:'superadmin',
        canActivate:[AuthGuard,UserRoleGuard],
        data:{
          userRole:['superadmin']
        }
  },
  {
    path:' Not Found' , component:PagrNotFoundComponent,
    title:'page Not Found',
    data :{
      msg:'page Not Found !!!'
    }
  },
  {
    path : '**',
    redirectTo:' Not Found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
