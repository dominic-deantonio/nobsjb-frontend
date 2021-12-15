export function SalaryLabel(props) {
    const { salary } = props;
    return (
        <button className='btn btn-success align-items-center me-1' >
            <div className='d-flex flex-row'>
                <div>
                    {getFormattedSalary(salary)}
                </div>
            </div>
        </button>
    );
}

function getFormattedSalary(number) {
    return `\$${number}`;
}