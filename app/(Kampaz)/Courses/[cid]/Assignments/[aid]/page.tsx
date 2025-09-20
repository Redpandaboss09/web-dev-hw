export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <label htmlFor="wd-name">Assignment Name</label>
            <input id="wd-name" defaultValue="A1 - ENV + HTML" /><br /><br />
            <textarea id="wd-description" defaultValue="The assignment is available online" />
            <br />
            <table>
                <tbody>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-points">Points</label>
                    </td>
                    <td>
                        <input id="wd-points" type="number" defaultValue={100} />
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-group">Assignment Group</label>
                    </td>
                    <td>
                        <select id="wd-group">
                            <option>ASSIGNMENTS</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-display-grade-as">Display Grade as</label>
                    </td>
                    <td>
                        <select id="wd-display-grade-as">
                            <option>PERCENTAGE</option>
                            <option>POINTS</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-submission-type">Submission Type</label>
                    </td>
                    <td>
                        <select id="wd-submission-type">
                            <option>Online</option>
                            <option>Paper</option>
                        </select>
                        <br />

                        <label>Online Entry Options</label>
                        <br />

                        <label>
                            <input id="wd-text-entry" type="checkbox" name="wd-online-type" />
                            Text Entry
                        </label>
                        <br />

                        <label>
                            <input id="wd-website-url" type="checkbox" name="wd-online-type" />
                            Website URL
                        </label>
                        <br />

                        <label>
                            <input id="wd-media-recordings" type="checkbox" name="wd-online-type" />
                            Media Recordings
                        </label>
                        <br />

                        <label>
                            <input id="wd-student-annotations" type="checkbox" name="wd-online-type" />
                            Student Annotations
                        </label>
                        <br />

                        <label>
                            <input id="wd-file-upload" type="checkbox" name="wd-online-type" />
                            File Uploads
                        </label>
                        <br />
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-assign-to">Assign</label>
                    </td>
                    <td>
                        <label htmlFor="wd-assign-to">Assign To</label><br />
                        <input id="wd-assign-to" defaultValue="Everyone"></input>
                        <br />

                        <label htmlFor="wd-due-date">Due</label>
                        <br />
                        <input type="date" defaultValue="2025-09-19" id="wd-due-date" />
                        <br />

                        <label htmlFor="wd-available-from">Available From</label>
                        <br />
                        <input type="date" defaultValue="2025-09-19" id="wd-available-from" />
                        <br />

                        <label htmlFor="wd-available-until">Until</label>
                        <br />
                        <input type="date" defaultValue="2025-09-26" id="wd-available-until" />
                    </td>
                </tr>
                </tbody>
            </table>
            <button type="submit">Cancel</button>
            <button type="submit">Save</button>
        </div>
    );}
