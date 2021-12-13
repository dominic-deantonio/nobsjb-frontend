import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import { PostJobView } from "./routes/postJobView";
import { FavoritesView } from "./routes/favoritesView";
import { NotFoundView } from "./routes/notFoundView";
import { ProfileView } from "./routes/profileView";
import { JobsView } from "./routes/jobsView";
import { JobDetailView } from "./routes/jobDetailView";

const rootElement = document.getElementById("root");
render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="create-post" element={<PostJobView />} />
          <Route path="favorites" element={<FavoritesView />} />
          <Route path="error" element={<NotFoundView />} />
          <Route path="profile" element={<ProfileView />} />
          <Route path="jobs" element={<JobsView />} />
          <Route path='job' element={<JobDetailView />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);