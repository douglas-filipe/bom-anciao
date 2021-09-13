import { Switch, Route } from "react-router";
import DashboardInstitution from "../pages/DashboardInstitution";
import LoginInstitution from "../pages/LoginInstitution";
import RegisterInstitution from "../pages/SignupInstitution";
import VoluntariesLogin from "../pages/VoluntariesLogin";
import { InstitutionDetails } from "../pages/institutionDetails";
import { LandingPage } from "../pages/landingPage";
import InstitutionSearch from "../pages/InstitutionSearch";
import { EventsVoluntary } from "../pages/eventsVoluntary";
import { ProfileUpdate } from "../pages/profileUpdate";
import Solicitations from "../pages/Solicitations";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <LandingPage />
      </Route>
      <Route path="/login-institution">
        <LoginInstitution />
      </Route>
      <Route path="/signup-institution">
        <RegisterInstitution />
      </Route>
      <Route path="/dashboard-institution">
        <DashboardInstitution />
      </Route>
      <Route path="/login-voluntary">
        <VoluntariesLogin />
      </Route>

      <Route path="/my-events">
        <EventsVoluntary />
      </Route>
      <Route path="/profile">
        <ProfileUpdate />
      </Route>
      <Route path="/search-institutions">
        <InstitutionSearch />
      </Route>
      <Route path="/institution/:id">
        <InstitutionDetails />
      </Route>

      <Route path="/solicitations">
        <Solicitations />
      </Route>
    </Switch>
  );
};

export default Routes;
