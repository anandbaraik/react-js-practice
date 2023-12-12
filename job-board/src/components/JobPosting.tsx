import { JobType } from "../types/Job.types"
const JobPosting = (props:JobType) => {
    const {by, time, title, url} = props;
    const formattedTime = new Date(time*1000).toLocaleString();
    return (
        <div className="post" role="listitem">
            <h2 className="post__title">
                <a href={url} target="_blank" rel="noopener noreferrer"
                    className={url ? url : 'post__inactive_link'}>
                    {title}
                </a>
            </h2>
            <p className="post__meta-data">
                {`by ${by} . ${formattedTime}`}
            </p>
        </div>
    )
}

export default JobPosting