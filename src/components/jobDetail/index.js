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
    return (
        <div className="mt-1 p-2">
            {title}<br />
            <button>Apply</button><br />
            {salary}<br />
            {companyname}<br />
            {location}<br />
            {details.benefits}<br />
            {details.type}<br />
            {payrating}<br />
            {payratinginfo}<br />
            Applied: {userdidapply}<br />
            Applied Date: {userapplieddate}<br />
            Is Favorite: {isfavorite}

        </div>
    );
}