export const updateVerifiedLead = (recordID) => {
  try {
    return fetch(`/api/update_verified_lead`, {
      method: "POST",
      body: recordID,
    }).then((res) => res.json());
  } catch (error) {
    console.log("error on update Verified Lead: ", error);
    return {
      status: 500,
      message: "There was an unknown error. Try again or give us a call.",
    };
  }
};
