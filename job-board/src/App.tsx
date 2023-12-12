import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import JobPosting from './components/JobPosting'
import { JobType } from './types/Job.types'
function App() {
  const [jobs, setJobs] = useState<JobType[]>([
    {
      "by": "jamilbk",
      "id": 35902323218337,
      "score": 1,
      "time": 1683838872,
      "title": "Firezone (YC W22) is hiring Elixir and Rust engineers",
      "type": "job",
      "url": ""
    },
    {
      "by": "jamilbk",
      "id": 3590218337,
      "score": 1,
      "time": 1683838872,
      "title": "Firezone (YC W22) is hiring Elixir and Rust engineers",
      "type": "job",
      "url": "https://www.ycombinator.com/companies/firezone/jobs"
    },
    {
      "by": "jamilbk",
      "id": 3590338337,
      "score": 1,
      "time": 1683838872,
      "title": "Firezone (YC W22) is hiring Elixir and Rust engineers",
      "type": "job",
      "url": "https://www.ycombinator.com/companies/firezone/jobs"
    }
  ]);
  const [isFetching, setIsFetching] = useState<boolean>(false);
  return (
    <>
      <Header header={'Hacker News Jobs Board'}/>
      <div>
            {
                jobs === null || jobs.length < 1 ?
                (
                    <div>Loading....</div>
                ) : (
                    <>
                        <div className='list'>
                            {
                                jobs.map((job) => {
                                return <JobPosting key={job.id} {...job}/>
                                })
                            }
                        </div>
                        <button type="button" className={`btn load-more-btn ${isFetching ? 'loading' : ''}`} disabled={isFetching}>
                            {isFetching ? 'Loading' : 'Load more jobs'}
                        </button>
                    </>
                )
            }
      </div>
    </>
  )
}

export default App
