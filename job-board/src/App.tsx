import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import JobPosting from './components/JobPosting';
import { JobType } from './types/Job.types';
const ITEMS_PER_PAGE = 6;
const API_URL = 'https://hacker-news.firebaseio.com/v0/';
function App() {
  const [jobs, setJobs] = useState<JobType[]>([]);
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [jobIds, setJobIds] = useState<number[] | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const fetchJobs = async (activePage:number) => {
    setIsFetching(true);
    let jobIdList = jobIds;
    if(jobIdList === null) {
        try {
            const response = await fetch(`${API_URL}/jobstories.json`);
            jobIdList = await response.json();
            setJobIds(jobIdList);
        } catch (error) {
            console.log(`something went wrong while fetching jobIds - `, error);
            setIsFetching(false);
            return;
        }
    }

    try {
        const jobIdsForPage = jobIdList?.slice(
            activePage * ITEMS_PER_PAGE,
            activePage * ITEMS_PER_PAGE + ITEMS_PER_PAGE
        )
        const jobsForPage = await Promise.all(jobIdsForPage?.map((id) => fetch(`${API_URL}/item/${id}.json`).then((res) => res.json())) || []);
        setJobs([...jobs, ...jobsForPage]);
    } catch (error) {
        console.log(`something went wrong while fetching jobs - `, error);
    } finally {
        setIsFetching(false);
    }
  }
  useEffect(() => {
    fetchJobs(currentPage);
  }, [currentPage]);
  return (
    <>
      <Header header={'Hacker News Jobs Board'}/>
      <div>
            {
                jobIds === null || jobs.length < 1 ?
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
                        {
                            (jobs.length > 0) && ((currentPage * ITEMS_PER_PAGE + ITEMS_PER_PAGE) < jobIds.length) && (
                                <button onClick={() => {setCurrentPage(currentPage + 1)}} type="button" className={`btn load-more-btn ${isFetching ? 'loading' : ''}`} disabled={isFetching}>
                                    {isFetching ? 'Loading' : 'Load more jobs'}
                                </button>
                            )
                        }
                    </>
                )
            }
      </div>
    </>
  )
}

export default App
