export function PostJobView() {

  const doSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  }

  return (
    <div className="container d-flex flex-column">
      <h1 className="pt-2">Create Job Post</h1>
      <form onSubmit={doSubmit} id='job-form' className="d-flex flex-column pt-2">
        <label htmlFor='job-title'>Job title</label>
        <input id='job-title' />
        <br />
        <label htmlFor='company'>Company</label>
        <input id='company' />
        <br />
        <label htmlFor='location'>Location</label>
        <input id='location' />
        <br />
        <label htmlFor='job-type'>Job type</label>
        <select id="job-type" name="cars">
          <option value="full-time">Full-time</option>
          <option value="part-time">Part-time</option>
          <option value="contract">Contract</option>
          <option value="temporary">Temporary</option>
        </select>
        <br />
        <label htmlFor='benefits'>Benefits</label>
        <input id='benefits' />
        <br />
        <label htmlFor='salary'>Salary</label>
        <input type='number' id='salary' />
        <br />
        <label htmlFor='qualifications'>Qualifications</label>
        <textarea id='qualifications' />
        <br />
        <label htmlFor='description'>Description</label>
        <textarea id='description' />
        <br />
      </form>
      <button className="btn btn-primary" type="submit" form="job-form" >Post Job</button>
      <br/><br/><br/><br/>
    </div>
  );
}
