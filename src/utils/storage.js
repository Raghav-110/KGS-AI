export const studentDefaults = { name:'Alex Morgan', email:'alex@example.com', goal:'Become a Software Developer', career:'Full Stack Development', experienceLevel:'Beginner', preferredLanguage:'Java', studyTime:'2 Hours', learningStyle:'Mixed' }
export function load(key, fallback) { try { const value=localStorage.getItem(key); return value?JSON.parse(value):fallback } catch { return fallback } }
export function save(key, value) { localStorage.setItem(key, JSON.stringify(value)); return value }
export function useStored(key, fallback) { const [value,setValue]=React.useState(()=>load(key,fallback)); const update=next=>{setValue(next);save(key,next)}; return [value,update] }
import React from 'react'
