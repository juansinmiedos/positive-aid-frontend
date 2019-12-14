import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HomeView from './components/home/HomeView.jsx'
import SignupView from './components/signup/SignupView.jsx'
import ConfirmationView from './components/confirmation/ConfirmationView.jsx'
import LoginView from './components/login/LoginView.jsx'
import DashboardView from './components/dashboard/DashboardView.jsx'
import ProfileView from './components/profile/ProfileView.jsx'
import HistoryView from './components/history/HistoryView.jsx'
import LabResultHistoryView from './components/labResultHistory/LabResultHistoryView.jsx'
import AppointmentHistoryView from './components/appointmentHistory/AppointmentHistoryView.jsx'
import MedicationHistoryView from './components/medicationHistory/MedicationHistoryView.jsx'
import CapacitsView from './components/capacits/CapacitsView.jsx'
import BlogView from './components/blog/BlogView.jsx'

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