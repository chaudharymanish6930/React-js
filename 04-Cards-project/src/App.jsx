import React from 'react'
import Card from './components/Card.jsx'

const  App = () => {
  // const arr =[
  //   {
  //     user:"Shivam",
  //     age:24
  //   },
  //   {
  //     user:"Rhoit",
  //     age:46
  //   },
  //   {
  //     user:"Mohit",
  //     age:23
  //   }
  // ];

  const jobs = [
  {
    company: "Amazon",
    posted: "5 days ago",
    role: "Senior UI/UX Designer",
    type: "Part Time",
    level: "Senior Level",
    salary: "$120/hr",
    location: "Mumbai, India",
    image: "https://logo.clearbit.com/amazon.com"
  },
  {
    company: "Google",
    posted: "2 days ago",
    role: "Frontend Developer",
    type: "Full Time",
    level: "Mid Level",
    salary: "$150/hr",
    location: "Bangalore, India",
    image: "https://imgs.search.brave.com/7Ev6F4Y44DFV2Ic7s--NpSt1UfOz8gnUJBACe6ubdIU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi8wLzA2L0Ft/YXpvbl8yMDI0LnN2/Zy8yNTBweC1BbWF6/b25fMjAyNC5zdmcu/cG5n"
  },
  {
    company: "Microsoft",
    posted: "1 week ago",
    role: "Backend Developer",
    type: "Full Time",
    level: "Senior Level",
    salary: "$140/hr",
    location: "Hyderabad, India",
    image: "https://imgs.search.brave.com/7Ev6F4Y44DFV2Ic7s--NpSt1UfOz8gnUJBACe6ubdIU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi8wLzA2L0Ft/YXpvbl8yMDI0LnN2/Zy8yNTBweC1BbWF6/b25fMjAyNC5zdmcu/cG5n"
  },
  {
    company: "Netflix",
    posted: "3 days ago",
    role: "UI Designer",
    type: "Contract",
    level: "Mid Level",
    salary: "$130/hr",
    location: "Remote",
    image: "https://imgs.search.brave.com/7Ev6F4Y44DFV2Ic7s--NpSt1UfOz8gnUJBACe6ubdIU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi8wLzA2L0Ft/YXpvbl8yMDI0LnN2/Zy8yNTBweC1BbWF6/b25fMjAyNC5zdmcu/cG5n"
  },
  {
    company: "Adobe",
    posted: "4 days ago",
    role: "UX Researcher",
    type: "Full Time",
    level: "Senior Level",
    salary: "$125/hr",
    location: "Noida, India",
    image: "https://imgs.search.brave.com/7Ev6F4Y44DFV2Ic7s--NpSt1UfOz8gnUJBACe6ubdIU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi8wLzA2L0Ft/YXpvbl8yMDI0LnN2/Zy8yNTBweC1BbWF6/b25fMjAyNC5zdmcu/cG5n"
  },
  {
    company: "Facebook",
    posted: "6 days ago",
    role: "React Developer",
    type: "Full Time",
    level: "Junior Level",
    salary: "$110/hr",
    location: "Pune, India",
    image: "https://imgs.search.brave.com/7Ev6F4Y44DFV2Ic7s--NpSt1UfOz8gnUJBACe6ubdIU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi8wLzA2L0Ft/YXpvbl8yMDI0LnN2/Zy8yNTBweC1BbWF6/b25fMjAyNC5zdmcu/cG5n"
  },
  {
    company: "Tesla",
    posted: "1 day ago",
    role: "Product Designer",
    type: "Full Time",
    level: "Senior Level",
    salary: "$160/hr",
    location: "Remote",
    image: "https://logo.clearbit.com/tesla.com"
  },
  {
    company: "Spotify",
    posted: "2 weeks ago",
    role: "UI Engineer",
    type: "Part Time",
    level: "Mid Level",
    salary: "$115/hr",
    location: "Delhi, India",
    image: "https://logo.clearbit.com/spotify.com"
  },
  {
    company: "Uber",
    posted: "3 days ago",
    role: "Full Stack Developer",
    type: "Full Time",
    level: "Senior Level",
    salary: "$135/hr",
    location: "Gurgaon, India",
    image: "https://logo.clearbit.com/uber.com"
  },
  {
    company: "Airbnb",
    posted: "5 days ago",
    role: "UX Designer",
    type: "Contract",
    level: "Mid Level",
    salary: "$145/hr",
    location: "Remote",
    image: "https://logo.clearbit.com/airbnb.com"
  }
];

  return (
    <div className='parent' >
      {jobs.map(function(ele, index){

        return <div key={index}>
          <Card company={ele.company} posted={ele.posted} 
        role={ele.role} type={ele.type}
        level={ele.level} salary={ele.salary}
        location={ele.location} image={ele.image} />
        </div>
      })}
    </div>
  )
}

export default  App