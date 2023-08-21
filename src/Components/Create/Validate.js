const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).{6,}$/;
const numberRegex = /^[1-9]\d{9}$/;
const wordRegex = /^[A-Za-z\s]+$/;

export default function Validate(input) {
    const errors = {};
    if (input.name === "") errors.name = true;
    else if (!wordRegex.test(input.name)) errors.name1 = true;

    if (input.lastName === "") errors.lastName = true;
    else if (!wordRegex.test(input.lastName)) errors.lastName1 = true;

    if (input.phone === "") errors.phone1 = true;
    else if (!numberRegex.test(input.phone)) errors.phone = true;

    if (!emailRegex.test(input.email)) errors.email = true;

    if (!passwordRegex.test(input.password)) errors.password = true;

    if (input.gender === "") errors.gender = true;

    if (input.address === "") errors.address = true;

    if (input.birthDate === "") errors.birthDate = true;


    return errors;
} 