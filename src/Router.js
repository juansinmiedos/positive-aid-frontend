import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
// import Navbar from './components/navbar/Navbar'
import HomeView from './views/home/HomeView.jsx'
import SignupView from './views/signup/SignupView.jsx'
import ConfirmationView from './views/confirmation/ConfirmationView.jsx'
import LoginView from './views/login/LoginView.jsx'
import DashboardView from './views/dashboard/DashboardView.jsx'
import ProfileView from './views/profile/ProfileView.jsx'
import HistoryView from './views/history/HistoryView.jsx'
import LabResultHistoryView from './views/labResultHistory/LabResultHistoryView.jsx'
import AppointmentHistoryView from './views/appointmentHistory/AppointmentHistoryView.jsx'
import MedicationHistoryView from './views/medicationHistory/MedicationHistoryView.jsx'
import CapacitsView from './views/capacits/CapacitsView.jsx'
import BlogView from './views/blog/BlogView.jsx'

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={HomeView} />
            <Route exact path="/crear-cuenta" component={SignupView} />
            <Route exact path="/confirmar-cuenta/:id" component={ConfirmationView} />
            <Route exact path="/iniciar-sesion" component={LoginView} />
            <Route exact path="/dashboard" component={DashboardView} />
            <Route exact path="/perfil" component={ProfileView} />
            <Route exact path="/historia-clinica" component={HistoryView} />
            <Route exact path="/historia-analisis" component={LabResultHistoryView} />
            <Route exact path="/historia-citas" component={AppointmentHistoryView} />
            <Route exact path="/historia-medicacion" component={MedicationHistoryView} />
            <Route exact path="/capacits" component={CapacitsView} />
            <Route exact path="/blog" component={BlogView} />
        </Switch>
    </BrowserRouter>
)

export default Router