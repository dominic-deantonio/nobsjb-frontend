import { SalaryLabel } from "../salaryLabel";

export function JobCard(props) {
    const {
        title,
        salary,
        companyname,
        location,
    } = props.job;
    const { isSelected, user } = props;
    return (
        <div className={`card ${isSelected ? 'border-primary' : 'btn-light'} mt-1 shadow-sm`}>
            <div className={`p-1`}>
                <div
                    onClick={props.select}>
                    <h5>{title}</h5>
                    <div className="d-flex flex-row">
                        <SalaryLabel salary={salary} />
                        {user &&
                            <>
                                <div className="pe-1">
                                    <button className="btn btn-dark ">{'<3'}</button>
                                </div>
                                <button className="btn btn-warning">{'(\\)'}</button>
                            </>
                        }


                    </div>
                    {companyname}<br />
                    {location}<br />
                </div>
            </div>

        </div>


    );
}

