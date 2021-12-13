import { InfoCircle } from "react-bootstrap-icons";

export function SalaryLabel(props) {
    const { salary } = props;
    return (
        <button className='btn btn-success align-items-center me-1' >
            <div className='d-flex flex-row'>
                <div>
                    {getFormattedSalary(salary)}
                </div>
                {/* <div className="pe-2"/>
                <div ><InfoCircle /></div> */}
            </div>
        </button>
    );
}

function getFormattedSalary(number) {
    return `\$${number}`;
}