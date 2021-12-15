import { postJob } from '../../services/api'
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../services/firebase";
import formJson from 'form-json'

export function PostJobView() {
  const [user] = useAuthState(auth);

  const doSubmit = async (e) => {
    e.preventDefault();
    const job = formJson(e.currentTarget)
    const success = await postJob(user, job);
    if (success) {
      window.location.reload(true);
    } else {
      console.log('Failed to create the job');
    }
  }

  return (
    <div className="container d-flex flex-column">
      <h1 className="pt-2">Create Job Post</h1>
      <form onSubmit={doSubmit} id='job-form' className="d-flex flex-column pt-2">
        <label htmlFor='job-title' >Job title</label>
        <input required id='job-title' name="title" />
        <br />
        <label htmlFor='company'>Company</label>
        <input required id='company' name="companyname" />
        <br />
        <label htmlFor='location'>Location</label>
        <input required id='location' name="location" />
        <br />
        <label htmlFor='job-type'>Job type</label>
        <select required id="job-type" name="type">
          <option value="full-time">Full-time</option>
          <option value="part-time">Part-time</option>
          <option value="contract">Contract</option>
          <option value="temporary">Temporary</option>
        </select>
        <br />
        <label htmlFor='benefits'>Benefits</label>
        <input required id='benefits' name="benefits" />
        <br />
        <label htmlFor='salary'>Salary</label>
        <input required type='number' id='salary' name='salary' />
        <br />
        <label htmlFor='qualifications'>Qualifications</label>
        <textarea required id='qualifications' name='qualifications' />
        <br />
        <label htmlFor='description'>Description</label>
        <textarea required id='description' name='description' />
        <br />
      </form>
      <button className="btn btn-primary" type="submit" form="job-form" >Post Job</button>
      <br /><br /><br /><br />
    </div>
  );
}
