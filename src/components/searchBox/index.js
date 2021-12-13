import { LoaderButton } from "../../components/loaderButton";
import { useState } from "react";

export function SearchBox(props) {

    const { callback, working } = props;
    const [what, setWhat] = useState('');
    const [where, setWhere] = useState('');

    return (
        <>
            <div className="d-flex flex-column">
                <input className="mt-2" placeholder="What" onChange={(e) => setWhat(e.target.value)} />
                <input className="mt-2" placeholder="Where" onChange={e => setWhere(e.target.value)} />
                <LoaderButton label='Find jobs' onClick={() => callback(what, where)} working={working} />
            </div>
        </>
    );
}