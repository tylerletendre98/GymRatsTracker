import React from "react";
import CreateAccount from "../../components/createAccount/CreateAccount";

function CreateAccountPage(props) {
  return (
    <div>
      <CreateAccount createNewAccount={props.createNewAccount} />
    </div>
  );
}

export default CreateAccountPage;
