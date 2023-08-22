const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).{6,}$/;
const numberRegex = /^[1-9]\d{9}$/;
const wordRegex = /^[A-Za-z\s]+$/;
const dateRegex = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;

export function Validate(input) {
    const errors = {};
    
  if (!wordRegex.test(input.name) && input.name.length > 0) errors.name1 = true;

  if (!wordRegex.test(input.lastName) && input.lastName.length > 0)
    errors.lastName1 = true;

  if (!numberRegex.test(input.phone) && input.phone.length > 0)
    errors.phone1 = true;

  if (!emailRegex.test(input.email) && input.email.length > 0)
    errors.email1 = true;

  if (!dateRegex.test(input.birthDate) && input.birthDate.length > 0)
    errors.birthDate1 = true;

  if (!passwordRegex.test(input.password) && input.password.length > 0)
    errors.password1 = true;

  return errors;
}




