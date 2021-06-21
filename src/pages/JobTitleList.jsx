import React, { useEffect, useState } from "react";
import { Dropdown } from "semantic-ui-react";
import JobTitleService from "../services/jobTitleService";

export default function JobTitleList() {
  const [jobTitles, setJobTitles] = useState([]);

  useEffect(() => {
    let jobTitleService = new JobTitleService();
    jobTitleService
      .getJobTitles()
      .then((result) => setJobTitles(result.data.data));
  }, []);

  return (
    <div>
      <Dropdown style={{marginRight:"3.5em"}}
        placeholder="Başlık seçiniz"
        selection
        options={jobTitles.map((jobTitle) => (
          <Dropdown.Item key={jobTitle.id}>{jobTitle.title}</Dropdown.Item>
        ))}
      />
    </div>
  );
}
