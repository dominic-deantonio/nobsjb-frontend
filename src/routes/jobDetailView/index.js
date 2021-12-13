import { JobDetail } from "../../components/jobDetail";
import { useLocation } from "react-router-dom";

// This view exists only for when the screen is too small to view the selected job on the same page
export function JobDetailView() {
    const { state } = useLocation(); // The search results from home page
    return (
        <div className="p-3">
            <JobDetail job={state} />
        </div>
    );
}