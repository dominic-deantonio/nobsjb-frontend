export function JobCard(props) {
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
    const { isSelected } = props;
    return (
        <div className="card mt-1 shadow">
            <div className={`btn ${isSelected ? 'btn-danger' : 'btn-light'} p-2`}>
                <div
                    onClick={props.select}>
                    {title}<br />
                    {salary}<br />
                    {companyname}<br />
                    {location}<br />
                    {payrating}<br />
                    {payratinginfo}<br />

                    Applied: {userdidapply}<br />
                    Applied Date: {userapplieddate}<br />
                    Is Favorite: {isfavorite}<br />
                </div>
            </div>

        </div>


    );
}

