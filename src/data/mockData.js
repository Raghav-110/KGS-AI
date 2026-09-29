export const careers = [
  { title: 'Full Stack Development', icon: 'Layers3', text: 'Build complete web experiences, from interface to database.', skills: ['JavaScript', 'React', 'Node.js'], color: 'lilac' },
  { title: 'AI & Machine Learning', icon: 'BrainCircuit', text: 'Teach computers to learn, reason, and solve real problems.', skills: ['Python', 'ML', 'Data'], color: 'mint' },
  { title: 'Data Science', icon: 'ChartNoAxesCombined', text: 'Turn complex datasets into useful decisions and insight.', skills: ['Python', 'SQL', 'Statistics'], color: 'peach' },
  { title: 'Cybersecurity', icon: 'ShieldCheck', text: 'Protect systems and build safer digital infrastructure.', skills: ['Networks', 'Linux', 'Security'], color: 'blue' },
  { title: 'Cloud Computing', icon: 'Cloud', text: 'Design and operate resilient services at any scale.', skills: ['AWS', 'Docker', 'DevOps'], color: 'yellow' },
  { title: 'Mobile Development', icon: 'Smartphone', text: 'Create thoughtful apps for the devices we use every day.', skills: ['Kotlin', 'React Native', 'UI'], color: 'rose' },
]
export const wizard = [
  { key: 'goal', title: 'What is your future goal?', options: ['Get a Job','Get an Internship','Become a Software Developer','Become an AI/ML Engineer','Become a Data Scientist','Become a Cybersecurity Professional','Become a Cloud Engineer','Build Real-World Projects','Freelancing','Explore a Career'] },
  { key: 'career', title: 'Which career path interests you?', options: ['Full Stack Development','Backend Development','Frontend Development','AI & Machine Learning','Data Science','Cybersecurity','Cloud Computing','Mobile Development','Data Analytics','Not Sure Yet'] },
  { key: 'experienceLevel', title: 'What is your current experience level?', options: ['Complete Beginner','Beginner','Intermediate','Advanced'] },
  { key: 'preferredLanguage', title: 'Which programming language do you prefer?', options: ['Java','Python','JavaScript','C++','No Preference'] },
  { key: 'studyTime', title: 'How much time can you study every day?', options: ['30 Minutes','1 Hour','2 Hours','3+ Hours'] },
  { key: 'learningStyle', title: 'How do you prefer to learn?', options: ['Video','Reading','Coding Practice','Projects','Mixed'] },
]
export const phases = [
  { name: 'Java Fundamentals', duration: '2 weeks', topics: ['Introduction to Java','Variables & data types','Conditional statements','Loops','Methods','Arrays'] },
  { name: 'Object-Oriented Programming', duration: '3 weeks', topics: ['Classes & objects','Encapsulation','Inheritance','Polymorphism','Abstraction'] },
  { name: 'Data Structures & Algorithms', duration: '4 weeks', topics: ['Arrays & strings','Linked lists','Stacks & queues','Trees','Graphs'] },
  { name: 'Databases', duration: '2 weeks', topics: ['SQL foundations','MySQL','JDBC'] },
  { name: 'Backend Development', duration: '4 weeks', topics: ['Spring','Spring Boot','REST APIs','JPA & Hibernate'] },
  { name: 'Frontend Development', duration: '3 weeks', topics: ['HTML & CSS','JavaScript','React'] },
  { name: 'Portfolio Projects', duration: '4 weeks', topics: ['Student management system','E-commerce application','Banking application','Final capstone'] },
]
export const assessment = [
  { question: 'Have you programmed before?', options: ['Not yet','A little','Regularly'] },
  { question: 'How comfortable are you with programming?', options: ['Still learning the basics','Getting more confident','Very comfortable'] },
  { question: 'Have you used Git?', type: 'yesno', options: ['Yes','No'] },
  { question: 'Do you know SQL?', options: ['No','Some basics','Yes'] },
  { question: 'Have you built a project?', options: ['Not yet','A small one','Several projects'] },
  { question: 'How comfortable are you with problem solving?', type: 'slider' },
  { question: 'What helps you learn something new?', options: ['One step at a time','Clear milestones','Hands-on projects'] },
  { question: 'What helps you stay consistent?', options: ['Short lessons','A clear plan','A learning buddy'] },
]
export const video = { title: 'Java Variables for Beginners', videoId: 'eIrMbAQSU34', duration: '18 min', language: 'English', difficulty: 'Beginner' }
export const codeSample = 'public class Main {\n  public static void main(String[] args) {\n    int age = 18;\n    System.out.println(age);\n  }\n}'
export const practices = [
  { title:'Calculate Sum', difficulty:'Easy', topic:'Variables', time:'15 min' }, { title:'Reverse a Number', difficulty:'Easy', topic:'Loops', time:'20 min' },
  { title:'Find Maximum', difficulty:'Easy', topic:'Conditionals', time:'15 min' }, { title:'Check Even or Odd', difficulty:'Easy', topic:'Conditionals', time:'10 min' },
  { title:'Palindrome', difficulty:'Medium', topic:'Strings', time:'25 min' }, { title:'Fibonacci Sequence', difficulty:'Medium', topic:'Loops', time:'30 min' },
]
export const projectData = [
  { title:'Student Management System', difficulty:'Beginner', duration:'1 week', description:'Organize student records, courses, and grades.', skills:['Java','OOP','Collections'] },
  { title:'E-Commerce Application', difficulty:'Intermediate', duration:'3 weeks', description:'Build a shop with products, carts, and checkout.', skills:['Spring Boot','REST API','SQL'] },
  { title:'Banking System', difficulty:'Intermediate', duration:'2 weeks', description:'Model accounts, transactions, and secure transfers.', skills:['Java','OOP','MySQL'] },
  { title:'Full Stack Capstone', difficulty:'Advanced', duration:'4 weeks', description:'Bring your skills together in a portfolio-ready product.', skills:['React','Spring Boot','SQL'] },
]
export const notificationsSeed = [
  {id:1,title:'Your daily learning plan is ready.',detail:'Three focused activities are waiting in your plan.',time:'Just now',read:false,type:'plan'},
  {id:2,title:'Your Java lesson is incomplete.',detail:'Pick up where you left off in Java Variables.',time:'2 hours ago',read:false,type:'lesson'},
  {id:3,title:'You scored 90% in your quiz.',detail:'Great work on your Java fundamentals quiz.',time:'Yesterday',read:true,type:'quiz'},
  {id:4,title:'Your 7-day learning streak is active.',detail:'A little progress today keeps it going.',time:'Yesterday',read:true,type:'streak'},
  {id:5,title:'New project unlocked.',detail:'Student Management System is ready to start.',time:'2 days ago',read:true,type:'project'},
]
export const practiceQuestions = [
 { q:'What is the correct way to declare an integer variable in Java?',a:['int age;','integer age;','number age;','IntegerVariable age;'],correct:0 },
 { q:'Which type stores a sequence of characters?',a:['char','String','boolean','int'],correct:1 },
 { q:'Which symbol assigns a value to a variable?',a:['==','=','=>',':'],correct:1 },
 { q:'Which value can a boolean hold?',a:['A whole number','A word','true or false','A decimal'],correct:2 },
 { q:'Which is a valid variable name?',a:['2score','student-name','studentScore','class'],correct:2 },
]
