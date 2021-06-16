import React, { useEffect, useState } from "react";
import { Dropdown } from "semantic-ui-react";
import JobTitleService from "../services/jobTitleService";

export default function JobTitleList() {
  const [jobTitles, setjobTitles] = useState([]);

  useEffect(() => {
    let jobTitleService = new JobTitleService();
    jobTitleService
      .getJobTitles()
      .then((result) => setjobTitles(result.data.data));
  });

  return (
    <div>
      <Dropdown
        placeholder="Başlık seçiniz"
        selection
        options={jobTitles.map((jobTitle) => (
          <option key={jobTitle.id}>{jobTitle.title}</option>
        ))}
      />
    </div>
  );
}
