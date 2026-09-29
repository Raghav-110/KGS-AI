import { phases } from '../data/mockData'

export function generatePersonalizedRoadmap(profile = {}) {
  return {
    summary: { goal: profile.goal || 'Become a Software Developer', career: profile.career || 'Full Stack Development', language: profile.preferredLanguage || 'Java', level: profile.experienceLevel || 'Beginner', studyTime: profile.studyTime || '1 Hour', learningStyle: profile.learningStyle || 'Mixed' },
    phases: phases.map((phase, p) => ({ ...phase, topics: phase.topics.map((title, i) => ({ title, duration: i % 2 ? '30 min' : '40 min', difficulty: p > 2 ? 'Intermediate' : (profile.experienceLevel || 'Beginner'), status: p === 0 && i < 2 ? 'Completed' : p === 0 && i === 2 ? 'In Progress' : p === 0 && i === 3 ? 'Recommended' : 'Locked' })) })),
  }
}
export function getNextRecommendation() { return { topic:'Java Methods', reason:'Your prerequisite topics are complete. Methods help you write reusable, organized programs.', duration:'40 min', type:'LESSON' } }
export function getAIResponse(message = '', lessonContext = 'Java Variables') {
  const text = message.toLowerCase()
  if (text.includes('example')) return 'For example, int score = 90; creates a variable named score and stores the whole number 90.'
  if (text.includes('practice') || text.includes('question')) return 'Try this: create a String variable called city, assign it your city name, then print it. What type did you choose and why?'
  if (text.includes('hint')) return 'Start by choosing a data type that matches the value. Whole numbers use int; words use String.'
  if (text.includes('summar')) return 'Variables are named places to store values. Declare a type, choose a name, and optionally assign a starting value.'
  return `A variable is a named place in your program where you keep a value. Think of it like a labeled box. That is the central idea in ${lessonContext}.`
}
