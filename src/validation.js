export function validateMobile(custMobile, optional) {
  const reMobile = /^[6789]\d{9}$/;
  if (custMobile === "") {
    if (!optional) {
      return {
        isValid: false,
        errMessage: "Please enter your mobile number"
      };
    } else {
      return {
        isValid: true,
        errMessage: ""
      };
    }
  } else if (custMobile.length !== 10) {
    return {
      isValid: false,
      errMessage: "Mobile number should be of 10 digits"
    };
  } else if (!reMobile.test(custMobile)) {
    return {
      isValid: false,
      errMessage: "Please provide a valid 10 digit Mobile number"
    };
  } else
    return {
      isValid: true,
      errMessage: ""
    };
}

export function validateEmail(custEmail, optional) {
  const reEmail = /^[a-z0-9._%+-]+@[a-z-]{2,}\.[a-z]{2,}(\.[a-z]{1,}|$)$/;
  custEmail = custEmail.toLowerCase();
  if (custEmail === "") {
    if (!optional) {
      return {
        isValid: false,
        errMessage: "Please enter your email"
      };
    } else {
      return {
        isValid: true,
        errMessage: ""
      };
    }
  } else if (!reEmail.test(custEmail)) {
    return {
      isValid: false,
      errMessage: "Please enter valid email"
    };
  } else
    return {
      isValid: true,
      errMessage: ""
    };
}

export function validateAge(custAge, optional) {
  const reAge = /^[1-9]{1}[0-9]{0,1}$/;
  if (custAge === "") {
    if (!optional) {
      return {
        isValid: false,
        errMessage: "Please enter your age"
      };
    } else {
      return {
        isValid: true,
        errMessage: ""
      };
    }
  } else if (!reAge.test(custAge)) {
    return {
      isValid: false,
      errMessage: "Please enter valid age"
    };
  } else
    return {
      isValid: true,
      errMessage: ""
    };
}
