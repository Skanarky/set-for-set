import React from "react";
import { connect } from "react-redux";

function ProfilePassEdit(props) {
    return (
        <div className="signup-form-wrapper">
            <form className="signup-form-container" onSubmit={props.handleSubmit}>
                <h3 className="signup-head">Profile</h3>
                <input className="signup-form-input" onChange={props.handleChange}
                    value={props.passEdit}
                    name="password"
                    type="password"
                    placeholder="Change Password (min. 6 char.)" />

                <button className="signup-butt" onClick={props.toggleIsEditing}>Back to Profile</button>
                <button className="signup-butt" disabled={props.passEdit.length < 6} type="submit">Save New Password</button>

                {props.errMsg && <p>{props.errMsg}</p>}

            </form>

        </div>
    )
}

export default connect(state => state.user, {})(ProfilePassEdit);