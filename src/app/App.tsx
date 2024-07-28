import React from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";
import {
  AboutUsPage,
  ContactUsPage,
  DashboardPage,
  ErrorPage,
  HomePage,
  Layout,
  LoginPage,
  ProfilePage,
  RegiserPage,
  SupportPage
} from '../ui';

const App = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegiserPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
        <Route path="/dashbaord" element={<DashboardPage />} />
      </Routes>
    </React.Fragment>
  )
}

export default App
