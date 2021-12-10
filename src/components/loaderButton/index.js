import Loader from "react-loader-spinner";

export function LoaderButton(props) {

    const { working, label, onClick } = props;

    return (
        <button
            disabled={working}
            className="btn btn-primary mt-2"
            onClick={onClick}>
            {working && <Loader type="ThreeDots" color="white" height={10} width={20} />}
            {!working && label}
        </button>

    );
}