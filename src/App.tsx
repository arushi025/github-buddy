import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import Setup from "./pages/Setup.tsx";
import GitBasics from "./pages/GitBasics.tsx";
import GithubBasics from "./pages/GithubBasics.tsx";
import WorkflowPage from "./pages/WorkflowPage.tsx";
import FirstProject from "./pages/FirstProject.tsx";
import Errors from "./pages/Errors.tsx";
import Practice from "./pages/Practice.tsx";
import Cheatsheet from "./pages/Cheatsheet.tsx";
import PullRequestGuide from "./pages/PullRequestGuide.tsx";
import Auth from "./pages/Auth.tsx";
import Profile from "./pages/Profile.tsx";
import NotFound from "./pages/NotFound.tsx";
import CursorTrail from "./components/CursorTrail.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CursorTrail />
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/setup" element={<Setup />} />
          <Route path="/git-basics" element={<GitBasics />} />
          <Route path="/github-basics" element={<GithubBasics />} />
          <Route path="/workflow" element={<WorkflowPage />} />
          <Route path="/first-project" element={<FirstProject />} />
          <Route path="/errors" element={<Errors />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/pr-guide" element={<PullRequestGuide />} />
          <Route path="/cheatsheet" element={<Cheatsheet />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
