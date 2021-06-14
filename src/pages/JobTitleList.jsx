import React, { useEffect, useState } from 'react'
import { Dropdown } from 'semantic-ui-react'
import JobTitleService from '../services/jobTitleService'

export default function JobTitleList() {

    const [jobTitles, setjobTitles] = useState([])

    useEffect(()=>{
        let jobTitleService = new JobTitleService()
        jobTitleService.getJobTitles().then(result=>setjobTitles(result.data.data))
    })

    return (
        <div>
            <Dropdown placeholder='İş başlıkları' selection options={jobTitles.map((jobTitle) => <p>{jobTitle.title}</p>)} />
        </div>
    )
}
