import { Heart, InfoCircle } from 'react-bootstrap-icons';
import './style.css';
import { SalaryLabel } from '../salaryLabel';

export function JobDetail(props) {
    const {
        title,
        salary,
        companyname,
        location,
        payrating,
        payratinginfo,
        details,
        qualifications,
        description,
        userdidapply,
        userapplieddate,
        isfavorite } = props.job;
    const { user } = props;
    return (
        <div >
            <h1>{title}</h1>
            <div className='d-flex flex-row justify-content-between'>
                <div className='d-flex flex-row'>
                    <SalaryLabel salary={salary} />
                    <div className='pe-1'>
                        <button className='btn btn-primary'>Apply</button>
                    </div>
                    {user &&
                        <div >
                            <button className='btn btn-danger'><Heart /></button>
                        </div>
                    }
                </div>
            </div>

            <p className='pt-3'>
                {companyname}<br />
                {location}
            </p>
            <hr />
            <h3>Details</h3>
            {details.benefits}<br />
            {details.type}<br /><br />
            <h3>Qualifications</h3>
            {qualifications}<br /><br />
            <h3>Description</h3>
            {description}<br /><br />
        </div>
    );
}