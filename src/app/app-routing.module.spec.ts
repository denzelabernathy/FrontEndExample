import { AppRoutingModule } from './app-routing.module';
import { Routes } from '@angular/router';

import { routes } from './app-routing.module';
import { LandingComponent } from './landing/landing.component';
import { NewCarsComponent } from './new-cars/new-cars.component';
import { PreOwnedCarsComponent } from './pre-owned-cars/pre-owned-cars.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { NotFoundComponent } from './not-found/not-found.component';

describe('AppRoutingModule', () => {
  let appRoutingModule: AppRoutingModule;

  beforeEach(() => {
    appRoutingModule = new AppRoutingModule();
  });

  it('should create an instance', () => {
    expect(appRoutingModule).toBeTruthy();
  });
});

describe('App routing module', () => {
  it('should contain all expected routes', () => {
    const expectedRoutes: Routes = [
      {
        path: '',
        component: LandingComponent
      },
      {
        path: 'new-cars',
        component: NewCarsComponent
      },
      {
        path: 'pre-owned-cars',
        component: PreOwnedCarsComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: 'services',
        component: ServicesComponent
      },
      {
        path: 'not-found',
        component: NotFoundComponent
      },
      {
        path: '**',
        redirectTo: 'not-found'
      },
    ];
    expect(routes).toEqual(expectedRoutes);
    const removedRoute = routes.splice(1, 1);
    expect(routes).not.toEqual(expectedRoutes);
    routes.splice(1, 0, ...removedRoute);
    expect(routes).toEqual(expectedRoutes);
  });
});
