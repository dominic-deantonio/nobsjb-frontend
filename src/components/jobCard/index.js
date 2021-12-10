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
    return (
        <div className="card bg-info m-2">
            {title}
            {salary}
            {companyname}
            {location}
            {payrating}
            {payratinginfo}
            {details.benefits}
            {details.type}
            {qualifications}
            {description}
            {userdidapply}
            {userapplieddate}
            {isfavorite}
        </div>

    );
}

