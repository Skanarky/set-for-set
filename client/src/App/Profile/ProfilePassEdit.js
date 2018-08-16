import React from "react";
import { connect } from "react-redux";

function ProfilePassEdit(props) {
    if (props.loading) return <h1>... Loading!</h1>;
    if (props.errMsgPass) return <p>Sorry, password can not be changed now!</p>;
    if (props.msgSuccess) {
        // setTimeout(props.toggleIsEditingPass, 2000);
        return (
            <div className="signup-form-wrapper">
                <form className="signup-form-container">
                    <h3 className="signup-head">{props.msgSuccess}</h3>
                </form>
            </div>
        )
    };
    return (
        <div className="signup-form-wrapper">
            <form className="signup-form-container" onSubmit={props.handleSubmitPass}>
                <h3 className="signup-head">Edit Password</h3>
                <input className="signup-form-input" onChange={props.handleChange}
                    value={props.passEdit}
                    name="password"
                    type="password"
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?=.*\D).{6,}"
                    title="Must contain at least one number, one special character, one uppercase and one lowercase letter, and to be a min. length of 6 characters"
                    placeholder="Min. 6 Characters" />

                <button className="signup-butt" onClick={props.toggleIsEditingPass}>Back to Profile</button>
                <button className="signup-butt" disabled={!props.passEdit} type="submit">Save New Password</button>

                {props.errMsg && <p>{props.errMsg}</p>}

            </form>
        </div>
    )
}

export default connect(state => state.user, {})(ProfilePassEdit);