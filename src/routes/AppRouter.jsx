import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../layouts/Layout";

import Home from "../pages/Home";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import Terms from "../pages/Terms";
import ResetPassword from "../pages/ResetPassword";
import EmailConfirmation from "../pages/EmailConfirmation";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Layout Wrapper */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
        </Route>

        {/* Auth / System Routes (no layout) */}
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/email-confirmation" element={<EmailConfirmation />} />

      </Routes>
    </BrowserRouter>
  );
}
