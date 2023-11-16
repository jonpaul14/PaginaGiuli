import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: "",loadChildren: () => import("./app/app.module").then((it) => it.AppModule)},
];
