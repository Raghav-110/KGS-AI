import { Navigate, Route, Routes } from 'react-router-dom'
import { AppLayout } from './components/Shared'
import { load } from './utils/storage'
import { Landing, AuthPage, Onboarding } from './pages/PublicPages'
import Assessment from './pages/AssessmentPage'
import { Dashboard, Roadmap, Lesson, Practice, Quiz, Projects, ProgressPage } from './pages/LearningPages'
import { Notifications, Profile, SettingsPage } from './pages/AccountPages'

function Protected({children}) { return load('onboardingCompleted',false)?<AppLayout>{children}</AppLayout>:<Navigate to="/login" replace/> }
export default function App(){return <Routes>
 <Route path="/" element={<Landing/>}/><Route path="/login" element={<AuthPage/>}/><Route path="/signup" element={<AuthPage signup/>}/><Route path="/onboarding" element={<Onboarding/>}/><Route path="/assessment" element={<Assessment/>}/>
 <Route path="/dashboard" element={<Protected><Dashboard/></Protected>}/><Route path="/roadmap" element={<Protected><Roadmap/></Protected>}/><Route path="/learn/:lessonId" element={<Protected><Lesson/></Protected>}/><Route path="/practice" element={<Protected><Practice/></Protected>}/><Route path="/quiz/:quizId" element={<Protected><Quiz/></Protected>}/><Route path="/projects" element={<Protected><Projects/></Protected>}/><Route path="/progress" element={<Protected><ProgressPage/></Protected>}/><Route path="/notifications" element={<Protected><Notifications/></Protected>}/><Route path="/profile" element={<Protected><Profile/></Protected>}/><Route path="/settings" element={<Protected><SettingsPage/></Protected>}/><Route path="*" element={<Navigate to="/" replace/>}/>
 </Routes>}
