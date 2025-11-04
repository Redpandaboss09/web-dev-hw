import { useState } from "react";

export default function EventObject() {
    const [event, setEvent] = useState<Partial<MouseEvent> | null>(null);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const clone: Partial<MouseEvent> = { ...e.nativeEvent };
        setEvent(clone);
    };

    return (
        <div>
            <h2>Event Object</h2>
            <button
                onClick={handleClick}
                className="btn btn-primary"
                id="wd-display-event-obj-click"
            >
                Display Event Object
            </button>
            <pre>{JSON.stringify(event, null, 2)}</pre>
            <hr />
        </div>
    );
}
