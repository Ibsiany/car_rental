import React from 'react';
import { BrowserRouter, Routes as Router, Route } from 'react-router-dom';
import { Admin } from '../pages/Admin';
import { CreateCar } from '../pages/CreateCar';
import { CreateRent } from '../pages/CreateRent';
import { CreateUser } from '../pages/CreateUser';
import { EditCar } from '../pages/EditCar';
import { EditUser } from '../pages/EditUser';
import { GiveBack } from '../pages/GiveBack';
import { Home } from '../pages/Home';
import { ListData } from '../pages/ListData';
import { Rent } from '../pages/Rent';
import { ViewCars } from '../pages/ViewCars';

export function Routes(): JSX.Element {
  return (
    <BrowserRouter>
      <Router>
        <Route path="/" element={<Home />} />
        <Route path="/give-back" element={<GiveBack />} />
        <Route path="/rent" element={<Rent />} />
        <Route path="/rent/create" element={<CreateRent />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/create-car" element={<CreateCar />} />
        <Route path="/admin/create-user" element={<CreateUser />} />
        <Route path="/admin/edit-car" element={<EditCar />} />
        <Route path="/admin/edit-user" element={<EditUser />} />
        <Route path="/admin/list" element={<ListData />} />
        <Route path="/admin/view-cars" element={<ViewCars />} />
      </Router>
    </BrowserRouter>
  );
}
