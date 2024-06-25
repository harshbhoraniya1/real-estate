import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Lead from "./lead/Lead";
import RequireAuth from "./private/RequireAuth";
import Contact from "./contact/Contact";

export default function App() {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Login</Link>
        </li>
        <li>
          <Link to="/lead">Lead</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route
          path="/lead"
          element={
            <RequireAuth>
              {" "}
              <Lead />{" "}
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/contact"
          element={
            <RequireAuth>
              {" "}
              <Contact />{" "}
            </RequireAuth>
          }
        ></Route>
      </Routes>
    </>
  );
}
