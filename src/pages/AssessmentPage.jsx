import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, ArrowRight, BrainCircuit, Check, CheckCircle2, Sparkles } from '../components/icons'
import { Badge, Brand, Button, ProgressBar } from '../components/Shared'
import { assessment } from '../data/mockData'
import { generatePersonalizedRoadmap } from '../services/mockAI'
import { load, save, studentDefaults } from '../utils/storage'

export default function AssessmentPage() {
  const navigate = useNavigate()
  const [index, setIndex] = useState(0)
  const [answers, setAnswers] = useState({})
  const [analyzing, setAnalyzing] = useState(false)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    if (!analyzing) return undefined
    const timer = setTimeout(() => setReady(true), 2600)
    return () => clearTimeout(timer)
  }, [analyzing])

  const viewRoadmap = () => {
    save('roadmap', generatePersonalizedRoadmap(load('studentProfile', studentDefaults)))
    navigate('/roadmap')
  }

  if (analyzing) return <div className="analysis-page">
    <div className="analysis-icon"><BrainCircuit size={31}/><span/></div>
    <Badge tone="violet">BUILDING YOUR LEARNING PROFILE</Badge>
    <h1>{ready ? 'Your path is ready.' : 'Connecting the dots.'}</h1>
    <p>{ready ? 'We shaped a learning plan around your goals and the skills you already have.' : 'We’re shaping a plan around your goals and the skills you already have.'}</p>
    <div className="analysis-list">{['Understanding your goal','Analyzing your current skills','Selecting the right learning path','Organizing learning phases','Preparing your personalized roadmap'].map((item,i)=><div className={ready?'analysis-complete':''} style={{animationDelay:`${i*350}ms`}} key={item}><span><Check size={13}/></span>{item}</div>)}</div>
    {ready ? <Button onClick={viewRoadmap}>View my roadmap <ArrowRight size={15}/></Button> : <small>Your personalized learning path is almost ready.</small>}
  </div>

  const question = assessment[index]
  const selected = answers[index] !== undefined
  const choose = value => setAnswers(previous => ({ ...previous, [index]: value }))
  return <div className="assessment-page">
    <header className="flow-top"><Brand/><button className="skip-link" onClick={viewRoadmap}>Skip for now <ArrowRight size={14}/></button></header>
    <main className="assessment-layout">
      <section className="assessment-intro"><Badge tone="violet"><Sparkles size={13}/> YOUR STARTING POINT</Badge><h1>Let's find the<br/><em>right place to begin.</em></h1><p>This quick check helps us meet you where you are. No grades, no pressure.</p><div className="assessment-promise"><CheckCircle2 size={17}/><span><b>A better fit from day one</b><small>Your roadmap reflects what you already know.</small></span></div></section>
      <section className="assessment-card">
        <div className="assessment-card-top"><span>SKILL CHECK</span><b>{index+1}<i>/</i>8</b></div><ProgressBar value={(index+1)/8*100}/><span className="eyebrow">QUESTION 0{index+1}</span><h2>{question.question}</h2>
        {question.type === 'slider' ? <div className="assessment-slider"><input aria-label="Problem-solving comfort, from 1 to 5" type="range" min="1" max="5" step="1" value={answers[index] ?? 3} onChange={event=>choose(Number(event.target.value))}/><div><span>Still learning</span><b>{answers[index] ?? 3} / 5</b><span>Very confident</span></div></div> : <div className={`assessment-options ${question.type === 'yesno'?'assessment-yesno':''}`}>{question.options.map(option=><button key={option} onClick={()=>choose(option)} className={answers[index]===option?'assessment-selected':''}>{option}<span>{answers[index]===option?<CheckCircle2 size={18}/>:<i/>}</span></button>)}</div>}
        <div className="assessment-controls"><button className="back-button" onClick={()=>index?setIndex(index-1):navigate('/onboarding')}><ArrowLeft size={15}/> Back</button><Button disabled={!selected} onClick={()=>index<7?setIndex(index+1):setAnalyzing(true)}>{index===7?'Finish assessment':'Next question'} <ArrowRight size={15}/></Button></div>
      </section>
    </main>
  </div>
}
