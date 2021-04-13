const isEmpty = formValue => {
  if (formValue.trim().length === 0) {
    return { error: "Can't be empty" };
  }
  return null;
};

const validateName = async name => {
  try {
    await isEmpty(name);
    return null;
  } catch (exception) {
    return exception;
  }
};

const validators = {
  validateName
};

export default validators;
